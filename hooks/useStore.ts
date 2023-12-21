import { StoreData } from "@/components/ShowCases/StoreShowCase/StoreShowCase";
import useData from "./useData";
const useStore = (storeId: number) => {
  const { data, error, retry } = useData<StoreData>(`stores/${storeId}`);
  return { storeData: data, error, retry };
};

export default useStore;
