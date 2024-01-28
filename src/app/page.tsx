"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "./card";
import { cardObjectList } from "./mockdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const getCardsToDisplay = (cardsToShow: number) => {
    let endIndex = currentIndex + cardsToShow;
    let cardsToDisplay = [];

    if (endIndex <= cardObjectList.length) {
      cardsToDisplay = cardObjectList.slice(currentIndex, endIndex);
    } else {
      cardsToDisplay = cardObjectList.slice(currentIndex);
      let additionalCardsNeeded = endIndex - cardObjectList.length;
      cardsToDisplay = cardsToDisplay.concat(
        cardObjectList.slice(0, additionalCardsNeeded)
      );
    }

    return cardsToDisplay;
  };

  const changeSlide = (direction: string) => {
    const totalCards = cardObjectList.length;
    const cardsToShow = isDesktop ? 4 : 1;

    if (direction === "left") {
      setCurrentIndex(
        currentIndex > 0 ? currentIndex - 1 : totalCards - cardsToShow
      );
    } else if (direction === "right") {
      setCurrentIndex((currentIndex + 1) % totalCards);
    }
  };

  const getButtonType = (type: string) => {
    return type === "Prebuilt PC" ? "Buy now" : "Customize";
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => changeSlide("right"),
    onSwipedRight: () => changeSlide("left"),
    trackTouch: true,
    trackMouse: false,
  });

  const desktopDisplay = () => {
    return (
      <div className="text-center m-20">
        <h1 className="text-3xl font-bold mb-2 tracking-wide">
          Best Seller Gaming PC
        </h1>
        <p className="text-2xl font-bold tracking-wide">Prebuilt & Custom</p>
        <div className="overflow-x-auto flex flex-nowrap m-2" style={{ width: '1300px' }}>
          {cardObjectList.map((card) => (
            <div key={card.name} className="inline-block" style={{ width: '325px', flex: '0 0 auto', paddingRight:'10px' }}>
              <Card
                card={{ ...card, buttonType: getButtonType(card.type) }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  const mobileDisplay = () => (
    <div className="flex overflow-x-auto w-full" {...swipeHandlers}>
      {cardObjectList.map((card) => (
        <div key={card.name} className="w-screen flex-shrink-0">
          <Card card={{ ...card, buttonType: getButtonType(card.type) }} />
        </div>
      ))}
    </div>
  );

  return isDesktop ? desktopDisplay() : mobileDisplay();
};

export default Home;