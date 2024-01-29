import { IProduct } from '@/src/interfaces/product.interface'
import { FC, memo, useEffect, useMemo } from 'react'
import Title from '../../ui/title/title'
import BalanceIcon from '@/public/balance.svg'
import ShareIcon from '@/public/share.svg'
import { QuestionCircleOutlined } from '@ant-design/icons'
import RadioButtonsList from '../../ui/radioButtonsList/radioButtonsList'
import Button from '../../ui/button/button'
import { useUserCartStore } from '@/src/stores/UserCart.stores'
import { getDataForCart } from '@/src/utils/getDataForCart/getDataForCart'

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

    return product ? <form name='product-form' onSubmit={e => {
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
    }}>
        <Title level={1}>{product.name}</Title>
        <input type='hidden' name='id' value={product.id} readOnly />
        <div>
            <span>Просмотров {product.watchCount}</span>
            <span>Купили {product.buyCount} раз</span>
            <span>Артикул {product.vendorCode}</span>
        </div>
        <div>
            <label>
                <input type='hidden' name='avaliable' checked={product.avaliable} readOnly />
                В наличии
            </label>
            <button><BalanceIcon /> Сравнить</button>
            <button><ShareIcon /> Поделиться</button>

            <Title level={3}>Комплектация <QuestionCircleOutlined /></Title>
            <RadioButtonsList isChoosingColors={false} withPrice={false} items={complectationList} nameSection='complectation' />


            <Title level={3}>Гарантия </Title>
            <RadioButtonsList isChoosingColors={false} withPrice={true} items={guaranteeList} nameSection='guarantee' />
            <Title level={3}>Дополнительные услуги</Title>
            <RadioButtonsList isChoosingColors={false} withPrice={true} items={additionalServicesList} nameSection='additionalServices' />
            <Title level={3}>Подарочная упаковка </Title>
            <RadioButtonsList isChoosingColors={true} withPrice={false} items={colorList} nameSection='colorWrapper' />

            <Button type='submit' >Добавить в корзину</Button>
        </div>
    </form>
        :
        <div></div>
}

export default ProductForm