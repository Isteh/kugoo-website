import { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import Image from 'next/image';
import styles from './galleryWithTumbs.module.scss'
import './galleryWithTumbs.scss'

import 'swiper/scss';
import 'swiper/scss/thumbs';


const GalleryWithTumbs: FC<{ imgs: string[] }> = ({ imgs }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return <div className={styles.galleryWrapper}>
        <Swiper className={styles.swiper}
            spaceBetween={10}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs]}
        >
            {imgs.map(item => <SwiperSlide key={item}>
                <Image src={item} height={506} width={570} alt='Изображение самоката'></Image>
            </SwiperSlide>)}
        </Swiper>
        <Swiper
            className={'gallery-with-tubs--sub-swiper'}
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView='auto'
        >
            {imgs.map(item => <SwiperSlide key={item}>
                <Image src={item} height={73} width={73} alt='Изображение самоката'></Image>
            </SwiperSlide>)}
        </Swiper>
    </div>
}

export default GalleryWithTumbs