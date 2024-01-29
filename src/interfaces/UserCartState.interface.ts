import { IProductsInCartParamethers } from './productsInCartParamethers.interface';

export interface IUserCartState {
  productsInCartParamethers: IProductsInCartParamethers[]
  addProduct: (product: IProductsInCartParamethers) => void,
  removeProduct: (id: number) => void,
}
