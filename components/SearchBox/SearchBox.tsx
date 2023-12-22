"use client";

import { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import useGameNames from "@/hooks/useGameNames";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
const SearchBox = () => {
  const router = useRouter();
  const [mobileSearch, setMobileSearch] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { error, gameNameData, retry } = useGameNames();

  const getNewData = debounce((query: string) => {
    retry({ search: query });
  }, 200);

  const toggleMobileSearch = () => {
    setMobileSearch((prev) => !prev);
  };

  useEffect(() => {
    const items: string[] = [];
    const clearArrayTimer: number | null = null;
    const clearItems = () => {
      if (clearArrayTimer) clearTimeout(clearArrayTimer);
      setTimeout(() => {
        items.length = 0;
      }, 3000);
    };

    const onKeyPress = (e: KeyboardEvent) => {
      items.push(e.key);
      let isKeys = false;

      for (let i = 0; i < items.length - 1; i++) {
        if (items[i] === "Alt" && items[i + 1] === "Enter") {
          isKeys = true;
          break;
        }
      }

      clearItems();
      if (isKeys) {
        if (inputRef.current != null) inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", onKeyPress);
    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  }, []);

  return (
    <div className="flex z-30 flex-col w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputRef.current?.value) {
            router.push(`/search/${inputRef.current.value}`);
            inputRef.current.blur();
            setIsActive(false);
          }
        }}
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          if (!(document.activeElement === inputRef.current)) {
            setIsActive(false);
          }
        }}
        className={
          "md:w-full md:relative  md:visible md:top-0 pl-2 border-b-4  flex rounded-md items-center overflow-hidden transition-colors duration-300 " +
          (isActive
            ? "bg-slate-200 border-green-500 "
            : "bg-gray-600 border-gray-600") +
          " absolute top-20  w-[90%] left-[50%] -translate-x-[50%] m-auto " +
          (mobileSearch ? " visible " : " invisible ")
        }
      >
        <LuSearch
          className={
            "transition-colors duration-300 " +
            (isActive ? "text-black" : "text-slate-700")
          }
        />

        <input
          onChange={(e) => {
            getNewData(e.target.value);
          }}
          onFocus={() => setIsActive(true)}
          onBlur={(e) => {
            setIsActive(false);
          }}
          ref={inputRef}
          type="text"
          placeholder="Search Games Here"
          className={
            "w-full peer mr-12 md:mr-4 transition-colors  duration-300 p-2 focus:outline-none font-bold " +
            (isActive ? "bg-slate-200" : "bg-gray-600")
          }
        />

        <button
          type="reset"
          onClick={() => inputRef.current?.focus()}
          className={
            "absolute z-10 right-10 md:right-2 font-bold transition-opacity duration-300 " +
            (!isActive ? " opacity-0" : "opacity-100")
          }
        >
          <RxCross1 />
        </button>
        <button
          type="submit"
          onClick={() => inputRef.current?.focus()}
          className={
            "absolute z-10 block md:hidden  right-0 font-bold transition-color duration-500  h-full p-2 " +
            (isActive ? " bg-main-color " : "")
          }
        >
          <LuSearch />
        </button>

        <p
          className={
            "absolute text-slate-300 hidden md:block font-retro transition-opacity text-sm duration-300 right-3 " +
            (!isActive ? "opacity-100" : "invisible opacity-0")
          }
        >
          <span className="  border-[1px] rounded-sm border-opacity-70 border-slate-300 p-2 pt-0 pb-0">
            alt
          </span>{" "}
          +{" "}
          <span className="  border-[1px] rounded-sm border-opacity-70 border-slate-300 p-2 pt-0 pb-0">
            enter
          </span>
        </p>
      </form>
      <button
        className="text-xl md:hidden self-end"
        onClick={() => toggleMobileSearch()}
      >
        <LuSearch className={"active:hover:text-main-color text-white"} />
      </button>

      <div
        className={
          "bg-gray-800 text-slate-300 absolute top-[8.5rem] md:top-[90px] rounded-lg left-[50%] -translate-x-[50%] gap-3  md:w-[70%] w-[90vw] m-auto h-96 p-5 flex flex-col transition-all duration-500 overflow-y-scroll overflow-x-hidden removeScroll " +
          (isActive && inputRef.current?.value != ""
            ? " visible opacity-100 "
            : " invisible opacity-0 ")
        }
      >
        {gameNameData &&
          gameNameData.map((gameName) => (
            <p
              onClick={(e) => {
                if (inputRef.current) {
                  inputRef.current.value = e.currentTarget.textContent || "";
                  inputRef.current?.focus();
                }
              }}
              key={gameName.id}
              className="flex gap-2 text-xl items-center leading-6 font-heading hover:text-main-color cursor-pointer "
            >
              <LuSearch className={" text-white "} />
              {gameName.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default SearchBox;
