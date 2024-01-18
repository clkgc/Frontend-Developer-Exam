"use client";
import React, { useState } from "react";
import { Card } from "./card";
import { imageObjectList } from "./mockdata";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = imageObjectList.length - 4;
  const slide = (direction: string) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log('left')
    } else if (direction === "right" && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      console.log('right')
    }
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-gotham">Best Seller Gaming PC</h1>
      <p className="text-2xl font-gotham">Prebuilt & Custom</p>
      <div className="">
        <button
          onClick={() => slide("left")}
          className=" border-slate-100 shadow-custom m-2"
        >
          〈
        </button>
        <button
          onClick={() => slide("right")}
          className=" border-slate-100 shadow-custom "
        >
          〉
        </button>
      </div>
      <div className="flex flex-nowrap overflow-x-auto m-20">
        {imageObjectList.slice(currentIndex, currentIndex + 4).map((image) => (
          <Card key={image.name} imageList={[image]} />
        ))}
      </div>
    </div>
  );
};

export default Home;
