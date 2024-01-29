import { useQuery } from '@tanstack/react-query';
import productService from '../services/product.service';

export const useProduct = (id: number | string) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => productService.getById(id),
  });
};
