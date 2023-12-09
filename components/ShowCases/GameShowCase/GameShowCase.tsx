"use client";
import parse from "html-react-parser";
import useGame from "@/hooks/useGame";
import React, { useEffect } from "react";
import ApiErrorHandler from "@/components/ApiErrorHandler";
import GameShowCaseSkeleton from "./GameShowCaseSkeleton";
import { getCropedImage } from "@/services/image-url";
import generatePlatfromLogo from "@/utils/generatePlatfromLogo";
import GameImageShowCase from "@/components/GameImageShowCase";

interface platform {
  name: string;
  id: number;
}

interface platformsData {
  platform: platform;
  released_at: string;
  requirements: {
    mininum: string;
    recommended: string;
  };
}

export interface gameData {
  name: string;
  description: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  playtime: number;
  metacritic: number;
  parent_platforms: { platform: platform }[];
  platforms: platformsData[];
}

const GameShowCase = ({ gameId }: { gameId: number }) => {
  const { error, gameData, retry } = useGame(gameId);
  // useEffect(() => {
  //   console.log(gameData);
  //   console.log(gameData?.platforms.map((item) => item.platform.name));
  // }, [gameData]);
  return (
    <>
      <ApiErrorHandler error={error} retry={retry} />;
      <div
        className={
          "flex flex-col w-10/12 m-auto gap-4 " +
          (gameData !== null || error !== "" ? " hidden " : "")
        }
      >
        <GameShowCaseSkeleton />
      </div>
      {gameData && (
        <div
          className={
            " pt-0 pb-0 p-5 flex font-heading  flex-col gap-5 text-white !mb-10"
          }
        >
          <div className="fixed -z-10 h-screen top-0 left-0 w-screen">
            <img
              className=" w-full bg-black opacity-20"
              src={getCropedImage(gameData.background_image)}
              alt={gameData.name + " image"}
            />
          </div>
          <div className="flex items-center gap-4">
            <p className="bg-white text-black p-2 pt-1 pb-1 text-sm rounded-md">
              {gameData.released}
            </p>
            <div className="flex gap-2">
              {generatePlatfromLogo(
                gameData.parent_platforms.map((item) => item.platform.name)
              )}
            </div>
            <p className="">
              Average PlayTime:{" "}
              <span className="font-retro text-main-color uppercase">
                {gameData.playtime} Hours
              </span>
            </p>
          </div>
          <div className="">
            <h1 className=" font-heading text-4xl md:text-6xl ">
              {gameData.name}
            </h1>
          </div>
          {parse(gameData.description)}
          <GameImageShowCase gameId={gameId} />
        </div>
      )}
    </>
  );
};

export default GameShowCase;
