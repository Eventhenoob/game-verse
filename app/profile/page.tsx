"use client";
import WishlistTray from "@/components/WishlistTray";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import LoginMessage from "@/components/LoginMessage";
import GameShowCaseSkeleton from "@/components/ShowCases/GameShowCase/GameShowCaseSkeleton";

const page = () => {
  const { data, status } = useSession();

  if (status === "authenticated")
    return (
      <main className="mainStylesDefault text-white">
        <header className="flex border-b-[1px] md:flex-row flex-col border-gray-700 pt-20 pb-20 w-full gap-10 items-center relative">
          <img
            src={`/avator${data?.user?.image}.png`}
            alt="user avater image"
            className="profileImage transition-all duration-200 w-40 h-40 rounded-full group-[:hover]:opacity-30 group-[:hover]:blur-[1px]"
          />

          <div className="userDetails">
            <div className="flex gap-3 justify-center items-center">
              <h3 className="font-heading text-6xl">{data?.user?.name} </h3>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <Link
            href={"/profilesettings"}
            className="p-4 bg-white uppercase rounded-md hover:bg-slate-300 transition-all duration-200 text-black font-retro"
          >
            settings
          </Link>
          <button
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            className="text-black font-retro bg-red-500 rounded-md p-4 uppercase  hover:bg-red-600 transition-all duration-200"
          >
            Sign out
          </button>
        </header>

        <main className="p-4 relative flex flex-col justify-center items-center gap-10">
          <h3 className="font-heading mt-5 mb-5 text-4xl uppercase">
            Your Wishlist
          </h3>
          {<WishlistTray round={false} />}
          <Link
            href={"/profile/wishlist"}
            className=" md:absolute md:right-6 md:top-4 font-retro text-black transition-all duration-300 hover:bg-slate-300 active:bg-slate-300 uppercase rounded-md p-4 bg-white"
          >
            View More
          </Link>
        </main>
      </main>
    );
  else if (status === "loading") {
    return (
      <main className="mainStylesDefault gap-5 flex flex-col p-4">
        <GameShowCaseSkeleton />
      </main>
    );
  } else {
    return (
      <main className="mainStylesDefault  text-white">
        <LoginMessage />
      </main>
    );
  }
};

export default page;
