import React, { useEffect, useState } from "react";
import products from "../data/Data";

const Display = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products.necklaces);
  }, []);
  return (

    <div>
    <h1>Necklaces</h1>
        <div className="bg-blue-200 h-full grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-row-2 gap-3">
      {data.map((item,id) => {
        return (
          <div key={id} className="bg-white m-4 hover:cursor-pointer hover:scale-105 duration-500 ease-in-out">
            <div>
              <h4 className="text-center font text-lg">{item.name}</h4>
              <img src={item.image} alt={item.name} />
              <div className="flex justify-between m-4">
                <p className="font text-lg">{item.color}</p>
                <p>${item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Display;
