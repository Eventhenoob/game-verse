import ApiErrorHandler from "../ApiErrorHandler";
import GameCard from "../GameCard/GameCard";
import GameCardSekeleton from "../GameCard/GameCardSkeleton/GameCardSekeleton";
import useGames from "@/hooks/useGames";
import { getCropedImage } from "@/services/image-url";

const GameCardGrid = () => {
  const { error, gamesData, retry } = useGames();

  return (
    <>
      <ApiErrorHandler error={error} retry={retry} />
      <div
        className={
          " m-auto flex flex-wrap sm:flex-row flex-col md:w-auto w-3/4 gap-10 items-center justify-center md:justify-evenly  text-white " +
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

      <div
        className={
          " m-auto flex flex-wrap sm:flex-row flex-col sm:w-auto w-3/4 gap-10 items-center justify-center md:justify-evenly  text-white " +
          (gamesData !== null ? "" : "hidden")
        }
      >
        {gamesData &&
          gamesData.map((game) => (
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
    </>
  );
};

export default GameCardGrid;
