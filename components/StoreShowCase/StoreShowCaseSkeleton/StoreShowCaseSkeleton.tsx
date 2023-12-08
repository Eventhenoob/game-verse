import Sekeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const StoreShowCaseSkeleton = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="font-retro leading-7 tracking-wider">
          {<Sekeleton height={"3rem"} width={"100%"} borderRadius={0.75} />}
        </div>

        <div className="font-retro leading-7 tracking-wider">
          {<Sekeleton height={"15rem"} width={"100%"} borderRadius={0.75} />}
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default StoreShowCaseSkeleton;
