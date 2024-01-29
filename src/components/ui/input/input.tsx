import { FC, HTMLInputTypeAttribute } from 'react'
import styles from './input.module.scss'

type TypeProps = {
    type: HTMLInputTypeAttribute,
    name: string,
    placeholder?: string,
    className?: string
}

const Input: FC<TypeProps> = ({ type, name, placeholder, className }) => {
    return <input className={`${className} ${styles.input}`} type={type} name={name} placeholder={placeholder}></input>
}

export default Input