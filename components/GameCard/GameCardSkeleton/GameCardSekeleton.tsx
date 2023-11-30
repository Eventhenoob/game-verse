import Sekeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const GameCardSekeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="p-0 overflow-hidden rounded-xl w-full sm:w-72 shrink-0 bg-zinc-900">
        <div className="">
          <Sekeleton height={"10rem"} width={"100%"} borderRadius={0.75} />
        </div>

        <div className="mt-3">
          <Sekeleton height={"2rem"} borderRadius={0.75} count={1} />
        </div>

        <div className=" mt-4 ">
          <Sekeleton
            borderRadius={0.75}
            className="rounded-xl"
            height={"15px"}
            inline={false}
            count={6}
          />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default GameCardSekeleton;
