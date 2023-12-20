import axios from "axios";
import { GameDataType } from "@/components/GameCard/GameCard";
interface FetchedData {
  count: number;
  results: GameDataType[];
  next: string | null;
}

const getNextGames = async (url: string) => {
  let error: string = "";
  let next: null | string = null;
  let gameData: GameDataType[] | null = null;

  axios
    .get<FetchedData>(url)
    .then((res) => {
      if (res.data.results) {
        const data = res.data.results.map((data: GameDataType) => ({
          ...data,
        }));
        next = res.data.next;
        gameData = data;
      }
      return { gameData, error, next };
    })
    .catch((e) => {
      error = e.message;
      return { gameData, error, next };
    });
};

export default getNextGames;
