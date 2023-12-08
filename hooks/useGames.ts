import { GameDataType } from "@/components/GameCard/GameCard";
import useDataArr from "./useDataArr";
const useGames = (perams = {}) => {
  const { data, error, retry } = useDataArr<GameDataType>("games", perams);
  return { gamesData: data, error, retry };
};

export default useGames;
