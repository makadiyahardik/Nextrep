import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();

  const id = router.query?.productid;
  const products = [
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beq",
      imageSrc: "/assets/images/t1.png",
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "399",
      discount: "1900",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bel",
      imageSrc: "/assets/images/t2.png",
      title: "Men  Neck Full Sleeve Red Wine",
      price: "499",
      discount: "1700",
      sizes: ["S", "M", "XL", "XXL"],
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bep",
      imageSrc: "/assets/images/t3.png",
      title: "Men  Neck Full Sleeve Red Wine",
      price: "199",
      discount: "1000",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bek",
      imageSrc: "/assets/images/t4.png",
      title: "Men  Neck Full Sleeve Red Wine",
      price: "699",
      discount: "2900",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bei",
      imageSrc: "/assets/images/t1.png",
      title: "Men  Neck Full Sleeve Red Wine",
      price: "1999",
      discount: "3900",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },

    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beu",
      imageSrc: "/assets/images/t3.png",
      title: "Men  Neck Full Sleeve Red Wine",
      price: "99",
      discount: "199",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bey",
      imageSrc: "/assets/images/t4.png",
      title: "Men  Neck Full Sleeve Red Wine",
      price: "1111",
      discount: "1900",
      sizes: ["S", "M", "L", "XXL"],
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bet",
      imageSrc: "/assets/images/t3.png",
      title: "Men  Neck Full Sleeve Red Wine",
      price: "799",
      discount: "1499",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  ];
  const selectedProduct = products.find((product) => product.id === id);
  const handleGoBack = () => {
    router.back(); // Navigate back to the previous page
  };
  if (!selectedProduct) {
    return <div className="font-semibold text-blue">Product not found</div>;
  }
  return (
    <div className="flex justify-center items-center md:mt-[11rem] mt-[1rem]">
      <div className="flex justify-center items-center mx-auto md:max-w-[1440px] w-full flex-col">
        <img
          src={selectedProduct.imageSrc}
          alt={selectedProduct.title}
          className="h-[50vh] md:w-[16.5rem] "
        />
        <h2>{selectedProduct.title}</h2>
        <p>Price: ₹{selectedProduct.price}</p>
        <p>Discount: ₹{selectedProduct.discount}</p>
        <p>Sizes: {selectedProduct.sizes.join(", ")}</p>
        <div className="flex justify-center items-center mt-[2rem] mx-auto text-center">
          <button className=" uppercase bg-[#770015] py-[14px] px-[45px] text-[#FFF]  text-[16px] font-medium leading-normal" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
