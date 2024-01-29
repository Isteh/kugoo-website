'use client'

import { FC } from 'react'
import Kugoo from '@/public/Kugoo.svg'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const Logo: FC<{className?: string}> = ({className}) => {
    const pathname = usePathname();
    return pathname === '/' ? <Kugoo className={className} /> : <Link className={className} href={'/'}><Kugoo /></Link>
}

export default Logo