'use client'
import { useProductStore } from '@/src/stores/Product.store'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CSSProperties, FC, useMemo } from 'react'

const pathsTitles = {
    catalog: 'Каталог',
    cart: 'Моя корзина',
    electricScooters: 'Электросамокаты'
}

function itemRender(item: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>, params: any, items: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[]) {
    const last = items.indexOf(item) === items.length - 1;
    return last ? <span>{item.title}</span> : <Link {...item.href ? { href: item.href } : { href: '/' }}>{item.title}</Link>;
}


const Breadcrumbs: FC<{ style: CSSProperties }> = ({ style }) => {
    const path = usePathname()
    const pathList = path.split("/").filter(v => v.length > 0);
    const product = useProductStore(state => state.products[Number(pathList[pathList.length - 1])])
    const breadcrumbs = useMemo(function generateBreadcrumbs() {


        const crumblist = pathList.map((subpath, idx) => {
            const href = "/" + pathList.slice(0, idx + 1).join("/");

            let title: string


            if (!isNaN(Number(subpath))) {
                product ? title = product.name : title = 'Loading...'

            }
            else {
                title = pathsTitles[subpath as keyof typeof pathsTitles]

            }

            return { href, title: title };
        })

        return [{ href: "/", title: <HomeOutlined /> }, ...crumblist];
    }, [pathList, product]);
    return <Breadcrumb itemRender={itemRender} items={breadcrumbs} style={style} />
}

export default Breadcrumbs