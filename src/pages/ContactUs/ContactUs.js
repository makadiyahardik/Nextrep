import React from 'react'

const ContactUs = () => {
  return (
    <div id="Contact" className=''>
     <div className='w-full    flex md:flex-row flex-col mx-auto items-center justify-center   px-5 my-20 relative'>dd</div>
      <div className="w-full   md:max-w-[1440px] flex md:flex-row flex-col mx-auto items-center justify-center   px-5 my-20 relative">

        <div className=" flex justify-center items-center  relative h-full w-full sm:w-[800px] lg:w-full lg:h-[380px]  md:p-0 p-2 md:h-[380px] " style={{ background: 'linear-gradient(136deg, #AB001E 0%, #770015 100%)' }}>
          <div className=" flex flex-col md:pl-[5rem] p-2">
         
          
            <div className="flex flex-col">
            <h3 className="text-[36px] font-semibold leading-normal flex text-center logo text-[#FFF] md:max-w-[500px] w-full">
            Subscribe to get updates on exciting offers
& deals
            </h3>
              <div className="flex relative items-center mt-4 h-[60px]">
                <input
                  type="email"
                  placeholder="Enter your email"
             
                  className="w-full md:w-[620px] py-4 px-4  h-[60px]   ring-0 focus:ring-0 outline-none leading-normal placeholder-[#FFF] text-[16px] font-medium"
                  style={{
                    background: 'rgba(255, 255, 255, 0.32)'
                  }}/>
                <div className="absolute right-0">
                  <button
                    className="max-w-[300px] text-[22px] md:flex hidden   h-[60px] text-[#770015] logo py-4 md:px-8 px-4 font-semibold bg-white"
                >
                  Subscribe
                  </button>
                </div>
              </div>
              <button
                    className=" w-full text-[22px] mt-4 flex  justify-center md:hidden  items-center  h-[60px] text-[#770015] logo py-4 md:px-8 px-4 font-semibold bg-white"
                >
                  Subscribe
                  </button>
             
            </div>
          </div>
          <div className="absolute right-0 top-0  lg:block hidden">
            <img
              src="./assets/images/RightEllipse.svg "
              className="h-[380px] w-[300px]"
            />
          </div>
          <div className="absolute left-0 top-0  lg:block hidden">
            <img
              src="./assets/images/LeftEllipse.svg "
              className="h-[380px] w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs