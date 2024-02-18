import { FC } from 'react'
import styles from './catalogMenu.module.scss'
import CatalogIcon from "@/public/catalog.svg"
import Button from '../../ui/button/button'
import Link from 'next/link'

const CatalogMenu: FC<{ className?: string }> = ({ className }) => {
    return <Button style={{ padding: '9px 15px', display: 'block' }} className={className}> <Link href={`/catalog`} className={styles.button}>
        <CatalogIcon className={styles.icon} />Каталог
    </Link>
    </Button>
}

export default CatalogMenu