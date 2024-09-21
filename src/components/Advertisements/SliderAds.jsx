import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Advertisements.module.scss'

export default function SliderAds() {
  return (
    <div className={`${styles.slider} adsslider`}>
        <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true, el: `.${styles.paginationCustom}` }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className={styles.slide}>
                    {/* <img className={styles.slideImg} src="" alt="" /> */}
                    Место для рекламы
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.slide}>
                    {/* <img className={styles.slideImg} src="" alt="" /> */}
                    Место для рекламы
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.slide}>
                    {/* <img className={styles.slideImg} src="" alt="" /> */}
                    Место для рекламы
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.slide}>
                    {/* <img className={styles.slideImg} src="" alt="" /> */}
                    Место для рекламы
                </div>
            </SwiperSlide>
        </Swiper>
        <div className={styles.paginationCustom}></div>
        <div className={styles.adsBnr}>
            Реклама
        </div>
        
    </div>
  )
}
