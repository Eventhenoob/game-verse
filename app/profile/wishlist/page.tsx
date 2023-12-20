"use client";
import WishlistTray from "@/components/WishlistTray";

const page = () => {
  return (
    <main className="p-4 text-white   mainStylesDefault relative">
      <h3 className="font-heading mt-5 mb-10 text-4xl uppercase">
        Your Wishlist
      </h3>

      {<WishlistTray round={true} />}
    </main>
  );
};

export default page;
