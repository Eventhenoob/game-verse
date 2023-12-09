"use client";
import useData from "./useData";

import { gameData } from "@/components/ShowCases/GameShowCase/GameShowCase";

const useGame = (gameId: number) => {
  const { data, error, retry } = useData<gameData>(`games/${gameId}`);
  return { gameData: data, error, retry };
};

export default useGame;
