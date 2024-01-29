import { IProduct } from '@/src/interfaces/product.interface'
import { FC, memo, useEffect, useRef, useState } from 'react'
import ProductMarker from '../productTag/productMarker'
import BalanceIcon from '@/public/balance.svg'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import Image from 'next/image';
import Title from '../title/title';
import PowerTimeIcon from '@/public/timer.svg'
import SpeedIcon from '@/public/speedometer.svg'
import ChargeIcon from '@/public/accumulator.svg'
import PowerIcon from "@/public/power.svg"
import Price from '../price/price';
import Button from '../button/button';
import CartIcon from '@/public/shopping_cart_outlined_purple.svg'
import HeartIcon from '@/public/heart_otlined_purple.svg'
import styles from './productCard.module.scss'
import SwiperRightArrowIcon from '@/public/product_card_arrow_right.svg'
import Link from 'next/link';

type TypeProps = {
    product: IProduct,
    className?: string
}

const ProductCard: FC<TypeProps> = ({ product, className }) => {


    const swiperLeftButton = useRef(null)
    const swiperRightButton = useRef(null)

    const [, setForceUpdate] = useState('');

    useEffect(() => setForceUpdate('Необходимо для перерисовки'), [])

    return <div className={`${styles.card} ${className}`}>
        <div className={styles.topPanel}>
            {(product.isBestseller) ?
                <ProductMarker type='bestSeller' />
                :
                <ProductMarker type='new' />}
            <button className={styles.balanceButton}> <BalanceIcon /></button>
        </div>

        <Swiper
            modules={[Navigation]}
            className={styles.swiper}
            navigation={{
                nextEl: swiperRightButton.current,
                prevEl: swiperLeftButton.current,
            }}
            slidesPerView={1}
        >
            <button className={styles.swiperButton}
                ref={swiperLeftButton} type='button'>
                <SwiperRightArrowIcon className={styles.leftArrow} />
            </button>

            <button className={`${styles.swiperButton} ${styles.swiperButtonRight}`}
                ref={swiperRightButton} type='button'>
                <SwiperRightArrowIcon />
            </button>

            <SwiperSlide >
                <Image src={product.mainImg} width={211} height={211} alt={`Фотография ${product.name}`} />
            </SwiperSlide>

            {product.additionalImgs && product.additionalImgs.length &&
                product.additionalImgs.map((item, index) =>
                    <SwiperSlide key={index} >
                        <Image className={styles.image}
                            src={item}
                            width={211}
                            height={211}
                            alt={`Фотография ${product.name}`} />
                    </SwiperSlide>)}


        </Swiper>

        <div className={styles.textWrapper}>
            <Link className={styles.link} href={`/catalog/${product.type}/${product.id}`} />
            <Title className={styles.title} level={3}>{product.name}</Title>
            <ul className={styles.characteristicsList}>
                <li><ChargeIcon />{product.characteristics?.charge} mAh</li>
                <li><PowerIcon />{product.characteristics?.power} л.с.</li>
                <li><SpeedIcon />{product.characteristics?.speed} км/ч</li>
                <li><PowerTimeIcon />{product.characteristics?.powerTime} часов</li>
            </ul>
            <Price actualPrice={product.price.actual} oldPrice={product.price.old} />
            <ul className={styles.iconButtonsList}>
                <li><button className={styles.iconButton}><CartIcon className={styles.cart} /></button></li>
                <li><button className={styles.iconButton}><HeartIcon /></button></li>
            </ul>
            <Button className={styles.button}>Купить в 1 клик</Button>
        </div>
    </div>
}

export default ProductCard