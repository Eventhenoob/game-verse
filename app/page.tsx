"use client";
import GameCardSekeleton from "@/components/GameCard/GameCardSkeleton";
import MainSidebar from "@/components/MainSidebar";
import Navigation from "@/components/Navigation";
import SearchBox from "@/components/SearchBox";
import axios from "axios";
import { useEffect, useState } from "react";
import GameCard, { GameDataType } from "@/components/GameCard/GameCard";

export default function Home() {
  const [gameDataArr, setGameDataArr] = useState<GameDataType[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(
        "https://api.rawg.io/api/games?key=078c7c1a588b40d6890e56947909c547"
      );

      if (req.data.results) {
        const data = req.data.results.map((game: GameDataType) => ({
          ...game,
        }));
        setGameDataArr(data);
      }
    };
    fetchData();
    return () => {};
  }, []);

  return (
    <>
      <header className="w-full  col-span-full mb-20">
        <Navigation />
      </header>

      <MainSidebar className=" fixed hidden sm:flex w-1/5 text-white" />
      <main className="sm:col-start-2 sm:col-end-6 sm:pr-4   pt-10 col-span-5">
        <div className="headingText mb-6">
          <h1 className=" text-center  sm:text-justify font-heading text-3xl sm:text-6xl text-white capitalize sm:mb-2 ">
            New And Treanding Games
          </h1>
          <p className="text-white sm:text-xl font-retro sm:text-justify text-center">
            Based on player counts and release date.
          </p>
        </div>
        <div
          className={
            " m-auto flex flex-wrap sm:flex-row flex-col sm:w-auto w-3/4 gap-10 items-center justify-center sm:justify-evenly  text-white " +
            (gameDataArr !== null ? "hidden" : "")
          }
        >
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
        </div>

        <div
          className={
            " m-auto flex flex-wrap sm:flex-row flex-col sm:w-auto w-3/4 gap-10 items-center justify-center sm:justify-evenly  text-white " +
            (gameDataArr !== null ? "" : "hidden")
          }
        >
          {gameDataArr &&
            gameDataArr.map((game) => (
              <GameCard
                background_image={game.background_image}
                name={game.name}
                rating={game.rating}
                released={game.released}
              />
            ))}
        </div>
      </main>
    </>
  );
}
