"use client";
import useCategory from "@/hooks/useCategory";
import CategoryCard from "../CategoryCard";
import ApiErrorHandler from "../ApiErrorHandler";
import { getCropedImage } from "@/services/image-url";
import CategoryCardSkeleton from "../CategoryCard/CategoryCardSkeleton";
import { useEffect, useState } from "react";
import { CategoryData } from "../CategoryCard/CategoryCard";

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
  const { categoryData, error, retry, next } = useCategory(categoryType, {
    page_size,
  });
  const [pageCounter, setPageCounter] = useState(1);
  const [currentNext, setCurrentNext] = useState<string | null>("");
  const [currentCategoryData, setCurrentCategoryData] = useState<
    CategoryData[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateCategoryData = () => {
    if (categoryData && currentNext != next) {
      setCurrentCategoryData((prev) => [...prev, ...categoryData]);
      setCurrentNext(next);
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    retry({ page: pageCounter + 1 });
    setPageCounter((prev) => prev + 1);
  };

  useEffect(() => {
    if (isLoading) {
      loadMore();
    }
  }, [isLoading]);

  const setLoadingTrue = () => {
    let isScrolledToBottom =
      window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight;
    if (isScrolledToBottom && currentNext != null) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    if (scroll == false) {
      window.addEventListener("scroll", setLoadingTrue);
      return () => window.removeEventListener("scroll", setLoadingTrue);
    }
  }, []);

  useEffect(updateCategoryData, [categoryData]);

  return (
    <div
      className={
        "overflow-x-scroll removeScroll  w-full flex gap-10 " +
        (scroll ? "" : " flex-wrap justify-evenly")
      }
    >
      {currentCategoryData &&
        currentCategoryData.map((data: any) => (
          <CategoryCard
            href={`/${categoryType}/${data.id}`}
            CategoryInfo={{
              games_count: data.games_count,
              image_background: getCropedImage(data.image_background),
              name: data.name,
              id: data.id,
            }}
          />
        ))}

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
        <CategoryCardSkeleton />
      </div>
      <ApiErrorHandler
        isNextNull={currentNext === null}
        error={error}
        retry={retry}
      />
    </div>
  );
};

export default CategoryCardTray;
