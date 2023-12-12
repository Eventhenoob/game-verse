import useDataArr from "./useDataArr";
interface gameName {
  name: string;
  id: number;
}

const useGameNames = () => {
  const { data, error, retry } = useDataArr<gameName>("games", {
    page_size: 13,
  });

  return { gameNameData: data, error, retry };
};

export default useGameNames;
