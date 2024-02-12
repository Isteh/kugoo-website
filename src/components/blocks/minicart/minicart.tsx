'use client'
import { Popover } from 'antd'
import { FC } from 'react'
import CartIcon from '@/public/shopping-cart.svg'
import { useUserCartStore } from '@/src/stores/UserCart.stores'
import Link from 'next/link'
import { useProductStore } from '@/src/stores/Product.store'
import Image from 'next/image'
import DeleteIcon from "@/public/trash_delete.svg"
import Price from '../../ui/price/price'
import Button from '../../ui/button/button'

const Minicart: FC = () => {
    const usersCart = useUserCartStore(state => state.productsInCartParamethers)
    const removeUserCardElement = useUserCartStore(state => state.removeProduct)
    const products = useProductStore(state => state.products)
    return products.length && usersCart.length ?
        <Popover placement="bottomRight" content={
            <div>
                <header>В вашей корзине
                    <span>{usersCart.length}
                        {usersCart.length === 1 ?
                            'товар'
                            :
                            usersCart.length > 1 && usersCart.length < 5 ?
                                'товара'
                                :
                                'товаров'
                        }</span></header>
                <ol>
                    {usersCart.map(item => <li key={item.id}>
                        <Image src={products[item.idProduct].mainImg}
                            alt={`Картинка для ${products[item.idProduct].name}`}
                            width={50}
                            height={50} />
                        <span>{products[item.idProduct].name}
                            <span>{item.fullPrice} ₽<span>1 шт.</span></span>
                        </span>

                        <button onClick={() => removeUserCardElement(item.id)}><DeleteIcon></DeleteIcon></button>
                    </li>)}
                </ol>
                <footer>
                    <span>
                        Сумма: <Price size='normal' actualPrice={usersCart.reduce((prev, item) => prev + item.fullPrice, 0)} />
                    </span>
                    <Button >Оформить заказ</Button>
                </footer>
            </div>
        }>
            <Link href='/catalog/cart'>
                <CartIcon /> <span>{usersCart.length}</span>Корзина
            </Link>
        </Popover>
        : <Link href='/catalog/cart'>
            <CartIcon />Корзина
        </Link>
}

export default Minicart