'use client'
import ProductForm from "@/src/components/blocks/productForm/productForm";
import { useProductStore } from "@/src/stores/Product.store";
import styles from "./page.module.scss"
import GalleryWithTumbs from "@/src/components/ui/galleryWithTumbs/galleryWithTumbs";
import { useEffect } from "react";
import ProductMarker from "@/src/components/ui/productMarker/productMarker";

export default function Page({ params }: { params: { products: string } }) {
  const product = useProductStore(state => state.products[params.products.length - 1])
  let imgs: string[] = []

  if (product) {
    product.additionalImgs ?
      imgs.splice(0, Infinity, product.mainImg, ...product.additionalImgs)
      :
      imgs = imgs.splice(0, Infinity, product.mainImg)
  }

  return product && (
    <>

      <div className={styles.twoColumnWrapper}>
        {(product.isBestseller) ?
          <ProductMarker className={styles.marker} type='bestSeller' />
          :
          product.isNew && <ProductMarker className={styles.marker} type='new' />}
        <GalleryWithTumbs imgs={imgs} />
        <ProductForm product={product}>
        </ProductForm>
      </div>
    </>
  );
}