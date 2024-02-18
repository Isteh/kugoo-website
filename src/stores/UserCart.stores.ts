import { create } from 'zustand';
import { IUserCartState } from '../interfaces/UserCartState.interface';
import { persist } from 'zustand/middleware';
import { checkDublicate } from '../utils/checkDublicate/checkDublicate';

export const useUserCartStore =
  create<IUserCartState>()(
    persist(
      (set) => ({
        productsInCartParamethers: [],
        addProduct: (newProduct) =>
          set((state) => ({
            productsInCartParamethers:
              checkDublicate(
                state.productsInCartParamethers,
                newProduct
              ),
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
        ) => {
          if (
            property === 'quantity' &&
            value === 0
          )
            return set((state) => ({
              productsInCartParamethers:
                state.productsInCartParamethers.filter(
                  (product) => product.id != id
                ),
            }));
          return set((state) => ({
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
                      if (
                        property === 'quantity'
                      ) {
                        if (changedValue === 0) {
                        }
                        changedPrice =
                          (changedPrice /
                            product.quantity) *
                          Number(changedValue);
                      } else {
                        changedValue =
                          Number(changedValue);
                        changedPrice =
                          changedPrice -
                          product.quantity *
                            Number(
                              product[
                                property as keyof typeof product
                              ]
                            ) +
                          product.quantity *
                            Number(changedValue);
                      }
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
          }));
        },
      }),
      { name: 'UserCartStore', version: 1 }
    )
  );
