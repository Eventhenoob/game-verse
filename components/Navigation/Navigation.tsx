"use client";
import React, { useEffect, useState } from "react";
import SearchBox from "../SearchBox";
import Link from "next/link";
import Image from "next/image";
import ProfileBox from "../ProfileBox";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuHeartHandshake } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdBookmarkAdd } from "react-icons/md";
import { GrList } from "react-icons/gr";

import { BsCollectionFill } from "react-icons/bs";
import { signIn, signOut, useSession } from "next-auth/react";
import { IoLogInSharp, IoLogOutSharp } from "react-icons/io5";

const Navigation = () => {
  const { status } = useSession();
  const [isMobNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    const deactivateMobileNav = () => {
      setIsMobileNavActive(false);
    };
    window.addEventListener("click", deactivateMobileNav);

    return () => window.removeEventListener("click", deactivateMobileNav);
  }, []);

  const toggleIsMobileNavActive = () => {
    setIsMobileNavActive((prev) => !prev);
  };
  return (
    <nav className="h-20 gap-2 fixed top-0 left-0 bg-black flex items-center z-50 p-4 pt-2 pb-2 w-full">
      <button
        className="text-white text-lg relative z-50 lg:hidden hover:active:text-main-color"
        onClick={(e) => {
          e.stopPropagation();
          toggleIsMobileNavActive();
        }}
      >
        <RxHamburgerMenu />
      </button>
      <Link href={"/"} className="z-50 relative shrink-0 mr-2 ">
        <Image
          src={"/logosmall.png"}
          alt="Logo"
          className="text-black h-auto md:h-auto md:w-[100px] w-20"
          height={128}
          width={347}
        />
      </Link>

      <SearchBox />
      <ProfileBox />

      <ul
        onClick={(e) => e.stopPropagation()}
        className={
          "h-full w-44 font-heading flex flex-col gap-5 text-lg bg-black fixed top-0 text-white transition-all duration-300 pt-24 left-0 z-40 " +
          (isMobNavActive ? " -translate-x-0" : " -translate-x-full")
        }
      >
        <li className="w-full pl-6 ">
          <Link
            onClick={() => setIsMobileNavActive(false)}
            href={"/games"}
            className="text-center inline-flex gap-2 items-center border-b-[1px] hover:active:text-main-color border-slate-300 border-opacity-20"
          >
            <GrList />
            All Games
          </Link>
        </li>
        <li className="w-full pl-6 ">
          <Link
            onClick={() => setIsMobileNavActive(false)}
            href={"/browse"}
            className="text-center inline-flex gap-2 items-center border-b-[1px] hover:active:text-main-color border-slate-300 border-opacity-20"
          >
            <BsCollectionFill />
            Browse
          </Link>
        </li>
        <li className="w-full pl-6 ">
          <Link
            onClick={() => setIsMobileNavActive(false)}
            href={"/profile"}
            className="text-center inline-flex gap-2 items-center border-b-[1px] hover:active:text-main-color border-slate-300 border-opacity-20"
          >
            <CgProfile />
            Profile
          </Link>
        </li>

        <li className="w-full pl-6 ">
          <Link
            onClick={() => setIsMobileNavActive(false)}
            href={"/profile/wishlist"}
            className="text-center inline-flex gap-2 items-center border-b-[1px] hover:active:text-main-color border-slate-300 border-opacity-20"
          >
            <MdBookmarkAdd />
            Wishlist
          </Link>
        </li>

        <li className="w-full pl-6 ">
          {status === "authenticated" && (
            <button
              onClick={() => {
                signOut({ callbackUrl: "/", redirect: true });
                setIsMobileNavActive(false);
              }}
              className="text-center inline-flex gap-2 items-center border-b-[1px] hover:active:text-main-color border-slate-300 border-opacity-20"
            >
              <IoLogOutSharp />
              sign out
            </button>
          )}

          {status === "unauthenticated" && (
            <button
              onClick={() => {
                signIn();
                setIsMobileNavActive(false);
              }}
              className="text-center inline-flex gap-2 items-center border-b-[1px] hover:active:text-main-color border-slate-300 border-opacity-20"
            >
              <IoLogInSharp />
              Log in
            </button>
          )}
        </li>

        <li className="mt-auto border-t-[1px] border-opacity-50 border-slate-400 ">
          <Link
            onClick={() => setIsMobileNavActive(false)}
            href={"/"}
            className="text-center p-2 flex hover:active:text-green-500 transition-colors duration-200 justify-center items-center border-b-[1px] text-sm text-red-600 border-slate-300 border-opacity-20"
          >
            <LuHeartHandshake /> <span className="ml-2">support us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
