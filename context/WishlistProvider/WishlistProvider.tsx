"use client";
import useWishlistInternal from "@/hooks/useWishlistInternal";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useContext, useEffect } from "react";

type contextData = {
  wishlist: number[];
  refetch: () => void;
  remove: (gameId: number) => void;
  add: (gameId: number) => void;
  error: string;
  status: string;
};
const WishlistContext = createContext<contextData>({
  wishlist: [],
  refetch: () => {},
  remove: (gameId: number) => {},
  add: (gameId: number) => {},
  error: "",
  status: "",
});

const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const { data } = useSession();
  const { error, refetch, wishlist, remove, status, add } = useWishlistInternal(
    data?.user?.email || null
  );

  useEffect(() => {
    if (data && data.user && data.user.email) {
      refetch();
    }
  }, [data]);

  return (
    <WishlistContext.Provider
      value={{ error, refetch, wishlist, remove, status, add }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

export default WishlistProvider;
