import { FC, MouseEventHandler, PropsWithChildren } from 'react'
import styles from './button.module.scss'

type TypeProps = {
    className?: string,
    type?: 'button' | 'submit' | 'reset',
    onClick?: MouseEventHandler<HTMLButtonElement>,
}

const Button: FC<PropsWithChildren<TypeProps>> = ({ className, type, children, onClick }) => {
    return <button className={`${styles.button} ${className}`} type={type ? type : 'button'} onClick={onClick}>{children}</button>
}

export default Button