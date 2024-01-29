import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import styles from './menuLink.module.scss'

type TypeProps = {
    className?: string,
    isAdditional?: boolean,
    superInfo?: string,
    href?: string
}

const MenuLink: FC<PropsWithChildren<TypeProps>> = ({ className, isAdditional, superInfo, href, children }) => {
    return <Link className={`${styles.link} ${className} ${isAdditional && styles.additional}`} href={href ? href : ''}>
        {children}
        {superInfo && superInfo.length && <span className={styles.superInfo}>{superInfo}</span>}
    </Link>
}

export default MenuLink
