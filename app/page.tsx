"use client";
import GameCardGrid from "@/components/GameCardGrid";

export default function Home() {
  return (
    <>
      <main className="md:col-start-2 min-h-[90vh] md:col-end-6 md:pr-4   pt-10 col-span-5">
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
