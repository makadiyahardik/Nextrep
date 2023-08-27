import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
function CatogerySlider() {
  return (
    <div className=" " id="Technology">
  <div className=" mx-auto flex mt-[3rem] ">
        <div className="w-full  mx-auto md:hidden">
          <Splide
            options={{
              type: "loop",
              rewind: false,
              autoplay: false,
              perMove: 1,
              perPage: 1,
              gap: "0rem",
              arrows: false,
              pagination: false,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                speed: 2,
              },
            }}
            extensions={{ AutoScroll }}>
            <SplideSlide>
            <div className="flex flex-col items-center justify-center">
            <div className="rounded-full  md:max-w-[170px] md:max-h-[170px] bg-[#F1DBE9]">
              <img
                src="././assets/images/tshirt.png"
                className="w-[170px] h-[170px]"
                loading="lazy" 
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                {" "}
                Men’s T-Shirts
              </p>
            </div>
          </div>
            </SplideSlide>{" "}
            
            <SplideSlide>
           
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#DDD3EB]">
              <img
                src="././assets/images/WW.png"
                className="w-[170px] h-[170px]"
                loading="lazy" 
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                Women’s Wear
              </p>
            </div>
          </div>

            </SplideSlide>{" "}
            <SplideSlide>
            <div className="flex flex-col items-center justify-center">
            <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#D3EAEB]">
              <img
                src="././assets/images/wc.png"
                className="w-[170px] h-[170px]"
                loading="lazy" 
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                Winter Collections
              </p>
            </div>
          </div>

            </SplideSlide>{" "}
            <SplideSlide>
            <div className="flex flex-col items-center justify-center">
            <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#EFF1D9]">
              <img
                src="././assets/images/ht.png"
                className="w-[170px] h-[170px]"
                loading="lazy" 
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                Hooded T-Shirts
              </p>
            </div>
          </div>
            </SplideSlide>{" "}
            <SplideSlide>
            <div className="flex flex-col items-center justify-center">
            <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#F1DADB]">
              <img
                src="././assets/images/pnt.png"
                className="w-[170px] h-[170px]"
                loading="lazy" 
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                Polo Neck T-Shirts
              </p>
            </div>
          </div>
            </SplideSlide>{" "}
            <SplideSlide>
            <div className="flex flex-col items-center justify-center">
            <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#D9F1DE]">
              <img
                src="././assets/images/fst.png"
                className="w-[170px] h-[170px]"
                loading="lazy" 
              />
            </div>
            <div className="mt-[2rem]">
              <p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer">
                Full Sleeves T-Shirts
              </p>
            </div>
          </div>
            </SplideSlide>
           
          </Splide>
        </div>
      </div>
       
    </div>
  );
}

export default CatogerySlider;
