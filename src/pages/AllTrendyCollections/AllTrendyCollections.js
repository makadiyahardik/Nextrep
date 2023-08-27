import Banner from "@/Component/Banner/Banner";
import Collection from "@/Component/Collections/Collection";
import React from "react";

const AllTrendyCollections = () => {
  return (
    <div>
      <Collection />
      <div className="w-full mt-[5rem]">
        {" "}
        <Banner
          className="object-cover w-full h-full"
          src="./assets/images/banner3.png"
          label=" banner"
        />
      </div>
      <div className="flex md:flex-row flex-col justify-center  mx-auto md:px-0 px-5 md:space-x-8 items-center mt-[4rem]   md:max-w-[1440px] ">
        <div className="bg-[#CCCEA7] flex flex-col justify-center items-center p-10 w-full md:w-[548px] h-[652px]">
          <img
            src="./assets/images/diamond.png"
            className="w-[172px] h-[172px]"
          />
          <h2 className="logo text-[36px] mt-[1rem] text-primary font-semibold leading-normal cursor-pointer">
            Hurry up
          </h2>
          <h1 className=" text-[42px] md:text-[84px] mt-[1rem] text-primary font-semibold leading-normal cursor-pointer">
            85% OFF
          </h1>
          <p className=" text-[36px] mt-[1rem] text-primary font-semibold leading-normal cursor-pointer">
            Hurry up
          </p>
          <div className=" text-[16px] border border-[#FFF]  mt-[22px] uppercase p-2 text-[#FFFFFF] font-medium leading-normal cursor-pointer">
          shop now
          </div>
        </div>
        <div className="bg-[#D6BEBE] md:mt-0 mt-[1rem] flex flex-col justify-center items-center p-10 w-full md:w-[548px] h-[652px]">
          <img
            src="./assets/images/discount.png"
            className="w-[172px] h-[172px]"
          />
          <h2 className="logo text-[36px] mt-[1rem] text-primary font-semibold leading-normal cursor-pointer">
            Hurry up
          </h2>
          <h1 className="logo text-[42px] md:text-[84px] mt-[1rem] text-primary font-semibold leading-normal cursor-pointer">
            75% OFF
          </h1>
          <p className=" text-[36px] mt-[1rem] text-primary font-semibold leading-normal cursor-pointer">
            Hurry up
          </p>
          <div className=" text-[16px] border border-[#FFF]  mt-[22px] uppercase p-2 text-[#FFFFFF] font-medium leading-normal cursor-pointer">
          shop now
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTrendyCollections;
