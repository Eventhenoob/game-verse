"use client";
import useGameImages from "@/hooks/useGameImages";
import ApiErrorHandler from "../ApiErrorHandler";
import { useEffect, useRef, useState } from "react";
import { getCropedImage } from "@/services/image-url";
import ArrowFloatingButton from "../ArrowFloatingButton/ArrowFloatingButton";

export interface gameImageData {
  image: string;
  hidden: false;
}

interface Props {
  gameId: number;
}

const GameImageShowCase = ({ gameId }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const currentItem = useRef<HTMLImageElement>(null);
  const [disableButton, setDisableButton] = useState(true);
  const { error, gameScreenShortData, retry } = useGameImages(gameId);

  useEffect(() => {
    if (currentItem.current && !disableButton)
      currentItem.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
  }, [currentItem.current]);

  const changeImage = (direction: "left" | "right") => {
    if (direction == "left" && gameScreenShortData != null)
      setCurrentImage((prev) =>
        prev !== 0 ? prev - 1 : gameScreenShortData.length - 1
      );

    if (direction == "right" && gameScreenShortData != null)
      setCurrentImage((prev) =>
        prev !== gameScreenShortData.length - 1 ? prev + 1 : 0
      );
  };

  return (
    <>
      <ApiErrorHandler error={error} retry={retry} />

      {gameScreenShortData && (
        <div className="w-full flex items-center justify-center flex-col">
          <div
            className="relative h-full w-full"
            onMouseEnter={() => setDisableButton(false)}
            onMouseLeave={() => setDisableButton(true)}
          >
            <ArrowFloatingButton
              isDisabled={disableButton}
              direction="left"
              onClick={() => changeImage("left")}
            />
            <ArrowFloatingButton
              isDisabled={disableButton}
              direction="right"
              onClick={() => changeImage("right")}
            />
            <img
              src={getCropedImage(gameScreenShortData[currentImage].image)}
              alt="game image"
              className="w-full rounded-xl"
            />
          </div>
          <div className=" mt-4 w-full gap-2 flex items-center  overflow-hidden overflow-x-scroll removeScroll">
            {gameScreenShortData.map((screenShort, index) => (
              <img
                ref={currentImage === index ? currentItem : null}
                onClick={() => setCurrentImage(index)}
                key={index}
                className={
                  "cursor-pointer w-1/5 shrink-0 hover:opacity-100 transition-all duration-150 rounded-md " +
                  (currentImage === index
                    ? " border-[1px] opacity-100 "
                    : " opacity-50 ")
                }
                src={getCropedImage(screenShort.image)}
                alt="game image small"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GameImageShowCase;
