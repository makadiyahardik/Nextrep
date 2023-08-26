// import Signup from "../Signup/Signup";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";
function Header(props) {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const onMoboClick = () => {
    props.onMoboClicks();
  };

  return (
    <>
      <div
        className={
          "md:fixed md:top-0 md:w-full md:py-[10px]  md:transition-all " +
          (scrollActive ? " md:z-[1000] md:shadow-md  md:bg-white" : " pt-4")
        }>
        <div className="md:max-w-[1440px]   w-full bg-white md:px-10 px-5 mx-auto ">
          <div className="flex  justify-between  md:items-center  ">
            <div className="flex md:hidden justify-start items-start">
            <img
                src="./assets/images/Vieu.png"
                className="h-[32px] w-[79px]  "
              />
            </div>
            <div className=" md:flex hidden ">
            <div className=" text-[18px] font-medium leading-[22px]  cursor-pointer mx-4 ">
            <img
                src="./assets/images/Vieu.png"
                className="h-[32px] w-[79px]  "
              />
              </div>
              {/* <div className=" text-[16px] font-semibold leading-[24px]  cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onSetActive={() => {
                    setActiveLink("Home");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "Home"
                      ? " text-primary animation-active "
                      : " text-gray-600")
                  }>
                  Home
                </LinkScroll>
              </div> */}

              <div className=" text-[16px] font-semibold leading-[24px]  cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="Product"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onSetActive={() => {
                    setActiveLink("Product");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative hover:text-primary-600 duration-500 ease-linear" +
                    (activeLink === "Product"
                      ? " text-primary animation-active "
                      : " text-gray-600")
                  }>
                  Product
                </LinkScroll>
              </div>
              <div className=" text-[16px] font-semibold leading-[24px]  cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="Technology"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("Technology");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                    (activeLink === "Technology"
                      ? " text-primary animation-active "
                      : " text-gray-600")
                  }>
                  Technology
                </LinkScroll>
              </div>
                <div className=" text-[16px] font-semibold leading-[24px]  cursor-pointer">
                  <LinkScroll
                    activeClass="active"
                    to="Insights"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink("Insights");
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                      (activeLink === "Insights"
                        ? " text-primary animation-active "
                        : " text-gray-600")
                    }>
                    Insights
                  </LinkScroll>
                </div>

              <div className="text-[16px] font-semibold leading-[24px]  cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("About");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                    (activeLink === "About"
                      ? " text-primary animation-active "
                      : " text-gray-600")
                  }>
                About
                </LinkScroll>
              </div>
            </div>
            <div className=" flex ">
              <button
                className=" py-[15px]  px-[20px]  hover:text-primary-600 duration-500 ease-linear  rounded-[15px] md:flex hidden text-[18px] font-semibold leading-[22px] text-gray-600 mx-4 cursor-pointer h-[53px] text-center"
                onClick={props.openModal}>
          Login
              </button>
              <button
                className=" py-[10px]  px-[18px]  boxShadow rounded-[8px] flex justify-center items-center  md:flex  text-[16px] font-semibold leading-[24px] md:flex hidden cursor-pointer  bg-[#7F56D9] text-white   text-center"
                onClick={props.openModal}>
                Sign up
              </button>
              <div className="md:hidden block " onClick={onMoboClick}>
                {props.showNav ? (
                  <AiOutlineCloseCircle size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </div>
            </div>

            <div
              className={
                props.showNav
                  ? "fixed top-[4rem] left-0 bg-[#7F56D9] w-full ease-in-out duration-500 z-[1000]"
                  : "fixed top-[-100%]"
              }>
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
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                      (activeLink === "Product"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
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
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                      (activeLink === "Technology"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                  Technology
                  </LinkScroll>
                </li>
                  <li
                    className="my-2 le
                ading-[30px] text-[18px] font-semibold">
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
                        props.setShowNav(false);
                      }}
                      className={
                        "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                        (activeLink === "Insights"
                          ? " text-[#ea2b4f] animation-active "
                          : " text-white")
                      }>
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
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative  hover:text-primary-600 duration-500 ease-linear" +
                      (activeLink === "About"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    About
                  </LinkScroll>
                </li>
                <li>
                  {" "}
                  <button
                    className="font-bold border-solid  py-2 my-2 px-6 rounded-md border-white "
                    onClick={props.openModal}>
                  Login
                  </button>
                </li>
                <li>
                  {" "}
                  <button
                    className="font-bold border-solid border-[1px] py-2 my-2 px-6 rounded-md border-white"
                    onClick={props.openModal}>
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
