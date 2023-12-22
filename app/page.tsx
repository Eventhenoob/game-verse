"use client";

import Lottie from "lottie-react";
import homepageAnimation from "@/assets/homepage-animation.json";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="mainStylesDefault text-white p-4 font-heading ">
        <div className="md:flex-row flex-col w-full flex justify-center items-center ">
          <Lottie
            animationData={homepageAnimation}
            className="w-full sm:w-1/2"
          />

          <div className="headingText mb-6 sm:w-1/2">
            <h1 className=" text-center md:text-justify font-heading text-3xl text-white capitalize md:mb-2 ">
              Welcome to GameVerse
            </h1>
            <p className="text-white md:text-xl font-retro md:text-justify text-center">
              - Your Ultimate Gaming Destination!
            </p>
          </div>
        </div>

        <Link
          rel="stylesheet"
          href="/games"
          className="w-full text-center block p-2 text-4xl bg-main-color text-black hover:bg-white rounded-lg transition-all duration-300 "
        >
          Explore Games
        </Link>

        <div className="mt-[5rem] flex flex-col justify-center items-center ">
          <h3 className="md:text-4xl font-heading mb-4 text-center w-full md:text-justify text-main-color text-2xl">
            🎮 Explore the Infinite Worlds of Gaming
          </h3>
          <p className="text-center md:text-justify md:w-4/5 ">
            Dive into the immersive universe of gaming with GameVerse! Whether
            you're a casual player or a hardcore gamer, our platform is your
            gateway to a vast collection of information about your favorite
            games. From classic titles to the latest releases, we've got it all
            covered.
          </p>
        </div>

        <div className="mt-[5rem] flex flex-col justify-center items-center ">
          <h3 className="md:text-4xl font-heading mb-4 text-center w-full md:text-justify text-main-color text-2xl">
            💡 Your Personalized Gaming Hub
          </h3>
          <p className="text-center md:text-justify md:w-4/5 ">
            Create your own account on GameVerse and unlock a world of
            personalized gaming experiences. With a user-friendly interface, you
            can easily navigate through a treasure trove of game details,
            reviews, and updates. The power is in your hands to curate your very
            own gaming haven!
          </p>
        </div>

        <div className="mt-[5rem] flex flex-col justify-center items-center ">
          <h3 className="md:text-4xl font-heading mb-4 text-center w-full md:text-justify text-main-color text-2xl">
            📚 Comprehensive Game Information
          </h3>
          <p className="text-center md:text-justify md:w-4/5 ">
            Looking for the latest news, reviews, or gameplay tips? GameVerse
            has you covered. Our dedicated team of gaming enthusiasts ensures
            that you stay up-to-date with the gaming world's latest happenings.
            Discover in-depth information about game mechanics, characters, and
            plotlines to enhance your gaming experience.
          </p>
        </div>

        <div className="mt-[5rem] flex flex-col justify-center items-center ">
          <h3 className="md:text-4xl font-heading mb-4 text-center w-full md:text-justify text-main-color text-2xl">
            🌟 Build Your Wishlist, Shape Your Gaming Future
          </h3>
          <p className="text-center md:text-justify md:w-4/5 ">
            Never forget a game you're excited about! Create and manage your
            personal wishlist on GameVerse. Keep track of upcoming releases,
            mark your favorites, and receive notifications when they hit the
            shelves. Your gaming journey is uniquely yours, and your wishlist is
            the roadmap!
          </p>
        </div>

        <div className="mt-[5rem] flex flex-col justify-center items-center ">
          <h3 className="md:text-4xl font-heading mb-4 text-center w-full md:text-justify text-main-color text-2xl">
            👥 Connect with Fellow Gamers
          </h3>
          <p className="text-center md:text-justify md:w-4/5 ">
            GameVerse isn't just a platform; it's a community. Connect with
            like-minded gamers, share your experiences, and join discussions
            about your favorite games. Forge alliances, challenge rivals, and
            make new friends in the vast landscape of GameVerse.
          </p>
        </div>

        <div className="mt-[5rem] flex flex-col justify-center items-center ">
          <h3 className="md:text-4xl font-heading mb-4 text-center w-full md:text-justify text-main-color text-2xl">
            🚀 Constantly Evolving Platform
          </h3>
          <p className="text-center md:text-justify md:w-4/5 ">
            We're committed to providing you with the best gaming experience
            possible. GameVerse is a dynamic platform that evolves alongside the
            gaming industry. Expect regular updates, new features, and exciting
            surprises to keep your gaming adventures fresh and exhilarating.
          </p>
        </div>
      </main>
    </>
  );
}
