import React from "react";
import { CardProps } from "./interfaces";
import Image from "next/image";

export const Card: React.FC<CardProps> = ({ imageList }) => {
  return (
    <div className="max-w-md bg-white rounded-xl overflow-hidden border-slate-100 shadow-md m-2 text-nowrap bg-customGray font-gotham">
      <div className="bg-white p-2 ">
        {imageList.map((image) => (
          <React.Fragment key={image.name}>
            <div className="flex items-center justify-center h-40 overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                width={100}
                height={100}
                src={image.imageSrc}
                alt={image.name}
              />
            </div>
            <div className="text-left">
              <div className="text-xl font-medium text-gray-800">
                {image.name}
              </div>
              <div className="mt-1 mr-1 text-gray-600">
                <p>{image.operatingSystem}</p>
                <p>{image.processor}</p>
                <p>{image.ram}</p>
                <p>{image.storage}</p>
              </div>
            </div>
            <div className=" bg-customGray px-5 py-3 text-left ">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full w-fitContent">
                {image.discount}
              </div>
              <div className="flex items-end">
                <div className="text-2xl font-bold ">
                  <p>{image.price}</p>
                </div>
                <div className="line-through">
                  <p>{image.oldprice}</p>
                </div>
              </div>
              <div className="flex">
                <p>{image.starting}</p>
                <div className="flex justify-center w-40 h-10">
                  <img className="h-fit" src={image.affirm} alt="Affirm Logo" />
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <div className="text-sm font-bold ">
                    <p>{image.shipping}</p>
                  </div>
                  <p>{image.delivery}</p>
                </div>
                <div>
                  <button className="border-red-500 text-red border-2 rounded-3xl text-xs">
                    {image.buttonType}
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
