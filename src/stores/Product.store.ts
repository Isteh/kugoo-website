import { create } from 'zustand';
import { IProductState } from '../interfaces/productState.interface';

export const useProductStore = create<IProductState>((set) => ({
  products: [],
  setProducts: (newProducts) =>
    set((state) => ({
      products: [...state.products, ...newProducts],
    })),
}));
