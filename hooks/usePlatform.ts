import useData from "./useData";
import { PlatformData } from "@/components/PlatformShowCase/PlatfromShowCase";

const usePlatform = (platfromId: number) => {
  const { data, error, retry } = useData<PlatformData>(
    `platforms/${platfromId}`
  );

  return { platfromData: data, error, retry };
};

export default usePlatform;
