import Image from "next/image";
export interface GameDataType {
  id: string;
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
        alt={name}
        src={background_image}
        className="10rem 100% rounded-xl object-fill"
      />

      <div className="info p-2 mt-1">
        <h3 className=" text-white font-retro text-2xl">{name}</h3>
        <ul className="mt-2">
          <li className="">Release Data: {released}</li>
          <li className="">
            Rating: <span className="text-main-color">{rating}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GameCard;
