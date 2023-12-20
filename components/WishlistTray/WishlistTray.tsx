import { useWishlist } from "@/context/WishlistProvider/WishlistProvider";
import React from "react";
import GameCardById from "../GameCardById";

const WishlistTray = ({ round = false }: { round?: boolean }) => {
  const {
    status: deleteSuccess,
    error,
    refetch,
    remove,
    wishlist,
  } = useWishlist();

  return (
    <div className={"flex gap-10 " + (round ? " flex-wrap " : " ")}>
      {round
        ? wishlist.map((id) => <GameCardById key={id} gameId={id} />)
        : wishlist
            .slice(0, 4)
            .map((id) => <GameCardById key={id} gameId={id} />)}
    </div>
  );
};

export default WishlistTray;
