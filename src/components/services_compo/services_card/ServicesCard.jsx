import React from "react";

const ServicesCard = ({ title, description, image }) => {
  return (
    <div className="relative max-w-80 bg-[#f1f0fe] flex flex-col space-y-4 p-5 items-center justify-center  rounded-3xl cursor-pointer">
      <div className="absolute bg-[#7a6ad8] rounded-full p-8 -right-16 -top-16 ">
        <img src={image} alt="" />
      </div>
      <div className=" flex flex-col space-y-6 py-8 items-start justify-center">
        <h1 className="text-[#1e1e1e] text-2xl font-semibold">{title}</h1>

        <p className="text-[#4a4a4a] text-sm  leading-loose">{description}</p>
        <button className="text-[#7a6ad8] bg-[#fff] font-medium text-sm px-5 py-2 rounded-full cursor-pointer hover:bg-[#7a6ad8] hover:text-white hover:duration-300">
          Read more
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
