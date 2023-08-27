import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
function Footer() {
  return (
    <div className="  pb-10" id="Footer">
      <div className="w-full    md:px-10 px-5">
        <div className="  md:max-w-[1400px]  md:px-10 px-5 mx-auto flex w-full">
          <div className="w-full grid md:grid-cols-4 sm:grid-cols-2  mx-auto  gap-x-2 items-start  md:gap-x-16 md:gap-y-5 my-5 gap-y-8">
            <div className="flex flex-col justify-start text-[#ffffff] ">
            
              <p className=" text-[18px] text-primary font-medium leading-[28px]  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries....
              </p>
              <div className="mt-[1rem] flex space-x-4 ">


              
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src="assets/images/fb.png"
                        className="w-[50px] h-auto"
                        alt="Instagram"
                      />
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src="assets/images/linkie.png"
                        className="w-[50px] h-auto"
                        alt="LinkedIn"
                      />
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src="assets/images/tweet.png"
                        className="w-[50px] h-auto"
                        alt="Facebook"
                      />
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src="assets/images/ig.png"
                        className="w-[50px] h-auto"
                        alt="Twitter"
                      />
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src="assets/images/pin.png"
                        className="w-[50px] h-auto"
                        alt="Twitter"
                      />
                    </a>
                  </div>
            </div>
            <div className="flex flex-col justify-start ">
              <h1 className="my-4 text-[18px] font-semibold leading-normal  text-darkOrange logo">
                ONLINE SHOPPING
              </h1>

              <ul className="text-[14px] text-primary font-medium leading-[34px]">
                <li>
                  {" "}
                  <LinkScroll
                    to="Men’s T-Shirts "
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    Men’s T-Shirts
                  </LinkScroll>
                </li>
                <li className="my-3 text-[14px] text-primary font-medium leading-[34px]">
                  <LinkScroll
                    to="WhoWeAre"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    Women’s Wear
                  </LinkScroll>
                </li>
                <li className="my-3 text-[14px] text-primary font-medium leading-[34px]">
                  <LinkScroll
                    to="WhoWeAre"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    Winter Collections
                  </LinkScroll>
                </li>
                <li className="my-3 text-[14px] text-primary font-medium leading-[34px]">
                  <LinkScroll
                    to="WhoWeAre"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    Hooded T-Shirts
                  </LinkScroll>
                </li>

                <li className="my-3 text-[14px] font-medium text-primary leading-[34px]">
                  <LinkScroll
                    to="WhoWeAre"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    Streetwear Collections
                  </LinkScroll>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[18px] font-semibold leading-normal  text-darkOrange logo">
                CUSTOMER POLICIES
              </h1>

              <ul className="">
                <li className="text-[14px] font-medium text-primary leading-[34px]">
                  About Us
                </li>
                <li className="my-3 text-[14px] font-medium text-primary leading-[34px]">
                  {" "}
                  Terms & Conditions
                </li>
                <li className="my-3 text-[14px] font-medium text-primary leading-[34px]">
                  Shipping & Returns Policy
                </li>
                <li className="my-3 text-[14px] font-medium text-primary leading-[34px]">
                  {" "}
                  Cancellation & Refund Policy
                </li>
                {/* <li className="my-3 text-[14px] font-medium text-primary leading-[34px]">
                  Contact Us
                </li> */}
                <li className="my-3 text-[14px] font-medium text-primary leading-[34px] cursor-pointer">
                  <LinkScroll
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={100}
                  >
                          Contact Us
                  </LinkScroll>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[18px] font-semibold leading-normal  text-darkOrange logo">
                STORE INFORMATION
              </h1>

              <div className="flex  items-start">
                <img
                  src="./assets/images/location.png"
                  alt=""
                  className="h-5 w-5"
                />
                <p className="text-primary ml-3 text-[14px] leading-[28px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
              <div className="flex  items-start mt-[1rem]">
                <img src="./assets/images/cll.png" alt="" className="h-5 w-5" />
                <a href="tel:1234567890" className="text-primary ml-3 text-[14px] leading-[28px]">
  Call Us: 1234567890
</a>

              </div>
              <div className="flex  items-start mt-[1rem]">
                <img
                  src="./assets/images/email.png"
                  alt=""
                  className="h-5 w-5"
                />
                <p className="text-primary ml-3 text-[14px] leading-[28px]">
                  Email Us: info@yourmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#20050A] text-[#FFF] text-[14px] font-medium leading-[34px] justify-center items-center flex mx-auto text-center py-[17px] md:px-10 px-5">
        <div className=" ">
          <p> ©2022-23 Powered By dummy team</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
