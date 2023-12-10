"use client";
import Sekeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameShowCaseSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#6a6a6a" highlightColor="#444">
      <div className=" shrink-0 flex items-center gap-5">
        <div className="w-3/12 h-10">
          <Sekeleton borderRadius={".5rem"} className=" w-full h-full" />
        </div>
      </div>
      <div className="w-full h-10">
        <Sekeleton borderRadius={".5rem"} className=" w-full h-full" />
      </div>
      <div className="font-retro leading-7 tracking-wider">
        {<Sekeleton height={"40rem"} width={"100%"} borderRadius={0.75} />}
      </div>
    </SkeletonTheme>
  );
};

export default GameShowCaseSkeleton;
