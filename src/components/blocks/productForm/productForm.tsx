import { IProduct } from '@/src/interfaces/product.interface'
import { FC, FormEvent, FormEventHandler, memo, useCallback, useEffect, useMemo } from 'react'
import Title from '../../ui/title/title'
import BalanceIcon from '@/public/balance.svg'
import ShareIcon from '@/public/share.svg'
import { QuestionCircleOutlined } from '@ant-design/icons'
import RadioButtonsList from '../../ui/radioButtonsList/radioButtonsList'
import Button from '../../ui/button/button'
import { useUserCartStore } from '@/src/stores/UserCart.stores'
import { getDataForCart } from '@/src/utils/getDataForCart/getDataForCart'
import styles from './productForm.module.scss'
import Price from '../../ui/price/price'
import Installments from '../installments/installments'

type TypeProps = {
    product: IProduct,
    className?: string
}

const complectationList = [
    {
        name: 'Базовая',
        value: 0
    }
]
const guaranteeList = [
    {
        name: 'Стандартная 1 год',
        value: 0
    }
]
const additionalServicesList = [
    {
        name: 'Нет',
        value: 0
    }
]
const colorList = [
    {
        name: 'Без упаковки',
        value: 0,

    },
    {
        name: 'Розовый',
        value: 'pink',

    },
    {
        name: 'Синий',
        value: 'blue',

    },
    {
        name: 'Красный',
        value: 'red',

    }
]



const ProductForm: FC<TypeProps> = ({ className, product }) => {
    const addUserCart = useUserCartStore(state => state.addProduct)
    const usersCart = useUserCartStore(state => state.productsInCartParamethers)
    if (product) {
        product.complectation && complectationList.splice(1, Infinity, ...product.complectation);
        product.guarantee && guaranteeList.splice(1, Infinity, ...product.guarantee)
        product.additionalServices && additionalServicesList.splice(1, Infinity, ...product.additionalServices)
    }

    const formSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        addUserCart(getDataForCart(Math.random() * (4564786 - -254673) + 4564786,
            Number(formData.get('id')),
            product.price.actual,
            Number(formData.get('complectation')),
            Number(formData.get('guarantee')),
            Number(formData.get('additionalServices')),
            formData.get('colorWrapper')?.toString()))
        alert(`${product.name} успешно добавлен в корзину`)
    }

    return product ? <form name='product-form' onSubmit={formSubmitHandler}>
        <Title className={styles.title} level={1}>{product.name}</Title>
        <input type='hidden' name='id' value={product.id} readOnly />
        <div className={styles.countersInfo}>
            <span>Просмотров {product.watchCount}</span>
            <span>Купили {product.buyCount} раз</span>
            <span>Артикул {product.vendorCode}</span>
        </div>

        <div className={styles.avaliableAndButtons}>
            <label className={styles.avaliable}>
                <input type='hidden' name='avaliable' checked={product.avaliable} readOnly />
                В наличии
            </label>
            <button className={styles.iconButton}><BalanceIcon className={styles.icon} /> Сравнить</button>
            <button className={styles.iconButton}><ShareIcon className={styles.icon} /> Поделиться</button>
        </div>

        <div className={styles.priceContainer}>
            <Price size='big' actualPrice={product.price.actual} {...product.price.old && { oldPrice: product.price.old }}></Price>
            <Installments price={product.price.actual}></Installments>
        </div>

        <Title className={styles.titleRadioButton} level={3}>Комплектация <QuestionCircleOutlined /></Title>
        <RadioButtonsList className={styles.radioButtonsList} isChoosingColors={false} withPrice={false} items={complectationList} nameSection='complectation' />


        <Title className={styles.titleRadioButton} level={3}>Гарантия </Title>
        <RadioButtonsList className={styles.radioButtonsList} isChoosingColors={false} withPrice={true} items={guaranteeList} nameSection='guarantee' />

        <Title className={styles.titleRadioButton} level={3}>Дополнительные услуги</Title>
        <RadioButtonsList className={styles.radioButtonsList} isChoosingColors={false} withPrice={true} items={additionalServicesList} nameSection='additionalServices' />

        <Title className={styles.titleRadioButton} level={3}>Подарочная упаковка </Title>
        <RadioButtonsList className={styles.radioButtonsList} isChoosingColors={true} withPrice={false} items={colorList} nameSection='colorWrapper' />

        <Button type='submit' >Добавить в корзину</Button>

    </form >
        :
        <div></div>
}

export default ProductForm