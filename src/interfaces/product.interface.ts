export interface IProduct {
  id: number | string;
  name: string;
  type: string;
  vendorCode: number;
  mainImg: string;
  additionalImgs?: string[];
  characteristics?: {
    charge?: number;
    power?: number;
    speed?: number;
    powerTime?: number;
  };
  watchCount?: number;
  buyCount?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  avaliable: boolean;
  price: {
    old?: number;
    actual: number;
  };
  complectation?: { name: string; value: number }[];
  tiresType?: { isStudded?: boolean; isOffroad?: boolean };
  guarantee?: { name: string; value: number }[];
  additionalServices: { name: string; value: number; discount?: number }[];
}
