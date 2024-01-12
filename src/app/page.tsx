import React from "react";
import { Card, Image } from "./card";

const Home = () => {
  const imageObjectList: Image[] = [
    {
      imageSrc: "gaming-pc-01-Y60-002-Main-2400.webp",
      name: "Creator RDY Y40BG201",
      operatingSystem: "Windows 11 Pro",
      processor: "Intel® Core™ i9-13900KF CPU",
      graphicsCard: "GeForce RTX 4090 - 24GB",
      storage: "2TB M.2 NVMe GEN4 SSD",
      ram: "32GB DDR5-6000MHz RGB RAM",
      discount: "SAVE $200",
      price: "$3,549",
      oldprice: "$3,999",
      starting: "Starting at $87.22/mo with",
      shipping: " Free Shipping",
      delivery: "Delivery By Friday, Jul 7",
      buttonType:'Buy now',
      affirm:'Affirm_logo.svg.png'
    },
    {
      imageSrc: "gaming-pc-01-Y60-002-Main-2400.webp",
      name: "Gaming RDY SLMRG211",
      operatingSystem: "Windows 11 Pro",
      processor: "Intel® Core™ i9-13900KF CPU",
      graphicsCard: "GeForce RTX 4090 - 24GB",
      storage: "2TB M.2 NVMe GEN4 SSD",
      ram: "32GB DDR5-6000MHz RGB RAM",
      discount: "SAVE $200",
      price: "$3,549",
      oldprice: "$3,999",
      starting: "Starting at $87.22/mo with",
      shipping: " Free Shipping",
      delivery: "Delivery By Friday, Jul 7",
      buttonType:'Buy now',
      affirm:'Affirm_logo.svg.png'
    },
    {
      imageSrc: "gaming-pc-01-Y60-002-Main-2400.webp",
      name: "Intel 13th Gen Performance Daily",
      operatingSystem: "Windows 11 Pro",
      processor: "Intel® Core™ i9-13900KF CPU",
      graphicsCard: "GeForce RTX 4090 - 24GB",
      storage: "2TB M.2 NVMe GEN4 SSD",
      ram: "32GB DDR5-6000MHz RGB RAM",
      discount: "SAVE $200",
      price: "$3,549",
      oldprice: "$3,999",
      starting: "Starting at $87.22/mo with",
      shipping: " Free Shipping",
      delivery: "Delivery By Friday, Jul 7",
      buttonType:'Customize',
      affirm:'Affirm_logo.svg.png'
    },
    {
      imageSrc: "gaming-pc-01-Y60-002-Main-2400.webp",
      name: "AMD Ryzen 9 Ultra Gaming Daily Deal",
      operatingSystem: "Windows 11 Pro",
      processor: "Intel® Core™ i9-13900KF CPU",
      graphicsCard: "GeForce RTX 4090 - 24GB",
      storage: "2TB M.2 NVMe GEN4 SSD",
      ram: "32GB DDR5-6000MHz RGB RAM",
      discount: "SAVE $200",
      price: "$3,549",
      oldprice: "$3,999",
      starting: "Starting at $87.22/mo with",
      shipping: " Free Shipping",
      delivery: "Delivery By Friday, Jul 7",
      buttonType:'Customize',
      affirm:'Affirm_logo.svg.png'
    },
  ];

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Best Seller Gaming PC</h1>
      <p className="text-2xl font-bold">Prebuilt & Custom</p>
      <div className="flex flex-nowrap overflow-x-auto m-20">
        {imageObjectList.map((image) => (
          <Card key={image.name} imageList={[image]} />
        ))}
      </div>
    </div>
  );
};

export default Home;
