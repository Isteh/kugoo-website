'use client'
import ProductForm from "@/src/components/blocks/productForm/productForm";
import { useProductStore } from "@/src/stores/Product.store";
import styles from "./page.module.scss"

export default function Page({ params }: { params: { products: string } }) {

  return (
    <>
      <div className={styles.twoColumnWrapper}>
        <div>1</div>
        <ProductForm product={useProductStore(state => state.products[params.products.length - 1])}>
        </ProductForm>
      </div>
    </>
  );
}