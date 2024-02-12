import { useProductStore } from '@/src/stores/Product.store'
import { useUserCartStore } from '@/src/stores/UserCart.stores'
import { FC } from 'react'
import Button from '../../ui/button/button'
import CartItem from '../cartItem/cartItem'
import styles from './notEmptyCart.module.scss'
import Price from '../../ui/price/price'

const NotEmptyCart: FC = () => {
    const usersCart = useUserCartStore(state => state.productsInCartParamethers)
    const products = useProductStore(state => state.products)

    return <>
        <span className={styles.quantity}>{usersCart.length}
            {usersCart.length === 1 ?
                ' товар'
                :
                usersCart.length > 1 && usersCart.length < 5 ?
                    ' товара'
                    :
                    ' товаров'
            }</span>
        <div className={styles.twoColumnWrapper}>
            <table className={styles.table}>
                <thead >
                    <tr className={styles.headRow}>
                        <th>Товар</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {usersCart.map((item) => <CartItem key={item.id} userCartItem={item} products={products} />)}
                </tbody>
            </table>

            <aside className={styles.buyBlock}>
                <span className={styles.text}>Итого <span className={styles.subtext}>(без учета доставки)</span></span>
                <Price className={styles.price} size='big' actualPrice={usersCart.reduce((prev, item) => prev += item.fullPrice, 0)}></Price>
                <Button style={{ marginBottom: 20, width: '100%' }}>Оформить заказ</Button>
            </aside>
        </div>
    </>
}

export default NotEmptyCart