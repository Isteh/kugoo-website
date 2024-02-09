import { IProduct } from '../interfaces/product.interface';

class ProductsService {
  private URL =
    'https://kmll64isusjhkp56.public.blob.vercel-storage.com/db-3qNUIysDnh0yEQ7WlPPzPMaOwHAShK.json';

  async getAll() {
    return fetch(this.URL)
      .then((response) => response.json())
      .then<IProduct[]>((data) => data.products);
  }

  async getById(id: number | string) {
    return fetch(this.URL)
      .then((response) => response.json())
      .then<IProduct>(
        (data) => data.products[id]
      );
  }
}

export default new ProductsService();
