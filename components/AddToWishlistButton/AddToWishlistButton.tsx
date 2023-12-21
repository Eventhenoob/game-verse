import { useState } from "react";
import { MdBookmarkAdd, MdOutlineBookmarkAdd } from "react-icons/md";

interface Props {
  isAdded: boolean;
  gameId: number;
  add: (gameId: number) => void;
  remove: (gameId: number) => void;
  size?: "sm" | "lg";
  isTrans?: boolean;
}

const AddToWishlistButton = ({
  add,
  gameId,
  isAdded,
  remove,
  size = "sm",
  isTrans = false,
}: Props) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  return (
    <>
      <p
        className={
          "p-3 bg-opacity-75 text-white transition-all duration-1000 bg-black absolute -top-5 right-6 rounded-sm " +
          (isMouseEntered ? "visible opacity-100 " : " invisible opacity-0")
        }
      >
        Add to Wishlist
      </p>

      <button
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => setIsMouseEntered(false)}
        className={
          "absolute top-3 right-3 active:scale-125 transition-all duration-200  bg-opacity-100 bg-black text-white flex justify-center items-center  rounded-sm hover:scale-110" +
          (size === "sm" ? " w-8 h-8 " : " w-14 h-14 text-2xl ") +
          (isTrans && " bg-opacity-0 ")
        }
        onClick={() => {
          if (isAdded) remove(gameId);
          else add(gameId);
        }}
      >
        {isAdded ? <MdBookmarkAdd /> : <MdOutlineBookmarkAdd />}
      </button>
    </>
  );
};

export default AddToWishlistButton;
