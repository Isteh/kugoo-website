import { create } from 'zustand';
import { IUserCartState } from '../interfaces/UserCartState.interface';
import { persist } from 'zustand/middleware';

export const useUserCartStore = create<IUserCartState>()(persist((set) => ({
  productsInCartParamethers: [],
  addProduct: (product) => 
    set((state) => ({
        productsInCartParamethers: [...state.productsInCartParamethers, product],
    })),
    removeProduct: (id) => set((state) => ({
      productsInCartParamethers: state.productsInCartParamethers.filter(product => product.id != id)
    }))
}),{name:'UserCartStore', version: 1}));
