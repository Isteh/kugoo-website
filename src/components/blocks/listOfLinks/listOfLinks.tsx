import { FC } from 'react'
import Title from '../../ui/title/title'
import MenuLink from '../../ui/menuLink/menuLink'
import styles from './listOfLinks.module.scss'

type TypeProps = {
    title: string,
    items: {
        name: string,
        href: string
    }[],
    className?: string
}

const ListOfLinks: FC<TypeProps> = ({ title, items, className }) => {
    return <div className={`${styles.container} ${className}`}>
        <Title className={styles.title} level={3}>{title}</Title>
        <ul className={styles.list}>
            {items.map((item, index) => <li key={index}>
                <MenuLink className={styles.link} href={item.href}>{item.name}</MenuLink>
            </li>)}
        </ul>
    </div>
}

export default ListOfLinks