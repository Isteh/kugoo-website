import { FC } from 'react'
import StarIcon from '@/public/star.svg'
import YandexIcon from '@/public/yandex_glyph.svg'
import styles from './ratingCard.module.scss'

type TypeProps = {
    className?: string,
    source: 'Яндекс',
    rate:  string
}

const RatingCard: FC<TypeProps> = ({ className, source, rate
}) => {
    return <div className={`${styles.card} ${className}`}>
       {source === 'Яндекс' && <div className={styles.yandex}><YandexIcon /></div>}
        <div className={styles.textWrapper}>
            <span>{source} отзывы</span>
            <span className={styles.rate}><StarIcon /> {rate}</span>
        </div>
    </div>
}

export default RatingCard