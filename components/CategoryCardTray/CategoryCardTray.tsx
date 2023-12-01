"use client";
import useCategory from "@/hooks/useCategory";
import CategoryCard from "../CategoryCard";
import ApiErrorHandler from "../ApiErrorHandler";

interface Props {
  categoryType: string;
}

const CategoryCardTray = ({ categoryType }: Props) => {
  const { categoryData, error, retry } = useCategory(categoryType);

  return (
    <div className="overflow-x-scroll removeScroll pl-2 flex gap-10">
      <ApiErrorHandler error={error} retry={retry} />
      {categoryData &&
        categoryData.map((data) => (
          <CategoryCard
            key={data.id}
            games_count={data.games_count}
            image_background={data.image_background}
            name={data.name}
            id={data.id}
          />
        ))}
    </div>
  );
};

export default CategoryCardTray;
