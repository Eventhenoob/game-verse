"use client";
import generatePlatfromLogo from "@/utils/generatePlatfromLogo";
import Link from "next/link";
import AddToWishlistButton from "../AddToWishlistButton";
import { useWishlist } from "@/context/WishlistProvider/WishlistProvider";
import { useSession } from "next-auth/react";

interface Platform {
  id: number;
  name: string;
}

export interface GameDataType {
  id: string;
  name: string;
  rating: number;
  released: string;
  background_image: string;
  parent_platforms: { platform: Platform }[] | undefined;
}

const GameCard = ({
  id,
  name,
  rating,
  released,
  background_image,
  parent_platforms,
}: GameDataType) => {
  const { status } = useSession();
  const { add, remove, wishlist } = useWishlist();
  return (
    <div className="p-0 overflow-hidden relative hover:scale-110 transition-all duration-200 shadow-2xl cursor-pointer rounded-xl w-full sm:w-72 md:w-64 lg:w-72 shrink-0 bg-zinc-900">
      <img
        alt={name}
        src={background_image}
        className="10rem 100% rounded-xl object-fill"
      />
      {status === "authenticated" && (
        <AddToWishlistButton
          add={add}
          gameId={+id}
          isAdded={wishlist.includes(+id)}
          remove={remove}
        />
      )}

      <Link
        href={`/game/${id}`}
        className="block info text-white p-2 mt-1 hover:text-main-color transition-all"
      >
        <h3 className="  font-retro text-2xl">{name}</h3>
        <ul className="mt-2 text-white font-heading">
          <li className="flex justify-between border-b-[1px] border-slate-200 border-opacity-25 pb-2 pt-2">
            Release Data:{" "}
            <span className="text-main-color font-retro">{released}</span>
          </li>
          <li className="flex justify-between border-b-[1px] border-slate-200 border-opacity-25 pb-2 pt-2">
            Rating: <span className="text-main-color font-retro">{rating}</span>
          </li>
          <li className="flex justify-between  border-opacity-25 pb-2 pt-2">
            Platforms:{" "}
            <span className="text-main-color inline-flex gap-2 font-retro">
              {parent_platforms &&
                generatePlatfromLogo(
                  parent_platforms.map((platform) => platform.platform.name)
                )}
            </span>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default GameCard;
