import useStore from "@/hooks/useStore";
import ApiErrorHandler from "@/components/ApiErrorHandler";
import StoreShowCaseSkeleton from "./StoreShowCaseSkeleton";
import parse from "html-react-parser";

export interface StoreData {
  name: string;
  description: string;
}

const StoreShowCase = ({ storeId }: { storeId: number }) => {
  const { error, retry, storeData } = useStore(storeId);
  return (
    <>
      <ApiErrorHandler error={error} retry={retry} isNextNull={true} />
      <div
        className={
          " m-auto mb-8 md:w-auto w-3/4 gap-10 items-center justify-center md:justify-evenly  " +
          (storeData !== null || error !== "" ? "hidden" : "")
        }
      >
        <StoreShowCaseSkeleton />
      </div>
      {storeData && (
        <div
          className={
            "m-5 md:m-0 flex font-heading flex-col gap-5 text-white !mb-10"
          }
        >
          <h1 className=" font-heading text-4xl md:text-6xl ">
            {storeData.name} Games
          </h1>
          {parse(storeData.description)}
        </div>
      )}
    </>
  );
};

export default StoreShowCase;
