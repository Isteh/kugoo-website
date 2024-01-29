import Image from 'next/image'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import style from './socialCard.module.scss'

type TypeProps = {
    item: {
        name: string,
        countFollowers: number | string,
        iconPath: string,
        href: string
    },
    className?: string
}

const SocialCard: FC<PropsWithChildren<TypeProps>> = ({ item: { name, countFollowers, iconPath, href }, className }) => {
    return <Link href={href} className={`${style.card} ${className}`}>
        <Image src={iconPath} alt={`иконка ${name}`} height={20} width={20} />
        <div className={style.textWrapper}>
            <span className={style.name}>{name}</span>
            <span className={style.counter}>{countFollowers}</span>
        </div>
    </Link>
}

export default SocialCard