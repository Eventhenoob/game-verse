"use client";

import useGame from "@/hooks/useGame";
import GameCard from "../GameCard";

const GameCardById = ({ gameId }: { gameId: number }) => {
  const { error, gameData, retry } = useGame(gameId);

  return (
    gameData && (
      <GameCard
        background_image={gameData.background_image}
        id={`${gameId}`}
        name={gameData.name}
        parent_platforms={gameData.parent_platforms}
        rating={gameData.rating}
        released={gameData.released}
      />
    )
  );
};

export default GameCardById;
