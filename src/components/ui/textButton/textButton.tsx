import { FC, MouseEventHandler, PropsWithChildren } from 'react'
import styles from './textButton.module.scss'

type TypeProps = {
    className?: string,
    type?: 'button' | 'submit' | 'reset',
    onClick?: MouseEventHandler,
    isHref?: boolean,
    href?: string
}

const TextButton: FC<PropsWithChildren<TypeProps>> = ({ className, type, children, onClick, isHref, href }) => {
    return isHref ?
        <a href={href} className={`${styles.button} ${className}`} onClick={onClick}>{children}</a>
        :
        <button className={`${styles.button} ${className}`} type={type ? type : 'button'} onClick={onClick}>{children}</button>

}

export default TextButton