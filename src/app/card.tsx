import React from "react";
import { CardWithButtonType } from "./interfaces";
import Image from "next/image";

export const Card: React.FC<{ card: CardWithButtonType }> = ({ card }) => {
  return (
    <div className="min-w-[298px] bg-white rounded-xl border-slate-100 m-2 text-nowrap bg-customGray shadow-2xl">
      <div className="m-5 border-gray-400 border w-fit text-gray-400 rounded-3xl text-xs px-3 py-1">
        {card.type}
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="object-cover"
          width={220}
          height={220}
          src={card.imageSrc}
          alt={card.name}
          priority
        />
      </div>
      <div className="text-left p-5 max-w-[300px]">
        <div className="text-xl text-gray-800 font-bold mb-3 truncate">
          {card.name}
        </div>
        <div className="mt-1 mr-1 text-gray-600 text-sm leading-normal">
          <p>{card.operatingSystem}</p>
          <p>{card.processor}</p>
          <p>{card.ram}</p>
          <p>{card.storage}</p>
          <p>{card.geForce}</p>
        </div>
      </div>
      <div className="bg-customGray px-5 py-3 text-left">
        <div className="bg-red-500 text-white px-3 py-1 rounded-full w-fitContent font-thin text-xs">
          {card.discount}
        </div>
        <div className="flex items-end">
          <p className="text-2xl font-bold pr-2">{card.price}</p>
          <p className="line-through text-xs text-gray-400">{card.oldprice}</p>
        </div>
        <div className="flex text-xs items-baseline">
          Starting at
          <span className="text-blue-400 px-1 ">{card.starting}</span>
          with
          <Image
            className="h-fit w-7 h-4 ml-1"
            src={card.affirm}
            width={70}
            height={40}
            alt="Affirm Logo"
          />
        </div>
        <div className="flex items-center">
          <div className="mr-3">
            <p className="text-xs font-bold mt-3">{card.shipping}</p>
            <p className="text-xs">{card.delivery}</p>
          </div>
          <div>
            <button className="mt-3 border-red-500 border text-red-500 border-2 rounded-3xl text-xs px-3 py-1">
              {card.buttonType}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
