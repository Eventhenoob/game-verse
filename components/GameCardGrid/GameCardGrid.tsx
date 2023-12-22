import ApiErrorHandler from "../ApiErrorHandler";
import GameCard from "../GameCard/GameCard";
import GameCardSekeleton from "../GameCard/GameCardSkeleton/GameCardSekeleton";
import useGames from "@/hooks/useGames";
import { getCropedImage } from "@/services/image-url";
import { GameDataType } from "@/components/GameCard/GameCard";
import { useEffect, useState } from "react";
import OrderByTray from "../OrderByTray";

interface Props {
  params?: {};
  Shorting?: boolean;
}

const GameCardGrid = ({ Shorting = true, params = {} }: Props) => {
  const [currentOrder, setCurrentOrder] = useState("-ratings");
  const [pageCounter, setPageCounter] = useState(1);
  const [currentNext, setCurrentNext] = useState<string | null>("temp");
  const [currentGameData, setCurrentGameData] = useState<GameDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { error, gamesData, retry, next } = useGames({
    ...params,
    games_count: 24,
    ordering: currentOrder,
  });

  const updateGameData = () => {
    if (gamesData && currentNext != next) {
      setCurrentGameData((prev) => [...prev, ...gamesData]);
      setCurrentNext(next);
      setIsLoading(false);
    }
  };

  const reset = () => {
    retry();
    setPageCounter(1);
    setCurrentGameData([]);
    setCurrentNext(() => next);
  };

  const loadMore = () => {
    retry({ page: pageCounter + 1 });
    setPageCounter((prev) => prev + 1);
  };

  useEffect(reset, [currentOrder]);

  useEffect(() => {
    if (isLoading) {
      loadMore();
    }
  }, [isLoading]);

  const setLoadingTrue = () => {
    let isScrolledToBottom =
      window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight;
    if (isScrolledToBottom && currentNext != null) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setLoadingTrue);
    return () => window.removeEventListener("scroll", setLoadingTrue);
  }, []);

  useEffect(updateGameData, [gamesData]);

  return (
    <>
      <div
        className={
          "flex items-center md:justify-start mb-8 justify-end pr-6 pl-6 " +
          (!Shorting && " hidden ")
        }
      >
        <OrderByTray setValueFunction={setCurrentOrder} />
      </div>

      <div
        className={
          " m-auto flex flex-wrap sm:flex-row flex-col sm:w-auto w-3/4 sm:gap-10 md:gap-7 lg:gap-14  gap-14 items-center justify-center md:justify-between  text-white " +
          (currentGameData.length !== 0 ? "" : "hidden")
        }
      >
        {currentGameData.length !== 0 &&
          currentGameData.map((game) => (
            <GameCard
              parent_platforms={game.parent_platforms}
              key={game.id}
              id={game.id}
              background_image={getCropedImage(game.background_image)}
              name={game.name}
              rating={game.rating}
              released={game.released}
            />
          ))}
      </div>
      <div
        className={
          " m-auto mt-4 flex flex-wrap sm:flex-row flex-col md:w-auto w-3/4 gap-10 items-center justify-center md:justify-evenly  text-white " +
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
      <ApiErrorHandler
        isNextNull={currentNext == null}
        error={error}
        retry={retry}
      />
    </>
  );
};

export default GameCardGrid;
