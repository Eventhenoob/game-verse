import { creatorData } from "@/components/ShowCases/CreatorShowCase/CreatorShowCase";
import useData from "./useData";

const useCreator = (id: string) => {
  const { data, error, retry } = useData<creatorData>(`creators/${id}`);
  return { creatorData: data, error, retry };
};

export default useCreator;
