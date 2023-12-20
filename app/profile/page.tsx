"use client";
import WishlistTray from "@/components/WishlistTray";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiPlagueDoctorProfile } from "react-icons/gi";

const page = () => {
  const { data } = useSession();

  return (
    <main className="mainStylesDefault text-white">
      <header className="flex border-b-[1px] border-gray-700 pt-20 pb-20 w-full gap-10 items-center">
        <button className="group w-40 h-40 rounded-full relative overflow-hidden ">
          <img
            src={`avator${data?.user?.image}.png`}
            alt="user avater image"
            className="profileImage transition-all duration-200 w-40 h-40 rounded-full group-[:hover]:opacity-30 group-[:hover]:blur-[1px]"
          />
          <p className="w-[90%] text-center flex flex-col transition-all duration-200 justify-center items-center text-white font-retro group-[:hover]:opacity-100 opacity-0 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] uppercase">
            <GiPlagueDoctorProfile className="text-2xl" />{" "}
            <span>change avater</span>
          </p>
        </button>
        <div className="userDetails">
          <div className="flex gap-3 justify-center items-center">
            <h3 className="font-heading text-6xl">{data?.user?.name} </h3>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="p-4 relative">
        <h3 className="font-heading mt-5 mb-5 text-4xl uppercase">
          Your Wishlist
        </h3>
        <Link
          href={"/profile/wishlist"}
          className=" absolute right-6 top-4 font-retro text-black transition-all duration-300 hover:bg-slate-300 active:bg-slate-300 uppercase rounded-md p-4 bg-white"
        >
          View More
        </Link>
        {<WishlistTray round={false} />}
      </main>
    </main>
  );
};

export default page;
