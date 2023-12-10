"use client";
import parse from "html-react-parser";
import useGame from "@/hooks/useGame";
import React from "react";
import ApiErrorHandler from "@/components/ApiErrorHandler";
import GameShowCaseSkeleton from "./GameShowCaseSkeleton";
import { getCropedImage } from "@/services/image-url";
import generatePlatfromLogo from "@/utils/generatePlatfromLogo";
import GameImageShowCase from "@/components/GameImageShowCase";
import Link from "next/link";
import DeveloperList from "@/components/DeveloperList";

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
  website: string;
  updated: string;
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
          <div className="md:fixed absolute -z-10 h-screen top-0 left-0 w-screen">
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
          <div className="flex md:flex-row flex-col justify-evenly ">
            <div className="w-full md:w-5/12 md:mb-0 mb-10">
              <GameImageShowCase gameId={gameId} />
            </div>
            <div className="w-full md:w-5/12 flex justify-between">
              <div className="w-2/3 gap-5 flex flex-col flex-wrap">
                <div className="">
                  <h4 className="text-gray-500 text-sm">Platfrom</h4>
                  <ul className="flex gap-1 flex-wrap">
                    {gameData.platforms.map((platform) => (
                      <li>
                        <Link
                          className="hover:text-main-color"
                          href={`/games/platforms/${platform.platform.id}`}
                        >
                          {platform.platform.name},
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full ">
                  <h4 className="text-gray-500 text-sm">Website</h4>
                  <a
                    href={gameData.website}
                    target="_blank"
                    className="hover:text-main-color "
                  >
                    {gameData.website}
                  </a>
                </div>
                <div className="">
                  <h4 className="text-gray-500 text-sm">Released</h4>
                  <p className="">{gameData.released}</p>
                </div>
              </div>

              <div className="w-1/3 flex flex-col gap-16">
                <div className="">
                  <h4 className="text-gray-500 text-sm">Last Update</h4>
                  <p>{gameData.updated.slice(0, 10)}</p>
                </div>
                <div className="">
                  <h4 className="text-gray-500 text-sm">Critice</h4>
                  <p>{gameData.metacritic}</p>
                </div>
                <div className="">
                  <h4 className="text-gray-500 text-sm">Ratings</h4>
                  <p>{gameData.rating}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-4xl">Creators</h3>
            <DeveloperList gameId={gameId} />
          </div>
        </div>
      )}
    </>
  );
};

export default GameShowCase;
