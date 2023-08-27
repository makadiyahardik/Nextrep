import React from "react";

const ProductCard = ({ item, key }) => {
  return (
    <div
      className="flex flex-col justify-center items-center  relative"
      key={key}
    >
      <div className="product-image relative overflow-hidden group cursor-pointer">
        {" "}
        <img src={item.imageSrc} className="h-[50vh] md:w-[16.5rem]  w-full " />
        <div className="absolute w-full h-full  inset-0 bg-black bg-opacity-50 backdrop-blur-md  flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300  flex">
          <div className="flex justify-between items-center text-center mx-auto space-x-8">
            <div>
              <img
                src="./assets/images/cart.svg"
                className="h-[32px] w-[32px]  "
              />
            </div>
            <div>
              <img
                src="./assets/images/heart.svg"
                className="h-[32px] w-[32px]  "
              />
            </div>
            <div>
              <img
                src="./assets/images/share.svg"
                className="h-[32px] w-[32px]  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="product-text flex flex-col justify-center items-center">
        <div className="title">
          <p className="text-primary font-normal text-[14px] leading-normal pt-4">
            {item.title}
          </p>
        </div>
        <div className="price pt-4 flex ">
          <h2 className="text-[#1F1F1F] font-bold flex items-center text-[18px] leading-[18px] ">
            ₹{item.price}{" "}
          </h2>

          <p className="line-through ml-1 text-[#F00] font-normal leading-[18px] text-[10px]">
            {item.discount}
          </p>
        </div>
        <div className="sizes flex justify-between items-center space-x-4 pt-4">
          {item.sizes.map((size, index) => {
            return (
              <div
                className="border-[1px] border-[#E6E6E6] w-[36px] h-[36px] flex justify-center items-center text-center"
                key={index}
              >
                <h4 className="text-primary font-medium text-[14px] leading-normal">
                  {size}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
