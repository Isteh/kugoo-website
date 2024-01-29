'use client'

import Button from "@/src/components/ui/button/button"
import Price from "@/src/components/ui/price/price"
import Title from "@/src/components/ui/title/title"
import { useProductStore } from "@/src/stores/Product.store"
import { useUserCartStore } from "@/src/stores/UserCart.stores"
import DeleteIcon from "@/public/trash_delete.svg"
import Image from "next/image"

const Cart = () => {
    const usersCart = useUserCartStore(state => state.productsInCartParamethers)
    const removeUserCardElement = useUserCartStore(state => state.removeProduct)
    const products = useProductStore(state => state.products)
    return <>
    <Title level={1}>Моя Корзина</Title>
    {products.length && usersCart.length ? 
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
            Сумма: <Price actualPrice={usersCart.reduce((prev, item) => prev + item.fullPrice, 0)} />
        </span>
        <Button >Оформить заказ</Button>
    </footer>
</div>
    :
    <>Корзина пуста</>}
    </>
}

export default Cart