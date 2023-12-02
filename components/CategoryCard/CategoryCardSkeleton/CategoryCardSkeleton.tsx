import Sekeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategoryCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="w-44 h-60 md:w-56 md:h-72 shrink-0 rounded-tl-3xl rounded-lg relative overflow-hidden">
        <Sekeleton
          height={"100%"}
          width={"100%"}
          borderRadius={0.75}
        ></Sekeleton>
      </div>
    </SkeletonTheme>
  );
};

export default CategoryCardSkeleton;
