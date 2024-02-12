'use client'
import Title from "@/src/components/ui/title/title"
import { useProductStore } from "@/src/stores/Product.store"
import { useUserCartStore } from "@/src/stores/UserCart.stores"
import styles from './cart.module.scss'
import EmptyCart from "@/src/components/blocks/emptyCart/emptyCart"
import NotEmptyCart from "@/src/components/blocks/notEmptyCart/notEmptyCart"

const Cart = () => {
    const usersCart = useUserCartStore(state => state.productsInCartParamethers)
    const products = useProductStore(state => state.products)
    return <div className={styles.pageWrapper}>
        <Title className={styles.title} level={1}>Моя Корзина</Title>
        {products.length && usersCart.length ?
            <NotEmptyCart />
            : <EmptyCart />
        }
    </div>
}

export default Cart