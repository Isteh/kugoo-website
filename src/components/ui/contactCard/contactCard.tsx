import { FC, PropsWithChildren } from 'react'
import PhoneNumber from '../phoneNumber/phoneNumber'
import style from './contactCard.module.scss'

type TypeProps = {
    className?: string,
    item: {
        tel: string,
        time: {
            daysOfWeek: string,
            timeStart: string,
            timeEnd: string
        }, 
        title: string,
    }
}

const ContactCard: FC<TypeProps> = ({ item: {title, time, tel}, className }) => {
    return <div className={`${style.card} ${className}`}>
        <span className={style.title}>{title}</span>
        <PhoneNumber tel={tel} />
        <span className={style.text}>{time.daysOfWeek}
            <time dateTime={time.timeStart}>{time.timeStart}</time> -
            <time dateTime={time.timeStart}>{time.timeEnd}</time>
        </span>
    </div>
}

export default ContactCard