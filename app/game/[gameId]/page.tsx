import GameShowCase from "@/components/ShowCases/GameShowCase";

const page = ({ params: { gameId } }: { params: { gameId: string } }) => {
  return (
    <main className="mainStylesDefault relative md:static ">
      <GameShowCase gameId={+gameId} />
    </main>
  );
};

export default page;
