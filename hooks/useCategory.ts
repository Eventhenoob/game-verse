"use client";
import useDataArr from "./useDataArr";
import { CategoryData } from "@/components/CategoryCard/CategoryCard";

const useCategory = (categoryType: string, params = {}) => {
  const { data, error, retry } = useDataArr<CategoryData>(categoryType, params);

  return { categoryData: data, error, retry };
};
export default useCategory;
