import { FC } from 'react'
import styles from './select.module.scss'
type TypeProps = {
    options: {
        value: number | string,
        name: string,
    }[],
    name: string,
    title?: string,
    defaultOption?: number | string,
    styleTheme: 'main' | 'additional'
}

const Select: FC<TypeProps> = ({ options, name, title, defaultOption, styleTheme }) => {
    return <label className={`${styles.label} ${styles[`${styleTheme}Text`]}`}>
        {title}
        <select
            className={`${styles.select} ${styles[`${styleTheme}Icon`]}`} name={name}
            defaultValue={defaultOption}>
            {options.map((option, index) => <option key={index} value={option.value} >
                {option.name}
            </option>)}
        </select>
    </label>
}

export default Select