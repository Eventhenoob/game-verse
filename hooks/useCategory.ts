"use client";
import useData from "./useData";
import { CategoryData } from "@/components/CategoryCard/CategoryCard";

const useCategory = (categoryType: string, params = {}) => {
  const { data, error, retry } = useData<CategoryData>(categoryType, params);

  return { categoryData: data, error, retry };
};
export default useCategory;
