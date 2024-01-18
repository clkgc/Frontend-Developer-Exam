export interface Image {
    type:string;
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
  
export interface CardProps {
    imageList: Image[];
  }