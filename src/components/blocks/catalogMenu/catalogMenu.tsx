import { FC } from 'react'
import styles from './catalogMenu.module.scss'
import CatalogIcon from "@/public/catalog.svg"
import Button from '../../ui/button/button'

const CatalogMenu: FC<{ className?: string }> = ({ className }) => {
    return <Button className={`${styles.button} ${className}`}> <CatalogIcon className={styles.icon} />Каталог</Button>
}

export default CatalogMenu