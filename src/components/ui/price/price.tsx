import { FC } from 'react'
import styles from './price.module.scss'

type TypeProps = {
    className?: string,
    actualPrice: string | number,
    oldPrice?: string | number,
    size: 'normal' | 'big'
}

const Price: FC<TypeProps> = ({ className, actualPrice, oldPrice, size }) => {

    return <div className={`${styles.container} ${className}`}>
        <s className={styles.oldPrice}>{oldPrice} ₽</s>
        <strong className={`${styles.actualPrice} ${styles[size]}`}>{actualPrice} ₽</strong>
    </div>
}

export default Price