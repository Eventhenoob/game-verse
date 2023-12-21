"use client";
import GameCardGrid from "@/components/GameCardGrid";
import StoreShowCase from "@/components/ShowCases/StoreShowCase";

const page = ({ params: { storeId } }: { params: { storeId: string } }) => {
  return (
    <main className="mainStylesDefault text-white">
      <StoreShowCase storeId={+storeId} />
      <GameCardGrid
        params={{
          stores: storeId,
        }}
      />
    </main>
  );
};

export default page;
