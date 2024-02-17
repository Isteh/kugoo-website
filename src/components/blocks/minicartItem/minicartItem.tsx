import { useProductStore } from '@/src/stores/Product.store'
import { useUserCartStore } from '@/src/stores/UserCart.stores'
import Image from 'next/image'
import { FC } from 'react'
import DeleteIcon from "@/public/trash_delete.svg"
import { IProductsInCartParamethers } from '@/src/interfaces/productsInCartParamethers.interface'
import Link from 'next/link'
import styles from './minicartItem.module.scss'
import Title from '../../ui/title/title'

const MinicartItem: FC<{ item: IProductsInCartParamethers }> = ({ item }) => {
    const removeUserCardElement = useUserCartStore(state => state.removeProduct)
    const product = useProductStore(state => state.products[item.idProduct])

    return product &&
        <div className={styles.card}>
            <Link className={styles.link}
                href={`/catalog/${product.type}/${product.id}`}>
                <Image className={styles.img} src={product.mainImg}
                    alt={`Картинка для ${product.name}`}
                    width={50}
                    height={50} />

                <div className={styles.text}>
                    <Title level={4} className={styles.title}>
                        {product.name}
                    </Title>
                    <span className={styles.priceAndQuantity}>
                        <span className={styles.price}>
                            {item.fullPrice} ₽
                        </span>
                        <span>1 шт.</span>
                    </span>
                </div>
            </Link>
            <button className={styles.button} onClick={() => removeUserCardElement(item.id)}>
                <DeleteIcon /></button>
        </div>
}

export default MinicartItem