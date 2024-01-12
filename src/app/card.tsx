import React from "react";

export interface Image {
  imageSrc: string;
  name: string;
  operatingSystem: string;
  processor: string;
  graphicsCard: string;
  storage: string;
  ram: string;
  discount: string;
  price: string;
  oldprice: string;
  affirm: string;
  starting: string;
  shipping: string;
  delivery: string;
  buttonType: string;
}

interface CardProps {
  imageList: Image[];
}

export const Card: React.FC<CardProps> = ({ imageList }) => {
  const renderProperty = (propertyName: keyof Image) => (
    <div className="mt-2 text-gray-600">
      {imageList.map((image) => (
        <p key={image.name}>{image[propertyName]}</p>
      ))}
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden">
      <div className="grid grid-cols-2 gap-4">
        {imageList.map((image) => (
          <div
            key={image.name}
            className="flex items-center justify-center bg-gray-200 h-40 overflow-hidden"
          >
            <img
              className="object-cover w-full h-full"
              src={image.imageSrc}
              alt={image.name}
            />
          </div>
        ))}
      </div>
      <div className="p-6 text-center">
        <div className="text-xl font-medium text-gray-800">
          {imageList.length > 0 ? imageList[0].name : ""}
        </div>
        {renderProperty("operatingSystem")}
        {renderProperty("processor")}
        {renderProperty("ram")}
        {renderProperty("storage")}
        <div className="bg-red-500 text-white px-4 py-2 rounded-full mt-4">
          {imageList.length > 0 ? imageList[0].discount : ""}
        </div>
        {renderProperty("discount")}
        {renderProperty("price")}
        {renderProperty("oldprice")}
        {renderProperty("starting")}{" "}
        {imageList.map((image) => (
          <div
            key={image.name}
            className="flex items-center justify-center bg-gray-200 h-40 overflow-hidden"
          >
            <img
              className="object-cover w-full h-full"
              src={image.affirm}
              alt={image.name}
            />
          </div>
        ))}
        {renderProperty("shipping")}
        {renderProperty("delivery")}
        {renderProperty("buttonType")}
      </div>
    </div>
  );
};
