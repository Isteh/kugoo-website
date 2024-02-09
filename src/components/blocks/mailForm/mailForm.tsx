import { FC } from 'react'
import Title from '../../ui/title/title'
import Input from '../../ui/input/input'
import style from './mailForm.module.scss'
import Button from '../../ui/button/button'

const MailForm: FC<{ className?: string }> = ({ className }) => {
  return <form id='mail-form' className={`${style.form} ${className}`}>
    <Title className={style.title} level={2}>Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты</Title>
    <Input className={style.input} name='email-input' type='email' placeholder='Введите Ваш email' />
    <Button invertColors type='submit' className={style.button}>Подписаться</Button>
  </form>
}

export default MailForm