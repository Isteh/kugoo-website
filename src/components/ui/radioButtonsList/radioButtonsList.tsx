'use client'
import { FC, PropsWithChildren, useState } from 'react'
import styles from './radioButtonsList.module.scss'
import Title from '../title/title'
import Circle from '../circle/circle'

type TypeProps = {
    className?: string,
    nameSection: string,
    items: {
        name: string,
        value: number | string,
        discount?: number,
    }[],
    withPrice: boolean,
    isChoosingColors: boolean
}


const RadioButtonsList: FC<PropsWithChildren<TypeProps>> = ({ className, nameSection, items, withPrice, isChoosingColors}) => {
    const [activeButton, setActiveButton] = useState(items[0].value)

    return items.length && <ul className={`${styles.list} ${className}`}>
        {items.map((item, index) => <li key={index}>
            <label className={styles.label}>
                <input type='radio' 
                className={styles.button} 
                name={nameSection} 
                value={item.value} 
                {...activeButton == item.value ? {checked: true} : {checked:false}}
                onChange={(e) => {setActiveButton(e.target.value)}} />
                {isChoosingColors && <Circle color={item.value.toString()}/>}
                {item.name}
                {withPrice && <span className={styles.subtext}>
                    {item.value === 0 ?
                    'Бесплатно'
                    :
                    `${item.value} руб.`}
                    {item.discount && item.discount > 0 && ` -(${item.discount}%)`}
                    </span>}
            </label>
        </li>)}
    </ul>
}

export default RadioButtonsList