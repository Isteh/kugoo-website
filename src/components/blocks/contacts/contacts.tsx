import { FC } from 'react'
import Title from '../../ui/title/title'
import {contactList, shopList} from './data'
import ContactCard from '../../ui/contactCard/contactCard'
import AdressCard from '../../ui/addresCard/adressCard'
import style from './contacts.module.scss'
import TextButton from '../../ui/textButton/textButton'

const Contacts: FC<{className: string}> = ({className}) => {
    return <div className={`${style.contactWrapper} ${className}`}>
        <div className={style.topPanel}>
            <Title className={style.title} level={3}>Контакты</Title>
            <TextButton className={style.button}>Заказать звонок</TextButton>
        </div>
        <ul className={style.contactList}>
            {contactList.map((item,index)=>
                <li key={index}><ContactCard item={item}/></li>
            )}
        </ul>
        <ul className={style.adressList}>
            {shopList.map((item,index)=>
            <li key={index}>
                <AdressCard item={item}/>
            </li>)}
        </ul>
    </div>
}

export default Contacts