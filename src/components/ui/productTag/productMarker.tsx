import { FC } from 'react'
import styles from './productMarker.module.scss'

type TypeProps = {
    className?: string,
    type: 'bestSeller' | 'new'
}

const ProductMarker: FC<TypeProps> = ({ className, type }) => {
    return <span className={`${styles.marker} ${type === 'bestSeller' ? styles.bestSeller : styles.new} ${className} `}>
        {type === 'bestSeller' ? 'Хит' : 'Новинка'}
    </span>
}

export default ProductMarker