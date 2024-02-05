import { FC } from 'react'
import styles from './istallments.module.scss'

const Installments: FC<{ price: number }> = ({ price }) => {
    return <div className={styles.installments}>
        Рассрочка:
        <strong className={styles.price}> {Math.round(price / 24)} ₽ в месяц / 24 месяца</strong>
    </div>
}

export default Installments