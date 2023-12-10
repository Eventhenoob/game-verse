import useDataArr from "./useDataArr";
import { DeveloperData } from "@/components/DeveloperList/DeveloperList";

const useDevelopementTeam = (gameId: number) => {
  const { data, error, retry } = useDataArr<DeveloperData>(
    `games/${gameId}/development-team`
  );
  return { developersData: data, error, retry };
};

export default useDevelopementTeam;
