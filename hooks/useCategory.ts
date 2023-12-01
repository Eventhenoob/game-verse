"use client";
import useData from "./useData";
import { CategoryData } from "@/components/CategoryCard/CategoryCard";

const useCategory = (categoryType: string) => {
  const { data, error, retry } = useData<CategoryData>(categoryType);

  return { categoryData: data, error, retry };
};
export default useCategory;
