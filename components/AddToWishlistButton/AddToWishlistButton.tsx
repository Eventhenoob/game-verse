import { useState } from "react";
import { MdBookmarkAdd, MdOutlineBookmarkAdd } from "react-icons/md";

interface Props {
  isAdded: boolean;
  gameId: number;
  add: (gameId: number) => void;
  remove: (gameId: number) => void;
  size?: "sm" | "lg";
  isTrans?: boolean;
  toTop?: boolean;
}

const AddToWishlistButton = ({
  add,
  gameId,
  isAdded,
  remove,
  size = "sm",
  isTrans = false,
  toTop = false,
}: Props) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  return (
    <div className={toTop ? " absolute top-0 right-0 " : " "}>
      <p
        className={
          "p-3 bg-opacity-75 shrink-0 text-white w-max transition-all duration-1000 bg-black absolute -top-[3rem]  -left-[8rem] rounded-2xl " +
          (isMouseEntered ? "visible opacity-100 " : " invisible opacity-0 ")
        }
      >
        {isAdded ? "Remove From Wishlist" : "Add To Wishlist"}
      </p>

      <button
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => setIsMouseEntered(false)}
        className={
          " active:scale-125 transition-all duration-200  bg-opacity-100 bg-black text-white flex justify-center items-center rounded-md rounded-tr-xl hover:scale-110" +
          (size === "sm" ? " w-8 h-8 " : " w-14 h-14 text-2xl ") +
          (isTrans && " bg-transparent ")
        }
        onClick={() => {
          if (isAdded) remove(gameId);
          else add(gameId);
        }}
      >
        {isAdded ? <MdBookmarkAdd /> : <MdOutlineBookmarkAdd />}
      </button>
    </div>
  );
};

export default AddToWishlistButton;
