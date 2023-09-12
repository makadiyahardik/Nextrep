import React from "react";

function Home() {
 
  return (
    <>
      <div className="relative md:my-[8rem] my-[4rem]" id="Home">
        <div className=" ">
          <img
            src="./assets/images/herobg.svg"
            className="w-full  absolute  md:block hidden top-[12%]"
            alt=""
          />
        </div>

        <div className=" md:max-w-[1400px]  md:px-10 px-5 mx-auto w-full relative ">
          <div className="flex md:flex-row flex-col-reverse  items-center justify-start">
            <div className="md:w-1/2 w-full  ">
              <div className="left-home bg-skyblue  top-[25%]  w-[300px] h-[300px] bg-opacity-50  md:block hidden  absolute  left-0  "></div>
              <div className="text-primary flex-col md:my-0 my-4">
                <h1 className=" md:text-[75px] text-[40px] font-extrabold md:leading-[74px] leading-[50px]">
                Our Website <br />
                   Is Under Construction!
                </h1>
                <p className="text-primary font-semibold text-[18px] leading-[30px] my-2">
                We're thrilled to announce that our website is currently undergoing a transformation to bring you an even better online experience. While we work diligently behind the scenes, we can't wait to unveil a fresh and improved platform designed to cater to your needs. Stay tuned for a revamped website that promises to make your interactions with us more engaging and efficient than ever before!
                </p>
              
              </div>
            </div>
            <div className="md:w-1/2 w-full ">
              <img
                src="./assets/newhome.png"
                className="h-auto md:w-[800px] w-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Home;
