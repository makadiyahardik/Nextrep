// import Signup from "../Signup/Signup";
import React from "react";

function Header() {


  return (
    <>
      <div
  className="pt-4"
        >
        <div className="md:max-w-[1400px] w-full  bg-white md:px-10 px-5 mx-auto ">
          <div className="flex  justify-between  md:items-center  ">
            <div className="flex justify-start items-start">
              <img
                src="./assets/logowithtext.png"
                className="h-[3rem] w-[3rem] "
              />
            </div>
          
            {/* <div className="text-[18px] font-medium leading-[22px] text-black cursor-pointer ">
              <button
                className="border-[#000000] border-solid border-[1px] py-[15px]  px-[20px]  rounded-[15px] md:flex hidden text-[18px] font-medium leading-[22px] text-black cursor-pointer w-[152px] h-[53px] text-center"
            >
                Get Started
              </button>
           
            </div> */}

          
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
