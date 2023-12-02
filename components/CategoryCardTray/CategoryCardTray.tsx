"use client";
import useCategory from "@/hooks/useCategory";
import CategoryCard from "../CategoryCard";
import ApiErrorHandler from "../ApiErrorHandler";
import { getCropedImage } from "@/services/image-url";
import CategoryCardSkeleton from "../CategoryCard/CategoryCardSkeleton";

interface Props {
  categoryType: string;
  scroll?: boolean;
  page_size?: number;
}

const CategoryCardTray = ({
  categoryType,
  scroll = true,
  page_size = 8,
}: Props) => {
  const { categoryData, error, retry } = useCategory(categoryType, {
    page_size,
  });

  return (
    <div
      className={
        "overflow-x-scroll removeScroll  w-full flex gap-10 " +
        (scroll ? "" : " flex-wrap justify-evenly")
      }
    >
      <ApiErrorHandler error={error} retry={retry} />
      <div
        className={
          " m-auto flex gap-10 " +
          (categoryData !== null || error !== "" ? "hidden" : "") +
          " " +
          (scroll ? "" : " flex-wrap justify-evenly")
        }
      >
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
      </div>

      {categoryData &&
        categoryData.map((data) => (
          <CategoryCard
            key={data.id}
            games_count={data.games_count}
            image_background={getCropedImage(data.image_background)}
            name={data.name}
            id={data.id}
          />
        ))}
    </div>
  );
};

export default CategoryCardTray;
