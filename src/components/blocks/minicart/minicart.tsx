'use client'
import { Popover } from 'antd'
import { FC } from 'react'
import CartIcon from '@/public/shopping-cart.svg'
import { useUserCartStore } from '@/src/stores/UserCart.stores'
import Link from 'next/link'
import { useProductStore } from '@/src/stores/Product.store'
import Image from 'next/image'

import Price from '../../ui/price/price'
import Button from '../../ui/button/button'
import Title from '../../ui/title/title'
import styles from './minicart.module.scss'
import MinicartItem from '../minicartItem/minicartItem'

const Minicart: FC = () => {
    const usersCart = useUserCartStore(state => state.productsInCartParamethers)
    return usersCart.length ?
        <Popover placement="bottomRight" content={
            <div className={styles.popover}>
                <header className={styles.header}>
                    <Title level={3} className={styles.title}>
                        В вашей корзине
                    </Title>
                    <span className={styles.additionalText}>
                        {usersCart.length}
                        {usersCart.length === 1 ?
                            ' товар'
                            :
                            usersCart.length > 1 && usersCart.length < 5 ?
                                ' товара'
                                :
                                ' товаров'
                        }
                    </span>
                </header>
                <ol className={styles.cartList}>
                    {usersCart.map(item => <li key={item.id}>
                        <MinicartItem item={item} />
                    </li>)}
                </ol>
                <footer className={styles.footer}>
                    <span className={styles.price}>
                        <span className={styles.additionalText}> Сумма: </span> <Price size='normal' actualPrice={usersCart.reduce((prev, item) => prev + item.fullPrice, 0)} />
                    </span>
                    <Button style={{ fontSize: 12 }}>Оформить заказ</Button>
                </footer>
            </div>
        }>
            <Link className={styles.cartLink} href='/catalog/cart'>
                <CartIcon />
                <span className={styles.quantityItemInCart}>{usersCart.length}</span>
                Корзина
            </Link>
        </Popover>
        : <Link className={styles.cartLink} href='/catalog/cart'>
            <CartIcon />Корзина
        </Link>
}

export default Minicart