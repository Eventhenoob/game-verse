import { GameDataType } from "@/components/GameCard/GameCard";
import useData from "./useDataArr";
const useGames = (perams = {}) => {
  const { data, error, retry } = useData<GameDataType>("games", perams);
  return { gamesData: data, error, retry };
};

export default useGames;
