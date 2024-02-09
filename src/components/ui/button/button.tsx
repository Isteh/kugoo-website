import { CSSProperties, FC, MouseEventHandler, PropsWithChildren } from 'react'
import styles from './button.module.scss'

type TypeProps = {
    className?: string,
    style?: CSSProperties,
    type?: 'button' | 'submit' | 'reset',
    onClick?: MouseEventHandler<HTMLButtonElement>,
}

const Button: FC<PropsWithChildren<TypeProps>> = ({ className, style, type, children, onClick }) => {
    return <button style={style} className={`${styles.button} ${className}`} type={type ? type : 'button'} onClick={onClick}>{children}</button>
}

export default Button