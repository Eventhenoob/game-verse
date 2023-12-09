"use client";
import useDataArr from "./useDataArr";
import { gameImageData } from "@/components/GameImageShowCase/GameImageShowCase";
import { CategoryData } from "@/components/CategoryCard/CategoryCard";

const useGameImages = (gameId: number, params = {}) => {
  const { data, error, retry } = useDataArr<gameImageData>(
    `games/${gameId}/screenshots`,
    params
  );

  return { gameScreenShortData: data, error, retry };
};
export default useGameImages;
