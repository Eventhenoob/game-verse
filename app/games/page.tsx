"use client";
import { GameDataType } from "@/components/GameCard/GameCard";
import GameCardGrid from "@/components/GameCardGrid";

interface FetchedGamesResponse {
  count: number;
  results: GameDataType[];
}

export default function Games() {
  return (
    <>
      <main className="mainStylesDefault">
        <div className="headingText mb-6">
          <h1 className=" text-center  md:text-justify font-heading text-3xl md:text-6xl text-white capitalize md:mb-2 ">
            New And Treanding Games
          </h1>
          <p className="text-white md:text-xl font-retro md:text-justify text-center">
            Based on player counts and release date.
          </p>
        </div>
        <GameCardGrid />
      </main>
    </>
  );
}
