'use client'
import ProductForm from "@/src/components/blocks/productForm/productForm";
import { useProductStore } from "@/src/stores/Product.store";

export default function Page({ params }: { params: { products: string } }) {

  return (
    <>
      <ProductForm product={useProductStore(state => state.products[params.products.length - 1])}>
      </ProductForm>
    </>
  );
}