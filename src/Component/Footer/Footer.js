import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
function Footer() {

  

  return (
    <div className=" mt-[20rem]" id="Footer">
      <div className="w-full bg-[#1F0048]  md:px-10 px-5">
        <div className="  md:max-w-[1400px]  md:px-10 px-5 mx-auto flex w-full">
          <div className="w-full grid md:grid-cols-4 sm:grid-cols-2  mx-auto  gap-x-2 items-start  md:gap-x-16 md:gap-y-5 my-5 gap-y-8">
            <div className="flex flex-col justify-start text-[#ffffff]">
              <img
                src="./assets/images/FooterLogo.png"
                className="h-auto w-[135px] my-6"
              />
              <p className="text-[18px] font-semibold leading-[30px] ">
                Zraviya is named after the sanskrit word, which means goal.
                Zraviya LLC is the place, where you can get help to convert your
                ideas to reality. Because we believe your zraviya is our
                zraviya.
              </p>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[32px] font-extrabold md:leading-[40px] leading-[25px] ">
                Quick Links
              </h1>

              <ul className="text-[18px] font-semibold md:leading-[40px] leading-[25px] cursor-pointer">
                <li>
                  {" "}
                  <LinkScroll
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                    Home
                  </LinkScroll>
                </li>
                <li className="my-3">
                  <LinkScroll
                    to="WhoWeAre"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                    About Us
                  </LinkScroll>
                </li>
                <li className="my-3">
                  <LinkScroll
                    to="Service"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                    Services
                  </LinkScroll>
                </li>

                  <li className="my-3">
                    <LinkScroll
                      to="Client"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={-100}>
                      Testimonials
                    </LinkScroll>
                  </li>

                <li className="my-3">
                  <LinkScroll
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}>
                    Contact Us
                  </LinkScroll>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[32px] font-extrabold md:leading-[40px] leading-[25px] ">
                Services
              </h1>

              <ul className="text-[18px] font-semibold md:leading-[40px] leading-[25px]">
                <li>UI UX Development</li>
                <li className="my-3"> Web Development</li>
                <li className="my-3">Android/iOS Development </li>
                <li className="my-3"> Backend Development </li>
                <li className="my-3">Consulting Service</li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[32px] font-extrabold md:leading-[40px] leading-[25px] ">
                Others
              </h1>

              <ul className="text-[18px] font-semibold md:leading-[40px] leading-[25px]">
                  <li>Careers </li>
                  <li className="my-3"> Blogs</li>

                  <li className="my-3">Case Studies </li>

                  <li className="my-3">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#13002D] py-5 md:px-10 px-5">
        <div className="md:max-w-[1400px] md:px-10 px-5 mx-auto text-[16px] font-normal leading-[24px] flex w-full md:justify-between flex-col md:flex-row text-[#FFFFFF]">
          <div className="text-[16px] font-normal leading-[24px]">
          © 2023 Vieu Inc. All rights reserved.
          </div>
          <div className="flex md:text-[18px] text-[15px] font-semibold leading-[30px]">
            <div>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer">
                Facebook
              </a>
            </div>
            <p className="md:mx-2 mx-[2px]">-</p>
            <div>
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer">
                Facebook
              </a>
            </div>
            <p className="md:mx-2 mx-[2px]">-</p>
            <div>
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer">
                Facebook
              </a>
            </div>
            <p className="md:mx-2 mx-[2px]">-</p>
            <div>
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
