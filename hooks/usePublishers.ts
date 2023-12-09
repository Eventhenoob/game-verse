import useData from "./useData";
import { PublisherData } from "@/components/ShowCases/PublishersShowCase/PublishersShowCase";

const usePublishers = (publishersId: number) => {
  const { data, error, retry } = useData<PublisherData>(
    `publishers/${publishersId}`
  );

  return { publishersData: data, error, retry };
};

export default usePublishers;
