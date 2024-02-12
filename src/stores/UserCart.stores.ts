import { create } from 'zustand';
import { IUserCartState } from '../interfaces/UserCartState.interface';
import { persist } from 'zustand/middleware';

export const useUserCartStore =
  create<IUserCartState>()(
    persist(
      (set) => ({
        productsInCartParamethers: [],
        addProduct: (product) =>
          set((state) => ({
            productsInCartParamethers: [
              ...state.productsInCartParamethers,
              product,
            ],
          })),
        removeProduct: (id) =>
          set((state) => ({
            productsInCartParamethers:
              state.productsInCartParamethers.filter(
                (product) => product.id != id
              ),
          })),
        setProppertyOfProduct: (
          id,
          property,
          value
        ) =>
          set((state) => ({
            productsInCartParamethers:
              state.productsInCartParamethers.map(
                (product) => {
                  if (product.id === id) {
                    let changedPrice =
                      product.fullPrice;
                    if (!isNaN(Number(value)))
                      changedPrice =
                        changedPrice -
                        Number(
                          product[
                            property as keyof typeof product
                          ]
                        ) +
                        Number(value);
                    return {
                      ...product,
                      [property]: value,
                      fullPrice: changedPrice,
                    };
                  }
                  return product;
                }
              ),
          })),
      }),
      { name: 'UserCartStore', version: 1 }
    )
  );
