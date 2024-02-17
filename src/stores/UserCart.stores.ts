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
                    let changedValue:
                      | string
                      | number = value;
                    if (
                      !isNaN(Number(changedValue))
                    ) {
                      changedValue =
                        Number(changedValue);
                      changedPrice =
                        changedPrice -
                        Number(
                          product[
                            property as keyof typeof product
                          ]
                        ) +
                        Number(changedValue);
                    }
                    return {
                      ...product,
                      [property]: changedValue,
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
