import { FC } from 'react'
import MailForm from '../../blocks/mailForm/mailForm'
import styles from './footer.module.scss'
import ListOfLinks from '../../blocks/listOfLinks/listOfLinks'
import { forBuyersLinks, catalogLinks, socialLinks } from './data'
import Contacts from '../../blocks/contacts/contacts'
import Logo from '../../ui/logo/logo'
import Link from 'next/link'
import SocialCard from '../../ui/socialCard/socialCard'
import Br from '../../ui/br/br'
import InGooglePlay from '@/public/inGooglePlay.svg'
import InAppStore from '@/public/inAppStore.svg'
import WhatsupIcon from '@/public/whatsapp.svg'
import ViberIcon from '@/public/viber.svg'
import TelegramIcon from '@/public/telegram.svg'
import MenuLink from '../../ui/menuLink/menuLink'

const Footer: FC = () => {
  return <footer className={styles.footer}>
    <MailForm className={styles.mail} />
    <div className={styles.footerWrapper}>
      <div className={styles.infoWrapper}>
        <ListOfLinks title={catalogLinks.title} items={catalogLinks.items} />
        <ListOfLinks className={styles.twoColumList} title={forBuyersLinks.title} items={forBuyersLinks.items} />
        <Contacts className={styles.contacts} />
      </div>
      <Br />
      <div className={styles.social}>
        <Logo className={styles.logo} />
        <Link href=''><InGooglePlay /></Link>
        <Link href=''><InAppStore /></Link>
        <ul className={styles.socialLinks}>
          {socialLinks.map((item, index) => <li key={index}>
            <SocialCard item={item} />
          </li>)}
        </ul>
      </div>
      <Br />
      <div className={styles.payments}>
        <ul className={styles.requisites}>
          <li>
            <MenuLink className={styles.link} isAdditional>Реквизиты</MenuLink>
          </li>
          <li>
            <MenuLink className={styles.link} isAdditional>Политика конфиденциальности</MenuLink>
          </li>
        </ul>
        <ul className={styles.paymentsMethods}>
          { }
        </ul>
        <ul className={styles.onlineChatLinks}>
          <span>Online чат:</span>
          <li><Link href='' className={styles.link}><WhatsupIcon /></Link></li>
          <li><Link href='' className={styles.link}><ViberIcon /></Link></li>
          <li><Link href='' className={styles.link}><TelegramIcon /></Link></li>
        </ul>
      </div>
    </div>
  </footer>
}

export default Footer