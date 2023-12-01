"use client";
import MainSidebar from "@/components/MainSidebar";
import Navigation from "@/components/Navigation";
import { GameDataType } from "@/components/GameCard/GameCard";
import GameCardGrid from "@/components/GameCardGrid";

interface FetchedGamesResponse {
  count: number;
  results: GameDataType[];
}

export default function Home() {
  return (
    <>
      <header className="w-full  col-span-full mb-20">
        <Navigation />
      </header>
      <MainSidebar className=" fixed hidden sm:flex w-1/5 text-white" />
      <main className="sm:col-start-2 min-h-[90vh] sm:col-end-6 sm:pr-4   pt-10 col-span-5">
        <div className="headingText mb-6">
          <h1 className=" text-center  sm:text-justify font-heading text-3xl sm:text-6xl text-white capitalize sm:mb-2 ">
            New And Treanding Games
          </h1>
          <p className="text-white sm:text-xl font-retro sm:text-justify text-center">
            Based on player counts and release date.
          </p>
        </div>
        <GameCardGrid />
      </main>
    </>
  );
}
