import React from "react";
import girl from "../assets/girl.png";
import { GiJewelCrown } from "react-icons/gi";

const HomePage = () => {
  return (
    <div className="w-screen lg:flex">
      <div className=" font-black text-white m-8">
        <h2 className="font text-2xl">Chasing jewellery </h2>
        <GiJewelCrown />
        <h1 className="text-6xl mt-6 text-yellow-400 font leading-normal">
          The Key To Taking Your Style To The Next Level
        </h1>
        <p className="font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, animi?
          Corrupti necessitatibus aliquid adipisci incidunt? Quia sapiente,
          voluptatem delectus quos facere voluptate a quod, enim, in dicta
          possimus maiores nobis!
        </p>
        <button className="bg-yellow-600 text-lg px-4 text-white font-normal mt-4 py-2 rounded">
          Explore
        </button>
      </div>
      <div >
        <img src={girl} alt="image of girl wearing jewellery" />
      </div>
    </div>
  );
};

export default HomePage;
