'use client'
import { useProducts } from '@/src/hooks/useProducts'
import { useProductStore } from '@/src/stores/Product.store'
import { memo, useEffect } from 'react'

const FetchProductsInStore = () => {
    const setProducts = useProductStore(state => state.setProducts)
    const { data } = useProducts();
    useEffect(() => {
        data && setProducts(data)
    }
        , [data])


    return <></>
}

export default FetchProductsInStore