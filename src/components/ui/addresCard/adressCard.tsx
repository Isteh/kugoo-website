import { FC } from 'react'
import PhoneNumber from '../phoneNumber/phoneNumber'
import style from './adressCard.module.scss'

type TypeProps = {
    item: {city: string
    adress: string,
    tel: string},
    className?: string
}

const AdressCard: FC<TypeProps> = ({item: {city, adress, tel}, className }) => {
    return <div className={`${style.card} ${className}`}>
        <span className={style.title}>{city}<br />{adress}</span>
        <PhoneNumber className={style.phone} tel={tel} />
    </div>
}

export default AdressCard