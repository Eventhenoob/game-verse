import Sekeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const GameCardSekeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="p-2 rounded-xl w-72 shrink-0 bg-zinc-900">
        <div className="">
          <Sekeleton className="w-full h-40 rounded-xl" />
        </div>
        <div className="mt-3">
          <Sekeleton className="w-2/3 h-8 rounded-xl" count={1} />
        </div>
        <div className="flex flex-col mt-4 ">
          <Sekeleton width={"100%"} height={"15px"} inline={false} count={6} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default GameCardSekeleton;
