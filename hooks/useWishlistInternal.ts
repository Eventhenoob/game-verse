import axios from "axios";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

const useWishlistInternal = (email: string | null) => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const controler = new AbortController();
  const refetch = debounce(() => {
    if (email) {
      axios
        .get("/api/wishlist", {
          signal: controler.signal,
          params: {
            key: "H@O230Cbh@50",
            email,
          },
        })
        .then((res: any) => {
          setWishlist(res.data);
        })
        .catch((e: any) => setError(e.message));
    }
  }, 200);

  const remove = debounce((gameId: number) => {
    if (email) {
      const wishlistTemp = [...wishlist];
      setWishlist((prev) => {
        return wishlist.filter((id) => id != gameId);
      });
      axios
        .delete("/api/wishlist", {
          params: {
            key: "H@O230Cbh@50",
            gameId,
            email,
          },
        })
        .then(() => {
          refetch();
          setStatus("success");
        })
        .catch(() => {
          setWishlist(wishlistTemp);
          setStatus("failed");
        });
    }
  }, 200);

  const add = debounce((gameId: number) => {
    const wishlistTemp = [...wishlist];
    setWishlist((prev) => {
      return [...wishlist, gameId];
    });
    if (email) {
      axios
        .post("/api/wishlist", {
          key: "H@O230Cbh@50",
          gameId,
          email,
        })
        .then(() => {
          refetch();
          setStatus("success");
        })
        .catch(() => {
          setWishlist(wishlistTemp);
          setStatus("failed");
        });
    }
  }, 200);

  useEffect(() => {
    if (email != null) {
      refetch();
      return () => controler.abort();
    }
  }, []);

  return { wishlist, error, refetch, remove, status, add };
};

export default useWishlistInternal;
