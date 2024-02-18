import { IProduct } from '@/src/interfaces/product.interface'
import { IProductsInCartParamethers } from '@/src/interfaces/productsInCartParamethers.interface'
import DeleteIcon from "@/public/trash_delete.svg"
import Image from 'next/image'
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react'
import Title from '../../ui/title/title'
import styles from './cartItem.module.scss'
import Price from '../../ui/price/price'
import { useUserCartStore } from '@/src/stores/UserCart.stores'
import { getServicesList } from '@/src/utils/listsProductServices/listProductSrvices'
import Select from '../../ui/select/select'
import Link from 'next/link'

type TypeProps = {
    userCartItem: IProductsInCartParamethers,
    products: IProduct[],
}

const CartItem: FC<TypeProps> = ({ userCartItem, products }) => {
    const removeUserCardElement = useUserCartStore(state => state.removeProduct)
    const changePropetyUserCardElement = useUserCartStore(state => state.setProppertyOfProduct)
    const product = products[userCartItem.idProduct]
    const [quantity, setQuantity] = useState(0)

    const colorList = getServicesList('color')
    const complectationList = getServicesList('complectation', product.complectation)
    const guaranteeList = getServicesList('guarantee', product.guarantee)
    const additionalServicesList = getServicesList('additionalServices', product.additionalServices)

    const formChangeHandler: ChangeEventHandler<HTMLFormElement> = (e) => {
        const value = new FormData(e.currentTarget).get(e.target.name)?.toString();
        if (value) changePropetyUserCardElement(Number(e.currentTarget.id), e.target.name, value)
    }

    return <>
        <tr className={styles.firstRow}>
            <td >
                <Link href={`/catalog/${product.type}/${product.id}`}
                    className={styles.link}>
                    <Image src={product.mainImg} width={75} height={75} alt={`Картинка для ${product.name}`} />
                    <div>
                        <Title className={styles.title} level={3}>{product.name}</Title>
                        <div className={styles.subInfo}>
                            <label className={styles.avaliable}>
                                <input type='hidden' name='avaliable' checked={product.avaliable} readOnly />
                                В наличии
                            </label>
                            <span className={styles.gift}> +2 подарка</span>
                        </div>
                    </div>
                </Link>
            </td>
            <td><div className={styles.quantityContainer}>
                <button onClick={() => { changePropetyUserCardElement(userCartItem.id, 'quantity', userCartItem.quantity + 1) }}>+</button>
                <span className={styles.quantity}>{userCartItem.quantity}</span>
                <button onClick={() => { changePropetyUserCardElement(userCartItem.id, 'quantity', userCartItem.quantity - 1) }}>-</button></div></td>
            <td><Price size='normal' actualPrice={userCartItem.fullPrice} /></td>
            <td><button className={styles.button} onClick={() => removeUserCardElement(userCartItem.id)}><DeleteIcon></DeleteIcon></button></td>
        </tr>
        <tr className={styles.lastRow}>
            <td colSpan={4} className={styles.listsWrapper}>
                <form id={userCartItem.id.toString()} className={styles.form}
                    onChange={formChangeHandler}
                >
                    <Select title='Комплектация' name='complectation' options={complectationList} styleTheme='additional' defaultOption={userCartItem.complectation} />
                    <Select title='Гарантия' name='guarantee' options={guaranteeList} styleTheme='additional' defaultOption={userCartItem.guarantee} />
                    <Select title='Доп.услуги' name='additionalServices' options={additionalServicesList} styleTheme='additional' defaultOption={userCartItem.additionalServices} />
                    <Select title='Подарочная упаковка' name='colorWrapper' options={colorList} styleTheme='additional' defaultOption={userCartItem.colorWrapper} />
                </form>
            </td>
        </tr>
    </>
}

export default CartItem