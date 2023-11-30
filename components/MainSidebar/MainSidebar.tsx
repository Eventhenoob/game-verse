"use client";
import Link from "next/link";
import { MdBookmarkAdd, MdLibraryAdd } from "react-icons/md";
interface Props {
  className: string;
}

const MainSidebar = ({ className }: Props) => {
  return (
    <aside
      className={
        className +
        " pl-10 removeScroll font-heading gap-6 h-[90vh] overflow-y-scroll flex-col pt-14 mt-12"
      }
    >
      <Link
        href={"/"}
        className="text-3xl hover:text-main-color transition-all duration-300 flex items-center gap-2 text-white"
      >
        Home
      </Link>

      <Link
        href={"/"}
        className="text-3xl hover:text-main-color transition-all duration-300 flex items-center gap-2 text-white"
      >
        Reviews
      </Link>

      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/"}
            className="text-3xl hover:text-main-color transition-all duration-300 flex items-center gap-4 text-white"
          >
            Profile
            <div className="w-9 h-9 bg-green-500 rounded-full"> </div>
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
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 "
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <MdBookmarkAdd className="" />
            </div>
            People you follow
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/"}
            className="text-3xl hover:text-main-color transition-all duration-300 flex items-center gap-4 text-white"
          >
            New Releases
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
            Last 30 days
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
            This week
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 "
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <MdBookmarkAdd className="" />
            </div>
            Next week
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 "
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <MdBookmarkAdd className="" />
            </div>
            Release calendar
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/"}
            className="text-3xl hover:text-main-color transition-all duration-300 flex items-center gap-4 text-white"
          >
            Top
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
            Best of the year
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
            Popular in 2022
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 "
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <MdBookmarkAdd className="" />
            </div>
            All time top 250
          </Link>
        </li>
      </ul>

      <Link
        href={"/"}
        className="text-3xl hover:text-main-color transition-all duration-300 flex items-center  text-white"
      >
        All Games
      </Link>

      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/"}
            className="text-2xl hover:text-main-color transition-all duration-300 flex items-center gap-4 text-white"
          >
            Browse
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
            Platforms
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
            Stores
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 "
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <MdBookmarkAdd className="" />
            </div>
            Collections
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/"}
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
              <MdBookmarkAdd className="" />
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
              <MdLibraryAdd />
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
              <MdBookmarkAdd className="" />
            </div>
            Xbox One
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/"}
            className="text-2xl hover:text-main-color transition-all duration-300 flex items-center gap-4 text-white"
          >
            Genres
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
            PC
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
            Action
          </Link>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="hover:text-main-color group transition-all duration-300 flex items-center gap-4 "
          >
            <div className="p-2 text-white group-[:hover]:bg-main-color transition-all duration-300 bg-black rounded-xl ">
              <MdBookmarkAdd className="" />
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
              <MdBookmarkAdd className="" />
            </div>
            RPG
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSidebar;
