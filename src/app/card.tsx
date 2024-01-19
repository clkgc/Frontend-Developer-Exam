import React from "react";
import { CardProps } from "./interfaces";
import Image from "next/image";

export const Card: React.FC<CardProps> = ({ imageList }) => {

  // Reconstruct the string with different parts
  const renderStartingText = (startingText: string) => {
    const parts = startingText.split(" ");
    const priceIndex = parts.findIndex((part) => part.includes("$"));
    return (
      <p className="pr-2">
        {parts.slice(0, priceIndex).join(" ")}
        <span className="text-blue-400 px-1">{parts[priceIndex]}</span>
        {parts.slice(priceIndex + 1).join(" ")}
      </p>
    );
  };

  return (
    <div className="min-w-[298px] bg-white rounded-xl border-slate-100 m-2 text-nowrap bg-customGray shadow-2xl">
      {imageList.map((image) => (
        <React.Fragment key={image.name}>
          <div className="m-5 border-gray-400 border w-fit text-gray-400 rounded-3xl text-xs px-3 py-1">
            {image.type}
          </div>
          <div className="flex items-center justify-center ">
            <Image
              className="object-cover "
              width={220}
              height={220}
              src={image.imageSrc}
              alt={image.name}
              priority
            />
          </div>
          <div className="text-left p-5 max-w-[300px]">
            <div className="text-xl text-gray-800 font-bold mb-3 truncate">
              {image.name}
            </div>
            <div className="mt-1 mr-1 text-gray-600 text-sm leading-normal">
              <p>{image.operatingSystem}</p>
              <p>{image.processor}</p>
              <p>{image.ram}</p>
              <p>{image.storage}</p>
              <p>{image.geForce}</p>
            </div>
          </div>
          <div className=" bg-customGray px-5 py-3 text-left ">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full w-fitContent font-thin text-xs">
              {image.discount}
            </div>
            <div className="flex items-end">
              <p className="text-2xl font-bold pr-2">{image.price}</p>
              <p className="line-through text-xs text-gray-400">
                {image.oldprice}
              </p>
            </div>
            <div className="flex text-xs items-baseline">
              {renderStartingText(image.starting)}
              <Image
                className="h-fit w-7 h-4"
                src={image.affirm}
                width={70}
                height={40}
                alt="Affirm Logo"
              />
            </div>
            <div className="flex items-center">
              <div className="mr-3">
                <p className="text-xs font-bold mt-3">{image.shipping}</p>
                <p className="text-xs ">{image.delivery}</p>
              </div>
              <div>
                <button className="mt-3 border-red-500 border text-red-500 border-2 rounded-3xl text-xs px-3 py-1">
                  {image.buttonType}
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
