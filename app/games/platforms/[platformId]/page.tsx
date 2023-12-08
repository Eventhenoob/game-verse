"use client";
import GameCardGrid from "@/components/GameCardGrid";
import PlatfromShowCase from "@/components/PlatformShowCase";

const page = ({
  params: { platformId },
}: {
  params: { platformId: number };
}) => {
  return (
    <main className="mainStylesDefault text-white">
      <PlatfromShowCase platformId={platformId} />
      <GameCardGrid params={{ platforms: platformId }} />
    </main>
  );
};

export default page;
