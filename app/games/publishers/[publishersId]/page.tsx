"use client";
import GameCardGrid from "@/components/GameCardGrid";
import PublishersShowCase from "@/components/ShowCases/PublishersShowCase";

const page = ({
  params: { publishersId },
}: {
  params: { publishersId: string };
}) => {
  return (
    <main className="mainStylesDefault ">
      <PublishersShowCase publisherId={+publishersId} />

      <GameCardGrid params={{ publishers: publishersId }} />
    </main>
  );
};

export default page;
