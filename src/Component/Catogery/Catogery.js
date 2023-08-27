import React from "react";

const Catogery = () => {
  return (
    <div className="w-full flex flex-col md:mt-[4rem]">
      <div className=" mx-auto md:flex  md:max-w-[1440px] w-full mx-auto justify-center hidden relative items-start justify-center md:px-10 px-5">
        <div className="w-full flex md:flex-row mx-auto items-center md:space-x-4 justify-center flex-wrap gap-12 gap-y-5 my-5  ">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full  md:max-w-[170px] md:max-h-[170px] bg-[#F1DBE9]">
              <img
                src="./assets/images/tshirt.png"
                className="w-[170px] h-[170px]"
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                {" "}
                Men’s T-Shirts
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#DDD3EB]">
              <img
                src="./assets/images/WW.png"
                className="w-[170px] h-[170px]"
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                Women’s Wear
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#D3EAEB]">
              <img
                src="./assets/images/wc.png"
                className="w-[170px] h-[170px]"
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                Winter Collections
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#EFF1D9]">
              <img
                src="./assets/images/ht.png"
                className="w-[170px] h-[170px]"
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                Hooded T-Shirts
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#F1DADB]">
              <img
                src="./assets/images/pnt.png"
                className="w-[170px] h-[170px]"
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                Polo Neck T-Shirts
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#D9F1DE]">
              <img
                src="./assets/images/fst.png"
                className="w-[170px] h-[170px]"
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                Full Sleeves T-Shirts
              </p>
            </div>
          </div>
        </div>



    
      </div>
      <div className="flex md:justify-between md:flex-row flex-col md:px-0 px-5 md:space-x-8 items-center mt-[4rem]   md:max-w-[1440px] mx-auto ">
        <div className="">
              <img
                src="./assets/images/baggy.png"
                className="w-full h-full"
              />
            </div>
            <div className="md:mt-0 mt-[20px]">
              <img
                src="./assets/images/winter.png"
                className="w-full h-full"
              />
            </div>
        </div>
        <div className="flex md:justify-between md:flex-row flex-col md:px-0 px-5 md:space-x-[20px] space-y-[20px] md:space-y-0 items-center mt-[1rem]   md:max-w-[1440px] mx-auto ">
        <div className="">
              <img
                src="./assets/images/women.png"
                className="w-full h-full"
              />
            </div>
            <div className="">
              <img
                src="./assets/images/bestdeal.png"
                className="w-full h-full"
              />
            </div>
            <div className="">
              <img
                src="./assets/images/trendy.png"
                className="w-full h-full"
              />
            </div>
        </div>
    </div>
  );
};

export default Catogery;
