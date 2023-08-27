import Banner from "@/Component/Banner/Banner";
import Collection from "@/Component/Collections/Collection";
import ProductCard from "@/Component/ProductCard/ProductCard";
import { useRouter } from "next/router";
import React from "react";

const BestSellingProducts = () => {
  const router = useRouter()
  const products = [
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beq",
      imageSrc: "./assets/images/t1.png",
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "399",
      discount: "1900",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bel",
      imageSrc: "./assets/images/t2.png",
      title: "Men  Neck Full Sleeve Red Wine",
      price: "499",
      discount: "1700",
      sizes: ["S", "M", "XL", "XXL"],
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bep",
      imageSrc: "./assets/images/t3.png",
      title: "Men  Neck Full Sleeve Red Wine",
      price: "199",
      discount: "1000",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bek",
      imageSrc: "./assets/images/t4.png",
      title: "Men  Neck Full Sleeve Red Wine",
      price: "699",
      discount: "2900",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
 

  ];
  return (
    <div className="w-full mt-[4rem]">
      <div className="flex justify-center items-center mx-auto text-center">
        <div className="flex md:space-x-8 items-center justify-center w-full">
          <div className="bg-[#FFC7D1] h-[1px] w-full md:w-[380px] hidden md:flex"></div>
          <div>
            {" "}
            <h1 className=" logo text-[18px] md:text-[36px] text-primary font-semibold leading-normal">
              Best Selling Products
            </h1>
          </div>
          <div className="bg-[#FFC7D1] h-[1px] w-full md:w-[380px] hidden md:flex"></div>
        </div>
      </div>

      <div className="w-full md:max-w-[1440px] grid md:grid-cols-4 sm:grid-cols-2  mx-auto  gap-x-2 items-center    md:gap-x-4 md:gap-y-12 my-8 gap-y-8">
        {products.map((item, idx) => {
          return <ProductCard item={item} key={item.id} router={router} productId={item.id}/>;
        })}
      </div>

      <div className="flex justify-center items-center mt-[4rem] mx-auto text-center">
        <button className=" uppercase bg-[#770015] py-[14px] px-[45px] text-[#FFF]  text-[16px] font-medium leading-normal">
          view all
        </button>
      </div>
    
    </div>
  );
};

export default BestSellingProducts;
