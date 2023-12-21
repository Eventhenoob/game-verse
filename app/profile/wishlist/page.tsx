"use client";
import LoginMessage from "@/components/LoginMessage";
import GameShowCaseSkeleton from "@/components/ShowCases/GameShowCase/GameShowCaseSkeleton";
import WishlistTray from "@/components/WishlistTray";
import { useSession } from "next-auth/react";

const page = () => {
  const { status } = useSession();
  if (status === "authenticated")
    return (
      <main className="p-4 text-white   mainStylesDefault relative">
        <h3 className="font-heading mt-5 mb-10 text-4xl uppercase">
          Your Wishlist
        </h3>
        {<WishlistTray round={true} />}
      </main>
    );
  else if (status === "unauthenticated") {
    return (
      <main className="mainStylesDefault text-white">
        <LoginMessage />
      </main>
    );
  } else {
    return (
      <main className="mainStylesDefault p-4 text-white">
        <GameShowCaseSkeleton />
      </main>
    );
  }
};

export default page;
