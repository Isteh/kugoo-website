import { FC } from 'react'
import MenuLink from '../../ui/menuLink/menuLink'
import styles from './additionalNavigation.module.scss'

const items = [{
    title: 'О магазине',
    superInfo: '',
    href: ''
}, {
    title: 'Доставка и оплата',
    superInfo: 'Доступна рассрочка',
    href: ''
}, {
    title: 'Тест-драйв',
    superInfo: '',
    href: ''
}, {
    title: 'Блог',
    superInfo: '',
    href: ''
}, {
    title: 'Контакты',
    superInfo: '',
    href: ''
}, {
    title: 'Акции',
    superInfo: '%',
    href: ''
}]

const additionalNavigation: FC = () => {
    return <ul className={styles.links}>
        {items.map((item, index) => <li key={index}>
            <MenuLink className={styles.link} href={item.href} superInfo={item.superInfo}>{item.title}</MenuLink>
        </li>)}
    </ul>
}

export default additionalNavigation