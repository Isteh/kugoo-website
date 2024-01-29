'use client'
import { FC, useState } from 'react'
import styles from './checkboxButton.module.scss'

type TypeProps = {
    item:{
        name:string,
        value: string
    },
    className?: string,
    nameSection: string,
    isChecked: boolean
}

const CheckboxButton: FC<TypeProps> = ({className,item,nameSection, isChecked}) => {
    const [checked, setChecked] = useState(isChecked);
    return <label className={`${styles.label} ${className}`}>
        <input type='checkbox'
            className={styles.button}
            name={nameSection}
            value={item.value}
            checked={checked}
            onChange={(e) => setChecked(!checked)} />
        {item.name}
    </label>
}

export default CheckboxButton