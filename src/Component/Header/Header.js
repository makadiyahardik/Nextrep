// import Signup from "../Signup/Signup";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";
import { RiPhoneLine } from "react-icons/ri";
function Header(props) {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setShowNav(false);
  };
  const CloseModal = () => {
    setIsOpen(false);
  };
  const onMoboClick = () => {
    setShowNav(!showNav);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const phoneNumber = "9313193108";

  return (
    <>
      <div
        className={
          "md:fixed md:top-0 md:w-full md:py-[10px]  md:transition-all " +
          (scrollActive ? " md:z-[1000] md:shadow-md  md:bg-white" : " pt-4")
        }
      >
        <div className="bg-[#1F1F1F] -mt-3">
          <div className="flex justify-between items-center mx-auto p-2 w-full md:max-w-[1440px] ">
            <div>
              <h1 className="font-medium text-[14px] text-[#FFF] leading-normal">
                Welcome to Our Store Hiscraves
              </h1>
            </div>
            <div className="text-[#FFF] flex items-center">
              <div className="flex items-center">
                <img
                  src="./assets/images/call.png"
                  className="md:h-[2rem] h-[1rem] w-[1rem] md:w-[2rem]  md:mr-0 mr-[1px]"
                />
                <p className="font-medium text-[14px] text-[#FFF] leading-normal">
                  Call us:
                </p>
              </div>
              <a className="md:mx-2 mx-1" href={`tel:${phoneNumber}`}>
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
        <div className="md:max-w-[1440px]   w-full bg-white  px-5 mx-auto py-8">
          <div className="flex  justify-between  md:items-center  ">
            <div className="flex md:hidden justify-start items-start">
              <img
                src="./assets/images/hamburgermenu.png"
                className="h-[32px] w-[32px]  "
              />
            </div>
            <div className=" md:flex hidden ">
              <div className="  cursor-pointer  ">
                <img
                  src="./assets/images/hamburgermenu.png"
                  className="h-[24px] w-[24px]  "
                />
              </div>
            </div>
            <div>
              <h2 className="logo text-[18px] text-primary font-semibold leading-normal cursor-pointer">
                Logo here
              </h2>
            </div>
            <div className=" flex justify-between items-center gap-6">
            <div className="  cursor-pointer  ">
                <img
                  src="./assets/images/search.png"
                  className="h-[24px] w-[24px]  "
                />
              </div> <div className="  cursor-pointer  ">
                <img
                  src="./assets/images/save.png"
                  className="h-[24px] w-[24px]  "
                />
              </div> <div className="  cursor-pointer  ">
                <img
                  src="./assets/images/bag.png"
                  className="h-[24px] w-[24px]  "
                />
              </div> <div className="  cursor-pointer  ">
                <img
                  src="./assets/images/person.png"
                  className="h-[24px] w-[24px]  "
                />
              </div>
              {/* <div className="md:hidden block " onClick={onMoboClick}>
                {showNav ? (
                  <AiOutlineCloseCircle size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </div> */}
            </div>

            <div
              className={
                showNav
                  ? "fixed top-[4rem] left-0 bg-[#7F56D9] w-full ease-in-out duration-500 z-[1000]"
                  : "fixed top-[-100%]"
              }
            >
              <ul className="md:hidden flex text-white p-5  flex-col mx-auto justify-center items-center">
                {/* <li className="my-2 leading-[30px] text-[18px] font-semibold ">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Home"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Home");
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Home"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    Home
                  </LinkScroll>
                </li> */}
                <li className="my-2 leading-[30px] text-[18px] font-semibold">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Product"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink("Product");
                      setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                      (activeLink === "Product"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }
                  >
                    Product
                  </LinkScroll>
                </li>
                <li className="my-2 leading-[30px] text-[18px] font-semibold">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Technology"
                    offset={-100}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Technology");
                      setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                      (activeLink === "Technology"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }
                  >
                    Technology
                  </LinkScroll>
                </li>
                <li
                  className="my-2 le
                ading-[30px] text-[18px] font-semibold"
                >
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Insights"
                    offset={-100}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Insights");
                      setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                      (activeLink === "Insights"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }
                  >
                    Insights
                  </LinkScroll>
                </li>

                <li className="my-2 leading-[30px] text-[18px] font-semibold">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="About"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("About");
                      setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                      (activeLink === "About"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }
                  >
                    About
                  </LinkScroll>
                </li>
                <li>
                  {" "}
                  <button className="font-bold border-solid  py-2 my-2 px-6 rounded-md border-white ">
                    Login
                  </button>
                </li>
                <li>
                  {" "}
                  <button className="font-bold border-solid border-[1px] py-2 my-2 px-6 rounded-md border-white">
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;