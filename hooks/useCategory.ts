"use client";
import useDataArr from "./useDataArr";
import { CategoryData } from "@/components/CategoryCard/CategoryCard";

const useCategory = (categoryType: string, params = {}) => {
  const { data, error, retry, next } = useDataArr<CategoryData>(
    categoryType,
    params
  );

  return { categoryData: data, error, retry, next };
};
export default useCategory;
