import { IProduct } from "./product.interface";

export interface IProductState {
    products: IProduct[]
    setProducts: (newProducts: IProduct[]) => void
}