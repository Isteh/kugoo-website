import { FC } from 'react'
import RatingCard from '../../ui/ratingCard/ratingCard'
import styles from './promo.module.scss'
import Banner from '../banner/banner'


type TypeProps = {
    className?: string
}

const featureList = [
    {
        name: 'Гарантия 1 год',
        text: 'на весь ассортимент',
    },
    {
        name: 'рассрочка',
        text: 'от 6 месяцев',
    }, {
        name: 'Подарки',
        text: 'и бонусам к покупкам ',
    },
]
const Item: FC<{ num: number }> = ({ num }) => {
    return <>
        <span>item {num}</span>
    </>
}


const Promo: FC<TypeProps> = ({ className }) => {

    return <div>
        <Banner className={styles.banner} items={[<Item num={1} key={1} />, <Item key={2} num={2} />]}></Banner>
        <div className={styles.additionalInfo}>
            <ul className={styles.featuresList}>
                {featureList.map((item, index) =>
                    <li key={index}>
                        <span className={styles.featureName}>{item.name}</span>
                        <span className={styles.featureText}>{item.text}</span>
                    </li>
                )}
            </ul>

            <RatingCard className={styles.ratingCard} source='Яндекс' rate='4,9' />
        </div>

    </div>
}

export default Promo