import { FC, useCallback, useEffect, useState } from 'react'
import Title from '../../ui/title/title'
import styles from './promotion.module.scss'

const getTime = (time: number) =>
    [(time / 3600).toFixed(), Math.floor(time / 60), time % 60].join(':')

const Promotion: FC<{ className: string }> = ({ className }) => {
    const [time, setTime] = useState(3600);


    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(sec => sec - 1)
        }, 1000)
        return () => { clearInterval(timerID) }
    }, [])
    return <div className={`${styles.promotion} ${className}`}>
        <div className={styles.topPanel}>
            <Title className={styles.title} level={3}>2 подарка при покупке</Title>
            <span className={styles.timeLabel}>До конца акции <time className={styles.time} dateTime={getTime(time)}>{getTime(time)}</time></span>
        </div>
        <ul className={styles.promotionList}>
            <li className={styles.promotionItem}>
                Книга «6 вопросов об электротранспорте, на которые вы должны знать ответ».
            </li>
            <li className={styles.promotionItem}>
                Универсальный держатель
                для телефона
            </li>
        </ul></div>
}

export default Promotion