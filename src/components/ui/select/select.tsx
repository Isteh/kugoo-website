import { FC } from 'react'
import styles from './select.module.scss'
type TypeProps = {
    options: {
        value: string,
        title: string ,
    }[],
    name: string,
}

const Select: FC<TypeProps> = ({ options, name }) => {
    return <select className={styles.select} name={name}>{options.map((option, index) => <option key={index} value={option.value}>{option.title}</option>)}</select>
}

export default Select