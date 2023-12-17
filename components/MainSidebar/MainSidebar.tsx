"use client";
import Link from "next/link";
import { LuSwords } from "react-icons/lu";
import { MdBookmarkAdd, MdOutlineStore, MdLibraryAdd } from "react-icons/md";
import { GiFlatPlatform, GiStarfighter } from "react-icons/gi";
import { SiGradleplaypublisher } from "react-icons/si";
import {
  RiComputerFill,
  RiXboxLine,
  RiPlaystationFill,
  RiBrainLine,
} from "react-icons/ri";
import { useSession } from "next-auth/react";
interface Props {
  className: string;
}

const MainSidebar = ({ className }: Props) => {
  const { data } = useSession();
  return (
    <aside
      className={
        className +
        " pl-10 removeScroll font-heading gap-6 h-[90vh] overflow-y-scroll flex-col pt-14 mt-12"
      }
    >
      <Link
        href={"/games"}
        className="text-3xl hover:text-main-color transition-all duration-300 flex items-center gap-2 text-white"
      >
        Home
      </Link>

      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/"}
            className="text-3xl hover:text-main-color transition-all duration-300 flex items-center gap-4 text-white"
          >
            Profile
            {data && (
              <div className="w-9 h-9 overflow-hidden bg-green-500 rounded-full">
                <img src={`avator${data.user?.image}.png`} alt="" />
              </div>
            )}
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group   transition-all duration-300 flex items-center gap-4 text-white"
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <MdBookmarkAdd className="" />
            </div>
            Wishlist
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 text-white"
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <MdLibraryAdd />
            </div>
            My Library
          </Link>
        </li>
      </ul>

      <Link
        href={"/games"}
        className="text-3xl hover:text-main-color transition-all duration-300 flex items-center  text-white"
      >
        All Games
      </Link>

      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/browse"}
            className="text-2xl hover:text-main-color transition-all duration-300 flex items-center gap-4 text-white"
          >
            Browse
          </Link>
        </li>
        <li className="">
          <Link
            href={"/browse/platforms"}
            className="hover:text-main-color group   transition-all duration-300 flex items-center gap-4 text-white"
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <GiFlatPlatform className="" />
            </div>
            Platforms
          </Link>
        </li>
        <li className="">
          <Link
            href={"/browse/stores"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 text-white"
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <MdOutlineStore />
            </div>
            Stores
          </Link>
        </li>
        <li className="">
          <Link
            href={"/browse/publishers"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 "
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <SiGradleplaypublisher className="" />
            </div>
            Publishers
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/browse/platforms"}
            className="text-2xl hover:text-main-color transition-all duration-300 flex items-center gap-4 text-white"
          >
            Platforms
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group   transition-all duration-300 flex items-center gap-4 text-white"
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <RiComputerFill className="" />
            </div>
            PC
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 text-white"
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <RiPlaystationFill />
            </div>
            PlayStation 4
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 "
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <RiXboxLine className="" />
            </div>
            Xbox One
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/browse/genres"}
            className="text-2xl hover:text-main-color transition-all duration-300 flex items-center gap-4 text-white"
          >
            Genres
          </Link>
        </li>

        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 text-white"
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <GiStarfighter />
            </div>
            Action
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 "
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <RiBrainLine className="" />
            </div>
            Strategy
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 "
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <LuSwords className="" />
            </div>
            RPG
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSidebar;
