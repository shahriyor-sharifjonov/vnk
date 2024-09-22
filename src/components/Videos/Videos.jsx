import React from 'react';
import styles from './Videos.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Videos() {
  return (
    <div className={styles.videosCtr}>
      <Swiper
        slidesPerView={9}    
      >
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.videoCard}>
            Видео
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
