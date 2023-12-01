import rawgApiClient from "@/services/rawg-api-client";
import { useState, useEffect } from "react";
import GameCard, { GameDataType } from "../GameCard/GameCard";
import GameCardSekeleton from "../GameCard/GameCardSkeleton/GameCardSekeleton";
import useGames from "@/hooks/useGames";

const GameCardGrid = () => {
  const { error, gamesData, retry } = useGames();

  return (
    <>
      <div className={"text-center " + (error != "" ? "" : "hidden")}>
        <p className="text-white">{error}</p>
        <button
          onClick={() => retry()}
          className="bg-red-500 p-4 pt-2 pb-2 rounded-md hover:bg-red-700 transition-all duration-300 font-retro"
        >
          Retry
        </button>
      </div>
      <div
        className={
          " m-auto flex flex-wrap sm:flex-row flex-col md:w-auto w-3/4 gap-10 items-center justify-center md:justify-evenly  text-white " +
          (gamesData !== null || error !== "" ? "hidden" : "")
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
          " m-auto flex flex-wrap sm:flex-row flex-col sm:w-auto w-3/4 gap-10 items-center justify-center md:justify-evenly  text-white " +
          (gamesData !== null ? "" : "hidden")
        }
      >
        {gamesData &&
          gamesData.map((game) => (
            <GameCard
              parent_platforms={game.parent_platforms}
              key={game.id}
              id={game.id}
              background_image={game.background_image}
              name={game.name}
              rating={game.rating}
              released={game.released}
            />
          ))}
      </div>
    </>
  );
};

export default GameCardGrid;
