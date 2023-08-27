import React from "react";

const Collection = () => {
  return (
    <div className="w-full mt-[4rem] justify-center  md:max-w-[1440px] grid md:grid-cols-3 sm:grid-cols-2  mx-auto  gap-x-2 items-center    md:gap-x-4 md:gap-y-12 my-8 gap-y-8">
      <div
        className={`flex flex-col h-[50vh] md:w-[18.5rem]  w-full  justify-center items-center  relative  bg-[#06B8A6]`}
      >
        <div className="product-image relative   cursor-pointer">
          {" "}
          <div className="flex  justify-start items-start">
            <img src="./assets/images/ht.png" className="h-[50vh] md:w-[18.5rem]   w-full " />
          </div>
       
        </div>
        <div
            className="absolute bottom-0 w-full h-[4rem]  justify-center backdrop-blur-[32px] items-center flex mx-auto text-[#FFF]"
            style={{
              background:
                "linear-gradient(137deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.01) 100%)",
            }}
          >
            {" "}
            <p className="font-semibold text-[20px] leading-normal">
              Streetwear Collections
            </p>
          </div>
      </div>
      <div
        className={`flex flex-col h-[50vh] md:w-[18.5rem]  w-full  justify-center items-center  relative  bg-[#80E8FF]`}
      >
        <div className="product-image relative   cursor-pointer">
          <div className="flex ">
            <img src="./assets/images/st2.png" className="h-[50vh]   md:w-[18.5rem]   w-full  " />
          </div>
       
        </div>
        <div
            className="absolute bottom-0 w-full h-[4rem]  justify-center backdrop-blur-[32px] items-center flex mx-auto text-[#FFF]"
            style={{
              background:
                "linear-gradient(137deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.01) 100%)",
            }}
          >
            <p className="font-semibold text-[20px] leading-normal">
              Striped T-Shirts
            </p>
          </div>
      </div>{" "}
      <div
        className={`flex flex-col h-[50vh] md:w-[18.5rem]  w-full  justify-center items-center  relative  bg-[#DC493A]`}
      >
        <div className="product-image relative   cursor-pointer">
          {" "}
          <div className="flex  justify-start items-start">
            <img src="./assets/images/rnt.png" className="h-[50vh]  md:w-[18.5rem]   w-full  " />
          </div>
       
        </div>
        <div
            className="absolute bottom-0 w-full h-[4rem]  justify-center backdrop-blur-[32px] items-center flex mx-auto text-[#FFF]"
            style={{
              background:
                "linear-gradient(137deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.01) 100%)",
            }}
          >
            {" "}
            <p className="font-semibold text-[20px] leading-normal">
              Round Neck T-Shirts
            </p>
          </div>
      </div>{" "}
     
      <div
        className={`flex flex-col h-[50vh] md:w-[18.5rem]  w-full  justify-center items-center  relative  bg-[#D7B2FF]`}
      >
        <div className="product-image relative   cursor-pointer">
          {" "}
          <div className="flex  justify-start items-start">
            <img src="./assets/images/pt.png" className="h-[50vh] md:w-[18.5rem]   w-full " />
          </div>
          
        </div>
        <div
            className="absolute bottom-0 w-full h-[4rem]  justify-center backdrop-blur-[32px] items-center flex mx-auto text-[#FFF]"
            style={{
              background:
                "linear-gradient(137deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.01) 100%)",
            }}
          >
            {" "}
            <p className="font-semibold text-[20px] leading-normal">
              Striped T-Shirts
            </p>
          </div>
      </div>{" "}
      <div
        className={`flex flex-col h-[50vh] md:w-[18.5rem]  w-full  justify-center items-center  relative  bg-[#F0BC8C]`}
      >
        <div className="product-image relative   cursor-pointer">
          {" "}
          <div className="flex  justify-start items-start">
            <img src="./assets/images/ot.png" className="h-[50vh] w-[18.5rem]    " />
          </div>
         
        </div>
        <div
            className="absolute bottom-0 w-full h-[4rem]  justify-center backdrop-blur-[32px] items-center flex mx-auto text-[#FFF]"
            style={{
              background:
                "linear-gradient(137deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.01) 100%)",
            }}
          >
            {" "}
            <p className="font-semibold text-[20px] leading-normal">
              Printed T-Shirts
            </p>
          </div>
      </div>
      <div
        className={`flex flex-col h-[50vh] md:w-[18.5rem]  w-full  justify-center items-center  relative  bg-[#4392F1]`}
      >
        <div className="product-image relative   cursor-pointer">
          {" "}
          <div className="flex  justify-start items-start">
            <img src="./assets/images/hst.png" className="h-[50vh]   w-full md:w-[18.5rem]   w-full " />
          </div>
         
        </div>
        <div
            className="absolute bottom-0 w-full h-[4rem]  justify-center backdrop-blur-[32px] items-center flex mx-auto text-[#FFF]"
            style={{
              background:
                "linear-gradient(137deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.01) 100%)",
            }}
          >
            {" "}
            <p className="font-semibold text-[20px] leading-normal">
              Streetwear Collections
            </p>
          </div>
      </div>
    </div>
  );
};

export default Collection;
