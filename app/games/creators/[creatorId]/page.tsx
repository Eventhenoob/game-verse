"use client";
import GameCardGrid from "@/components/GameCardGrid";

const page = ({ params: { creatorId } }: { params: { creatorId: string } }) => {
  return (
    <main className="mainStylesDefault text-white">
      {creatorId}
      <GameCardGrid params={{ creator: creatorId }} />
    </main>
  );
};

export default page;
