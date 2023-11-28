"use client";

import { useEffect, useRef, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";

const SearchBox = () => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
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
        " w-full relative pl-2 rounded-xl flex   items-center overflow-hidden transition-colors duration-300 " +
        (isActive ? "bg-white" : "bg-gray-600") +
        " sm:visible invisible"
      }
    >
      <TbSearch
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
          "w-full mr-4 transition-colors duration-300 p-2 focus:outline-none font-bold " +
          (isActive ? "bg-white" : "bg-gray-600")
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
          "absolute text-slate-400 transition-opacity duration-300 right-3 " +
          (!isActive ? "opacity-100" : "invisible opacity-0")
        }
      >
        <span className=" text-xs border-[1px] bg-opacity-30 border-slate-400 p-[.3rem] pt-0 pb-0">
          alt
        </span>{" "}
        +{" "}
        <span className=" text-xs border-[1px] bg-opacity-30 border-slate-400 p-[.3rem] pt-0 pb-0">
          enter
        </span>
      </p>
    </form>
  );
};

export default SearchBox;
