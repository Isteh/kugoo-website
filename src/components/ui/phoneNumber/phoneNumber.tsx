import { FC, PropsWithChildren } from 'react'
import styles from './phoneNumber.module.scss'

type TypeProps = {
    tel: string,
    className?: string
}

const PhoneNumber: FC<PropsWithChildren<TypeProps>> = ({ tel, className,children }) => {
    return <a className={`${styles.phone} ${className}`} href={`tel:${tel.replace(/[^+\d]/g, '')}`}>{tel} {children}</a>
}

export default PhoneNumber
