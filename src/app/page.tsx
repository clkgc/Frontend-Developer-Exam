'use client'
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import { Card } from "./card";
import { cardObjectList } from "./mockdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration
      once: true, // whether animation should happen only once while scrolling down
    });

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardsToDisplay = (cardsToShow:number) => {
    let endIndex = currentIndex + cardsToShow;
    let cardsToDisplay = [];

    if (endIndex <= cardObjectList.length) {
      cardsToDisplay = cardObjectList.slice(currentIndex, endIndex);
    } else {
      cardsToDisplay = cardObjectList.slice(currentIndex);
      let additionalCardsNeeded = endIndex - cardObjectList.length;
      cardsToDisplay = cardsToDisplay.concat(cardObjectList.slice(0, additionalCardsNeeded));
    }

    return cardsToDisplay;
  };

  const changeSlide = (direction:string) => {
    const totalCards = cardObjectList.length;
    const cardsToShow = isDesktop ? 4 : 1;

    if (direction === "left") {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalCards - cardsToShow);
    } else if (direction === "right") {
      setCurrentIndex((currentIndex + 1) % totalCards);
    }
  };

  const getButtonType = (type:string) => {
    return type === "Prebuilt PC" ? "Buy now" : "Customize";
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => changeSlide("right"),
    onSwipedRight: () => changeSlide("left"),
    trackTouch: true,
    trackMouse: false,
  });

  const desktopDisplay = () => {
    const cardsToDisplay = getCardsToDisplay(4);

    return (
      <div className="text-center mt-20 ">
        <h1 className="text-3xl font-bold mb-2 tracking-wide">Best Seller Gaming PC</h1>
        <p className="text-2xl font-bold tracking-wide">Prebuilt & Custom</p>
        <div className="flex justify-end items-center text-bold">
          <button onClick={() => changeSlide("left")} type="button" className="border-slate-100 shadow-custom m-2 w-45 h-45">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={() => changeSlide("right")} type="button" className="border-slate-100 shadow-custom w-45 h-45">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="flex flex-nowrap m-2">
          {cardsToDisplay.map((card) => (
            <Card key={card.name} card={{ ...card, buttonType: getButtonType(card.type) }} />
          ))}
        </div>
      </div>
    );
  };

  const mobileDisplay = () => {
    const cardsToDisplay = getCardsToDisplay(1);

    return (
      <div className="flex flex-nowrap m-2" {...swipeHandlers}>
        {cardsToDisplay.map((card) => (
          <Card key={card.name} card={{ ...card, buttonType: getButtonType(card.type) }} />
        ))}
      </div>
    );
  };

  return isDesktop ? desktopDisplay() : mobileDisplay();
};

export default Home;
