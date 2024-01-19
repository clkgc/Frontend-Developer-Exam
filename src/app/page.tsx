"use client";
import React, { useEffect, useState } from "react";
import { Card } from "./card";
import { imageObjectList } from "./mockdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = imageObjectList.length - 4;
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // the slide loops the images
  const slide = (direction: string) => {
    if (direction === "left") {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(maxIndex);
      }
    } else if (direction === "right") {
      if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % imageObjectList.length
      ),
    onSwipedRight: () =>
      setCurrentIndex((currentIndex) =>
        currentIndex === 0 ? imageObjectList.length - 1 : currentIndex - 1
      ),
    trackTouch: true,
    trackMouse: false, //better to be disabled to avoid desktop mouse swipe
  });

  const desktopDisplay = () => {
    return (
      <div className="text-center mt-20 ">
        <h1 className="text-3xl font-bold mb-2 tracking-wide">
          Best Seller Gaming PC
        </h1>
        <p className="text-2xl font-bold tracking-wide">Prebuilt & Custom</p>
        <div className="flex justify-end items-center text-bold">
          <button
            onClick={() => slide("left")}
            type="button"
            value="left"
            className=" border-slate-100 shadow-custom m-2 w-45 h-45"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={() => slide("right")}
            type="button"
            value="right"
            className=" border-slate-100 shadow-custom w-45 h-45 "
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="flex flex-nowrap m-2">
          {imageObjectList
            .slice(currentIndex, currentIndex + 4)
            .map((image) => (
              <Card key={image.name} imageList={[image]} />
            ))}
        </div>
      </div>
    );
  };

  const mobileDisplay = () => {
    return (
      <div className="flex flex-nowrap m-2" {...swipeHandlers}>
        {imageObjectList.slice(currentIndex, currentIndex + 1).map((image) => (
          <Card key={image.name} imageList={[image]} />
        ))}
      </div>
    );
  };
  return isDesktop ? desktopDisplay() : mobileDisplay();
};

export default Home;
