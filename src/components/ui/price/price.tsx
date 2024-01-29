import { FC } from 'react'
import styles from './price.module.scss'

type TypeProps = {
    className?: string,
    actualPrice: string | number,
    oldPrice?: string | number
}

const price: FC<TypeProps> = ({ className, actualPrice, oldPrice }) => {
    return <div className={`${styles.container} ${className}`}>
        <s className={styles.oldPrice}>{oldPrice} ₽</s>
        <strong className={styles.actualPrice}>{actualPrice} ₽</strong>
    </div>
}

export default price