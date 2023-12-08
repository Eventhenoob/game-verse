import { TagData } from "@/components/TagShowCase/TagShowCase";
import useData from "./useData";

const useCreator = (id: string) => {
  const { data, error, retry } = useData<TagData>(`tags/${id}`);
  return { tagData: data, error, retry };
};

export default useCreator;
