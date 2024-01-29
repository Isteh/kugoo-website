import { FC } from 'react'
import MenuLink from '../../ui/menuLink/menuLink'
import WhatsupIcon from '@/public/whatsapp.svg'
import ViberIcon from '@/public/viber.svg'
import TelegramIcon from '@/public/telegram.svg'
import PhoneNumber from '../../ui/phoneNumber/phoneNumber'
import CircleIcon from '@/public/circlePlus.svg'
import styles from './topContacts.module.scss'

const TopContacts: FC = () => {
    return <ul className={styles.linksContainer}>
        <li><MenuLink className={styles.link} isAdditional>Сервис</MenuLink></li>
        <li><MenuLink className={styles.link} isAdditional>Сотрудничество</MenuLink></li>
        <li><MenuLink className={styles.link} isAdditional>Заказать звонок</MenuLink> </li>
        <li className={styles.listSocialLinks}>
            <ul >
                <li><MenuLink className={styles.link}><WhatsupIcon /></MenuLink></li>
                <li><MenuLink className={styles.link}><ViberIcon /></MenuLink></li>
                <li><MenuLink className={styles.link}><TelegramIcon /></MenuLink></li>
            </ul>
        </li>
        <li>
            <PhoneNumber tel='+7 (800) 505-54-61'>
                <CircleIcon className={styles.circle} />
            </PhoneNumber></li>
    </ul>
}

export default TopContacts