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

// Design 1:
// (
//         <div className="flex gap-2 w-[90%] items-center justify-center flex-wrap">
//           {gameScreenShortData.map((item, index) => (
//             <div className="relative w-1/2 group sm:w-1/3 md:w-[23%]  flex-shrink-0 cursor-pointer">
//               <p className="absolute opacity-0 hover:bg-black group-[:hover]:opacity-100 w-full flex justify-center items-center transition-all duration-200 bg-opacity-30 h-full">
//                 Full Screen
//               </p>
//               <img
//                 className="w-[100%] rounded-lg"
//                 src={getCropedImage(item.image)}
//                 alt="Game Image"
//               />
//             </div>
//           ))}
//         </div>
//       )

const GameImageShowCase = ({ gameId }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const currentItem = useRef<HTMLImageElement>(null);
  const [disableButton, setDisableButton] = useState(true);
  const { error, gameScreenShortData, retry } = useGameImages(gameId);

  useEffect(() => {
    if (currentItem.current)
      currentItem.current.scrollIntoView({ behavior: "smooth" });
  }, [currentItem.current]);

  const changeImage = (direction: "left" | "right") => {
    if (direction == "left" && gameScreenShortData != null) {
      setCurrentImage((prev) =>
        prev !== 0 ? prev - 1 : gameScreenShortData.length - 1
      );
    }
    if (direction == "right" && gameScreenShortData != null) {
      setCurrentImage((prev) =>
        prev !== gameScreenShortData.length - 1 ? prev + 1 : 0
      );
    }
  };

  return (
    <>
      <ApiErrorHandler error={error} retry={retry} />

      {gameScreenShortData && (
        <div className="w-7/12 flex items-center justify-center flex-col">
          <div
            className="relative bigShowcase w-full"
            onMouseEnter={() => setDisableButton(false)}
            onMouseLeave={() => setDisableButton(true)}
          >
            <ArrowFloatingButton
              isDisabled={disableButton}
              direction="left"
              onClick={() => {
                changeImage("left");
              }}
            />
            <ArrowFloatingButton
              isDisabled={disableButton}
              direction="right"
              onClick={() => {
                changeImage("right");
              }}
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
                onClick={() => {
                  setCurrentImage(index);
                }}
                key={index}
                className={
                  "cursor-pointer  w-1/5 shrink-0  hover:opacity-100 transition-all duration-150 rounded-md " +
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
