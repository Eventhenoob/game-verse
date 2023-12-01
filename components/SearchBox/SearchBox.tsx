"use client";

import { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";

const SearchBox = () => {
  const [mobileSearch, setMobileSearch] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
      }, 200);
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
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          if (
            !(document.activeElement === inputRef.current) &&
            inputRef.current?.value == ""
          ) {
            setIsActive(false);
          }
        }}
        className={
          "w-full relative pl-2 border-b-4  flex rounded-md items-center overflow-hidden transition-colors duration-300 " +
          (isActive
            ? "bg-slate-200 border-green-500 "
            : "bg-gray-600 border-gray-600") +
          " sm:visible invisible"
        }
      >
        <LuSearch
          className={
            "transition-colors duration-300 " +
            (isActive ? "text-black" : "text-slate-700")
          }
        />

        <input
          onFocus={() => setIsActive(true)}
          onBlur={(e) => {
            if (e.target.value == "") setIsActive(false);
          }}
          ref={inputRef}
          type="text"
          placeholder="Search Games Here"
          className={
            "w-full peer mr-4 transition-colors  duration-300 p-2 focus:outline-none font-bold " +
            (isActive ? "bg-slate-200" : "bg-gray-600")
          }
        />

        <button
          type="reset"
          onClick={() => inputRef.current?.focus()}
          className={
            "absolute z-10 right-2 font-bold transition-opacity duration-300 " +
            (!isActive ? " opacity-0" : "opacity-100")
          }
        >
          <RxCross1 />
        </button>

        <p
          className={
            "absolute text-slate-300 font-retro transition-opacity text-sm duration-300 right-3 " +
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

      <div className="visible sm:invisible flex justify-center">
        <button className="text-xl" onClick={() => toggleMobileSearch()}>
          <LuSearch className={"active:hover:text-main-color text-white"} />
        </button>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={
            " w-[95vw] mt-10 left-[50%] translate-x-[-50%] z-30 absolute pl-2 border-b-4 flex items-center overflow-hidden transition-all duration-300 " +
            (isActiveMobile
              ? "bg-slate-200 focus:invalid:border-red-500  border-green-500 "
              : "bg-gray-600 border-gray-600") +
            (mobileSearch ? " visible opacity-100 " : " invisible opacity-0") +
            " visible sm:invisible"
          }
        >
          <LuSearch
            className={
              "transition-colors duration-300 " +
              (isActiveMobile ? "text-black" : "text-slate-700")
            }
          />

          <input
            onFocus={() => setIsActiveMobile(true)}
            onBlur={(e) => {
              if (e.target.value == "") setIsActiveMobile(false);
            }}
            type="text"
            placeholder="Search Games Here"
            className={
              "w-full mr-4 transition-colors duration-300 p-2 focus:outline-none font-bold " +
              (isActiveMobile ? "bg-slate-200" : "bg-gray-600")
            }
          />

          <button
            type="reset"
            onClick={() => inputRef.current?.focus()}
            className={
              "absolute z-10 right-2 font-bold transition-opacity duration-300 " +
              (!isActiveMobile ? " opacity-0" : "opacity-100")
            }
          >
            <RxCross1 />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
