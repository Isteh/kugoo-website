'use client'
import { FC, ReactElement, useRef, useState } from 'react'
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay'
import styles from './banner.module.scss'
import SwiperArrow from '@/public/swiper_arrow_left.svg'
import { Progress } from 'antd';


type TypeProps = {
    items: ReactElement[],
    className: string
}

const Banner: FC<TypeProps> = ({ items, className }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [progressAutoplay, setProgressAutoplay] = useState(100)
    const swiperLeftButton = useRef(null)
    const swiperRightButton = useRef(null)

    return items.length === 1 ?
        <div>fghfgh</div>
        :
        <Swiper className={`${styles.bannerSwiper} ${className}`}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation={{
                nextEl: swiperRightButton.current,
                prevEl: swiperLeftButton.current,
            }}
            loop={true}
            autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
            }}
            onSlideChange={(swiper) => activeTab === (items.length - 1) ? setActiveTab(0) : setActiveTab(swiper.activeIndex)}
            onAutoplayTimeLeft={(swiper, timeLeft, percentage) => { setProgressAutoplay(Number(percentage.toFixed(2))) }}
        >
            {items.map((item, index) => <SwiperSlide key={index}>{item}</SwiperSlide>)}

            < div className={styles.swiperControls} >
                <button ref={swiperLeftButton} className={styles.swiperButton}><SwiperArrow />{activeTab + 1}</button>
                <Progress className={styles.progress} percent={100 - (progressAutoplay * 100)} showInfo={false} strokeColor='#fff' size='small' status='active' />

                <button ref={swiperRightButton} className={styles.swiperButton}>{items.length} <SwiperArrow className={styles.arrowRight} /></button>
            </div>
        </Swiper >
}


export default Banner