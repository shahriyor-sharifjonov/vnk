import React from 'react'
import styles from './Bussineses.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function BussinesCard({desrc, num}){
    return (
        <div className={styles.card}>
            <div className={styles.desrc}>
                {desrc}
            </div>
            <div className={styles.num}>
                {num}
            </div>
        </div>
    )
}

export default function Bussineses() {
  return (
    <>
    <section className={styles.section2}>
        <h2 className={styles.h2}>Готовый бизнес, который вы запустите с нашей поддержкой</h2>
        <div className={styles.bussinesCards}>
            <Swiper
                spaceBetween={0}
                slidesPerView={2}
                pagination={{ clickable: true, el: `.${styles.paginationCustom}` }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >   
                <SwiperSlide>
                    <BussinesCard 
                        desrc={'Зарабатывайте от 4,8 млн. рублей в год'}
                        num={'01'}
                    />
                </SwiperSlide>
                
                <SwiperSlide>
                    <BussinesCard 
                        desrc={'Юридическая и бухгалтерская поддержка'}
                        num={'02'}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <BussinesCard 
                        desrc={'CRM-система'}
                        num={'03'}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>

    
    <section className={styles.section3}>
        <div className={styles.imgLaptop}>
            <img src="/ImageLaptop.png" alt="" />
        </div>
        <div className={styles.laptopInfo}>
          <div className={styles.heading}>
            <p className={styles.headingP}>ПРОСТО, БЫСТРО И УДОБНО</p>
            <h2 className={styles.h2}>Управляйте с помощью телефона или компьютера</h2>
          </div>
          <p className={styles.infoP}>Все процессы автоматизированы, любой сотрудник может закрывать задачи находясь дома или за границей, что значительно экономит время и затраты на аренду офисов.</p>
          <button type="button" className={styles.button}>Хочу получить информацию</button>
        </div>
    </section>
    </>
  )
}
