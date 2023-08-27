import Banner from "@/Component/Banner/Banner";
import Catogery from "@/Component/Catogery/Catogery";
import CatogerySlider from "@/Component/Catogery/CatogerySlider";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full md:mt-[10rem]">
        {" "}
        <Banner
          className="object-cover w-full h-full"
          src="./assets/images/herobanner.png"
          label="hero banner"
        />
      </div>

   
    </React.Fragment>
  );
};

export default Home;
 