import { FC } from 'react'
import Title from '../../ui/title/title'
import Button from '../../ui/button/button'
import styles from './emptyCart.module.scss'
import { InboxOutlined } from '@ant-design/icons'

const EmptyCart: FC = () => {
    return <div className={styles.emptyCart}>
        <InboxOutlined style={{ width: 135, height: 85 }} className={styles.icon} />
        <Title className={styles.title} level={2}>Ваша корзина пуста</Title>
        <span className={styles.text}>Добавте в нее товары из каталога</span>
        <Button style={{ width: 'content-fit' }} type="link" href="/catalog">Перейти в каталог</Button>
    </div>
}

export default EmptyCart