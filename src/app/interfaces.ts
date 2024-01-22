// interfaces.ts
export interface card {
  type: string;
  imageSrc: string;
  name: string;
  operatingSystem: string;
  processor: string;
  graphicsCard: string;
  storage: string;
  geForce: string;
  ram: string;
  discount: string;
  price: string;
  oldprice: string;
  affirm: string;
  starting: string;
  shipping: string;
  delivery: string;
}

export interface CardWithButtonType extends card {
  buttonType: string;
}
