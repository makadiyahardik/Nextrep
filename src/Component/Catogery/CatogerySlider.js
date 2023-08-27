import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
function CatogerySlider() {
  return (
    <div className="relative " id="Technology">
      <div className="w-full md:max-w-[1400px] mx-auto flex  relative items-center justify-center md:px-10 px-5">
        <div className="w-full grid md:grid-cols-6 sm:grid-cols-4 xs:cols-2 mx-auto items-center  justify-center md:gap-x-20 gap-x-8 gap-y-5 my-5 md:hidden">
          <Splide
            options={{
              type: "loop",
              rewind: true,
              autoplay: true,
              perMove: 1,
              perPage: 2,
              gap: "1rem",
              arrows: false,
              pagination: false,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                speed: 2,
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <img
                src="./assets/images/PlumeHomePass.png"
                className="w-[6rem] h-auto"
              />
            </SplideSlide>{" "}
            <SplideSlide>
              <img
                src="./assets/images/PlumeWorkPass.png"
                className="w-[6rem] h-auto"
              />
            </SplideSlide>{" "}
            <SplideSlide>
              <img
                src="./assets/images/Calendly.png"
                className="w-[6rem] h-auto"
              />
            </SplideSlide>{" "}
            <SplideSlide>
              <img
                src="./assets/images/KidFootLocker.png"
                className="w-[6rem] h-auto"
              />
            </SplideSlide>{" "}
            <SplideSlide>
              <img
                src="./assets/images/FootLocker.png"
                className="w-[6rem] h-auto"
              />
            </SplideSlide>{" "}
            <SplideSlide>
              <img
                src="./assets/images/Movil.png"
                className="w-[6rem] h-auto"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="./assets/images/Champs.png"
                className="w-[6rem] h-auto"
              />
            </SplideSlide>{" "}
            <SplideSlide>
              <img
                alt="image"
                src="./assets/images/gtpl.png"
                className="w-[6rem] h-auto"
              />
            </SplideSlide>{" "}
          </Splide>
        </div>
      </div>

      <div className=" mx-auto md:flex  hidden relative items-start justify-center md:px-10 px-5">
        <div className="w-full flex md:flex-row mx-auto items-center md:space-x-4 justify-center flex-wrap  fl gap-y-5 my-5  ">
          <Splide
            options={{
              type: "loop",
              rewind: true,
              autoplay: true,
              perMove: 1,
              perPage: 5,
              gap: "4rem",
              arrows: false,
              pagination: false,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                speed: 2,
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide><div className="flex flex-col items-center justify-center">
              <div className="rounded-full  md:max-w-[170px] md:max-h-[170px] bg-[#F1DBE9]">
                <img
                  src="./assets/images/tshirt.png"
                  className="w-[170px] h-[170px]"
                />
                
              </div>
              <div className="mt-[2rem]"><p className="logo text-[16px] text-primary font-semibold leading-normal cursor-pointer"> Men’s T-Shirts</p></div>
              </div>
            </SplideSlide>{" "}
            <SplideSlide>
              <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#DDD3EB]">
                <img
                  src="./assets/images/WW.png"
                  className="w-[170px] h-[170px]"
                />
              </div>
            </SplideSlide>{" "}
            <SplideSlide>
              <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#D3EAEB]">
                <img
                  src="./assets/images/wc.png"
                  className="w-[170px] h-[170px]"
                />
              </div>
            </SplideSlide>{" "}
            <SplideSlide>
              <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#EFF1D9]">
                <img
                  src="./assets/images/ht.png"
                  className="w-[170px] h-[170px]"
                />
              </div>
            </SplideSlide>{" "}
            <SplideSlide>
              <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#F1DADB]">
                <img
                  src="./assets/images/pnt.png"
                  className="w-[170px] h-[170px]"
                />
              </div>
            </SplideSlide>{" "}
            <SplideSlide>
              <div className="rounded-full md:max-w-[170px] md:max-h-[170px] bg-[#D9F1DE]">
                <img
                  src="./assets/images/fst.png"
                  className="w-[170px] h-[170px]"
                />
              </div>
            </SplideSlide>{" "}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default CatogerySlider;
