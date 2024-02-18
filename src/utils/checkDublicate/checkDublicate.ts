import { IProductsInCartParamethers } from '@/src/interfaces/productsInCartParamethers.interface';
import { isDeepEqual } from '../isDeepEqual/isDeepEqual';

export const checkDublicate = (
  products: IProductsInCartParamethers[],
  newProduct: IProductsInCartParamethers
): IProductsInCartParamethers[] => {
  let isAdded = false;
  products.map((item) => {
    if (
      isDeepEqual(
        newProduct,
        item,
        'quantity',
        'id',
        'fullPrice'
      )
    ) {
      item.fullPrice =
        (item.fullPrice / item.quantity) *
        (item.quantity + 1);
      item.quantity += 1;
      isAdded = true;
    }
  });
  if (isAdded) return products;
  return [...products, newProduct];
};
