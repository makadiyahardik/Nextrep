import React from "react";

const ContactUs = () => {
  return (
    <div id="Contact" className="">
      <div className="w-full bg-[#F9FAFB] mt-[6rem]  ">
        

        <div className="md:max-w-[1440xp] w-full  md:px-[32px] px-5 py relative  py-10">
        <div className="bg-[#770015] h-[202px] w-[102px] rounded-r-full absolute left-0 top-[40%] md:flex hidden"></div>
        <div className="bg-[#770015] h-[202px] w-[102px] rounded-l-full absolute right-0 -top-[40%]  md:flex hidden"></div>
          <div className="flex md:flex-row  flex-col justify-center items-center md:gap-y-0 gap-y-10 md:gap-[102px]">
            <div className="flex flex-col justify-start items-center text-center md:max-w-[400px]">
              <div className="m">
                <img
                  src="assets/images/7day.png"
                  className="h-[88px] w-[88px]"
                />
              </div>
              <div className="mt-[20px]">
                <h2 className="text-primary  font-medium text-[16px] leading-normal">
                7 Days Return
                </h2>
              </div>
         
            </div>
            <div className="flex flex-col justify-start items-center text-center md:max-w-[400px]">
              <div className="m">
                <img
                  src="assets/images/quality.png"
                  className="h-[88px] w-[88px]"
                />
              </div>
              <div className="mt-[20px]">
                <h2 className="text-primary  font-medium text-[16px] leading-normal">
                Quality Products
                </h2>
              </div>
         
            </div>
            <div className="flex flex-col justify-start items-center text-center md:max-w-[400px]">
              <div className="m">
                <img
                  src="assets/images/safe.png"
                  className="h-[88px] w-[88px]"
                />
              </div>
              <div className="mt-[20px]">
                <h2 className="text-primary  font-medium text-[16px] leading-normal">
                Safe Payment
                </h2>
              </div>
         
            </div>
            <div className="flex flex-col justify-start items-center text-center md:max-w-[400px]">
              <div className="m">
                <img
                  src="assets/images/helpline.png"
                  className="h-[88px] w-[88px]"
                />
              </div>
              <div className="mt-[20px]">
                <h2 className="text-primary  font-medium text-[16px] leading-normal">
                24x7 Helpline
                </h2>
              </div>
         
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:my-[9rem] my-[4rem]  md:max-w-[1440px] flex md:flex-row flex-col mx-auto items-center justify-center   px-5  relative">
        <div
          className=" flex justify-center items-center  relative h-full w-full sm:w-[800px] lg:w-full lg:h-[380px]  md:p-0 p-2 md:h-[380px] "
          style={{
            background: "linear-gradient(136deg, #AB001E 0%, #770015 100%)",
          }}
        >
          <div className=" flex flex-col md:pl-[5rem] p-2">
            <div className="flex flex-col">
              <h3 className="text-[36px] font-semibold leading-normal flex text-center logo text-[#FFF] md:max-w-[500px] w-full">
                Subscribe to get updates on exciting offers & deals
              </h3>
              <div className="flex relative items-center mt-4 h-[60px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-[620px] py-4 px-4  h-[60px]   ring-0 focus:ring-0 outline-none leading-normal placeholder-[#FFF] text-[16px] font-medium"
                  style={{
                    background: "rgba(255, 255, 255, 0.32)",
                  }}
                />
                <div className="absolute right-0">
                  <button className="max-w-[300px] text-[22px] md:flex hidden   h-[60px] text-[#770015] logo py-4 md:px-8 px-4 font-semibold bg-white">
                    Subscribe
                  </button>
                </div>
              </div>
              <button className=" w-full text-[22px] mt-4 flex  justify-center md:hidden  items-center  h-[60px] text-[#770015] logo py-4 md:px-8 px-4 font-semibold bg-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0  lg:block hidden">
            <img
              src="assets/images/RightEllipse.svg "
              className="h-[380px] w-[300px]"
            />
          </div>
          <div className="absolute left-0 top-0  lg:block hidden">
            <img
              src="assets/images/LeftEllipse.svg "
              className="h-[380px] w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
