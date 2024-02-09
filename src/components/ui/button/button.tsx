import { CSSProperties, FC, MouseEventHandler, PropsWithChildren } from 'react'
import styles from './button.module.scss'
import Link from 'next/link'

type TypeProps = {
    className?: string,
    style?: CSSProperties,
    type?: 'button' | 'submit' | 'reset' | 'link',
    href?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    isTransparant?: boolean,
    invertColors?: boolean
}

const Button: FC<PropsWithChildren<TypeProps>> = ({ className, href, style, type, children, onClick, isTransparant, invertColors }) => {
    const endClassName = `${styles.button} ${className} ${isTransparant ? styles.transparant : ''} ${invertColors ? styles.invertColors : ''}`
    return type === 'link' ?
        <Link style={style} className={endClassName} {...href ? { href: href } : { href: '' }}>{children}</Link>
        :
        <button style={style} className={endClassName} type={type ? type : 'button'} onClick={onClick}>{children}</button>
}

export default Button