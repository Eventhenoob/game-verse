import { GameDataType } from "@/components/GameCard/GameCard";
import rawgApiClient from "@/services/rawg-api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

interface FetchedGamesResponse {
  count: number;
  results: GameDataType[];
}

const useGames = () => {
  const [gamesData, setGamesData] = useState<GameDataType[] | null>(null);
  const [error, setError] = useState("");
  const FetchAndSetGameData = () => {
    setError("");
    rawgApiClient
      .get<FetchedGamesResponse>("/games")
      .then((res) => {
        if (res.data.results) {
          const data = res.data.results.map((game: GameDataType) => ({
            ...game,
          }));

          setGamesData(data);
        }
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  useEffect(() => {
    const controler = new AbortController();
    setError("");
    rawgApiClient
      .get<FetchedGamesResponse>("/games", { signal: controler.signal })
      .then((res) => {
        if (res.data.results) {
          const data = res.data.results.map((game: GameDataType) => ({
            ...game,
          }));

          setGamesData(data);
        }
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
      });

    return () => {
      controler.abort;
    };
  }, []);
  return { gamesData, error, retry: FetchAndSetGameData };
};
export default useGames;
