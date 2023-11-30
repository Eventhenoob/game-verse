import Image from "next/image";
export interface GameDataType {
  name: string;
  rating: number;
  released: string;
  background_image: string;
}

const GameCard = ({
  name,
  rating,
  released,
  background_image,
}: GameDataType) => {
  return (
    <div className="p-0 overflow-hidden rounded-xl w-full sm:w-72 shrink-0 bg-zinc-900">
      <img
        height={299}
        width={288}
        alt={name}
        src={background_image}
        className="10rem 100% rounded-xl"
      />

      <h3 className="mt-3 text-white font-retro text-xl">{name}</h3>
      <ul className="">
        <li className="">release data: {released}</li>
      </ul>
    </div>
  );
};

export default GameCard;
