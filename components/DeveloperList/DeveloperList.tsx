import useDevelopementTeam from "@/hooks/useDevelopementTeam";
import ApiErrorHandler from "../ApiErrorHandler";
import Link from "next/link";

export interface DeveloperData {
  name: string;
  image: string;
  id: string;
}
const DeveloperList = ({ gameId }: { gameId: number }) => {
  const { developersData, error, retry } = useDevelopementTeam(gameId);
  return (
    <>
      <ApiErrorHandler error={error} retry={retry} />
      {developersData && (
        <div className="w-100% mt-4 overflow-x-scroll removeScroll flex gap-4  ">
          {developersData.map((developer) => (
            <Link
              href={`/games/creators/${developer.id}`}
              className="flex flex-col items-center justify-evenly w-32  h-32 shrink-0 bg-gray-900 rounded-lg"
            >
              <img
                src={developer.image}
                alt={developer.name + " image"}
                className="w-16 h-16 rounded-full"
              />

              <p className="text-center">{developer.name}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default DeveloperList;
