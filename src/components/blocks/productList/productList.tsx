'use client'
import { FC } from 'react'
import Title from '../../ui/title/title'
import styles from './productList.module.scss'
import ProductCard from '../../ui/productCard/productCard'
import { useProductStore } from '@/src/stores/Product.store'
import CheckboxButton from '../../ui/checboxButton/checkboxButton'
import { useProduct } from '@/src/hooks/useProduct'


type TypeProps = {
    className?: string,

}

const categories = [
    {
        name: 'Хиты продаж',
        value: 'bestSellers',
    },
    {
        name: 'Для города',
        value: 'forCities',
    },
    {
        name: 'Для взрослых',
        value: 'forAdults',
    },
    {
        name: 'Для детей',
        value: 'forChildren',
    },
]

const ProductList: FC<TypeProps> = ({ className }) => {
    const products = useProductStore(state => state.products)
    
    return <section className={`${styles.section} ${className}`}>
        <header className={styles.topPanel}>
            <Title className={styles.title} level={2}> Электросамокаты </Title>
            
            <ul className={styles.buttonsList}>
                {categories.map((item, index) => <li key={index}>
                <CheckboxButton item={item} nameSection='categories' isChecked={false}
                {... index === 0 && {isChecked: true}}/>
                </li>)}
            </ul>
        </header>
        {products && products.length ?
            <ol className={styles.list}>
                {products.map((item, index) =>
                    index < 8 && <li key={index}>
                        <ProductCard product={item} />
                    </li>
                )}
            </ol>
            :
            <span className={styles.errMessage}>
                Товары не найдены
            </span>
        }
    </section>
}

export default ProductList