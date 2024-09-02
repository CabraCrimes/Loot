"use client"
import "../styles/globals.css";

const Home = () => {
  return (
    <section className=" w-full flex-center flex-col">
      <h1 className="head_text flex justify-center ">
       Loot
      </h1>
      <span className=" text-center head_text orange_gradient flex justify-center">
        Compare Best Prices and Free Games
      </span>
      <div className="flex justify-center">
        <p className="text-zinc-700 text-center text-lg font-bold font-mono max-w-3xl mt-5">
          Loot tracks and compares prices across various game stores, ensuring
          you find the best deals on your favorite titles. Additionally, Loot
          highlights games that are free, on sale, or discounted.
        </p>
      </div>

      {/* Feed */}
    </section>
  );
};

export default Home;
