'use client'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd';
import { usePathname } from 'next/navigation';
import { FC } from 'react'


function itemRender(route, params, items, paths) {
    const last = items.indexOf(item) === items.length - 1;
    return last ? <span>{item.title}</span> : <Link to={paths.join('/')}>{item.title}</Link>;
}
const APP_PATHS =
{
    index: {
        href: '/',
        title: (
            <>
                <HomeOutlined />
                Главная
            </>
        )
    },
    catalog: {
        href: '/cart',
        title: (
            <>
                Каталог
            </>
        )
    },
    cart: {
        href: '/',
        title: (
            <>
                Моя корзина
            </>
        )
    }

}

type TypePath = {
    string: {
    href:string,
    title: JSX.Element
}}


const Breadcrums: FC = () => {
    const currentPath = usePathname();
    const paths = currentPath.split('/')
    const items = [APP_PATHS.index]
    paths.map(path => Number.isNaN(Number(path)) &&items.join(APP_PATHS[path as keyof typeof APP_PATHS]))
    return <Breadcrumb itemRender={itemRender} items={items} />
}

export default Breadcrums