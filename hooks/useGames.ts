import { GameDataType } from "@/components/GameCard/GameCard";
import useDataArr from "./useDataArr";
const useGames = (perams = {}) => {
  const { data, error, retry, next } = useDataArr<GameDataType>(
    "games",
    perams
  );
  return { gamesData: data, error, retry, next };
};

export default useGames;
