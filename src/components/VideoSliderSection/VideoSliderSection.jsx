// 'use client'
import React from 'react'
import styles from "./VideoSliderSection.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function VideoSliderSection() {
  return (
    <section className={styles.section}>
        <div className={styles.imgCtr}>
            <img src="/image 62.png" className={styles.absoluteImgFirst} alt="." />
            <img src="/image 63.png" className={styles.absoluteImgFSecond} alt="." />
        </div>
        <div className={`${styles.wrapper} videoSlider`}>
            <div className={styles.info}>
                <div className={styles.text}>
                    <h2>Начните свой прибыльный бизнес в нефтяной отрасли без офиса и переплат</h2>
                    <ul>
                        <li>
                            <span className={styles.restangle}></span>
                            <span className={styles.ulText}>Зарабатывайте от 330 000₽ в месяц дистанционно</span>
                        </li>
                        <li>
                            <span className={styles.restangle}></span>
                            <span className={styles.ulText}>Без фиксированного роялти. Партнер платит процент от продаж.</span>
                        </li>
                    </ul>
                </div>
                <button type="button" className={styles.button}>Хочу получить информацию</button>
            </div>
            <div className={styles.videoSlider}>
                {/* <img src="/image 64.png" alt="" /> */}
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true, el: `.${styles.paginationCustom}` }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src="/image 64.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                        <img src="/image 64.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                        <img src="/image 64.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                        <img src="/image 64.png" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className={styles.paginationCustom}></div>
            </div>
        </div>
    </section>
  )
}
