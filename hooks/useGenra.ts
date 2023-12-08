import useData from "./useData";
import { GenraType } from "@/components/GenraShowCase/GenraShowCase";

const useGenra = (genraId: number) => {
  const { data, error, retry } = useData<GenraType>(`genres/${genraId}`);
  return { genraData: data, error, retry };
};

export default useGenra;
