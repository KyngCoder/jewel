import React from "react";

const Newsletter = () => (
  <div className="py-2 px-4 w-4/5  text-white border-2  border-yellow-200">
    <div className="text-center">
      <h2 className="text-lg">Newsletter</h2>
      <h1 className="font text-6xl primary-color py-4">Subscribe To Our <br /> Newsletter</h1>
      <p className="font text-lg">And never miss latest Updates!</p>
    </div>
    <div className=" py-4 flex flex-col items-center">
      <input type="email" placeholder="Enter your email address" className="w-full mx-8 border-2 border-yellow-500 p-2 text-black" />
      <button type="button" className="bg-yellow-700 p-2 w-20 m-2 text-white">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
