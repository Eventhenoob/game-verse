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
    <div
      className={
        "m-auto flex flex-wrap sm:flex-row flex-col sm:w-auto w-3/4 sm:gap-10 md:gap-7 lg:gap-14  gap-14 items-center justify-center md:justify-evenly  text-white " +
        (round ? " flex-wrap " : " flex-nowrap ")
      }
    >
      {round
        ? wishlist.map((id) => <GameCardById key={id} gameId={id} />)
        : wishlist
            .slice(0, 4)
            .map((id) => <GameCardById key={id} gameId={id} />)}
    </div>
  );
};

export default WishlistTray;
