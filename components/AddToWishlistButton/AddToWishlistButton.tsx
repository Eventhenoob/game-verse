import { FaRegStar, FaStar } from "react-icons/fa";

interface Props {
  isAdded: boolean;
  gameId: number;
  add: (gameId: number) => void;
  remove: (gameId: number) => void;
}

const AddToWishlistButton = ({ add, gameId, isAdded, remove }: Props) => {
  return (
    <button
      className="absolute top-3 right-3 w-14 h-14 bg-opacity-80 bg-black text-white flex justify-center items-center text-xl rounded-full hover:bg-opacity-100"
      onClick={() => {
        if (isAdded) remove(gameId);
        else add(gameId);
      }}
    >
      {isAdded ? <FaStar /> : <FaRegStar />}
    </button>
  );
};

export default AddToWishlistButton;
