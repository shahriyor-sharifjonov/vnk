import React from 'react'
import styles from './StepsToSucces.module.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Partners (){
    return (
        <section className={styles.partners}>
            <h2>Наши партнеры </h2>
            <div className={styles.images}>
                <img src="/Frame 576.png" alt="img" />
                <img src="/Frame 577.png" alt="img" />
                <img src="/Frame 578.png" alt="img" />
            </div>
            <div className={`${styles.dillers} dillers`}>
                <div className={styles.slider}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={4}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')} 
                    >
                        <SwiperSlide>
                            <div className={styles.imgCard}>
                                <img src="/Frame 532.png" alt="img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.imgCard}>
                                <img src="/Frame 533.png" alt="img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.imgCard}>
                                <img src="/Frame 534.png" alt="img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.imgCard}>
                                <img src="/Frame 535.png" alt="img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.imgCard}>
                                <img src="/Frame 539.png" alt="img" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.names}>
                    <h4>Официальные дилеры ФосАгро</h4>
                    <img src="/focargo.png" alt="logo" />
                </div>
            </div>
        </section>
    )
}






const StepCard = ({name, num, descr}) =>{
    return (
        <div className={styles.stepCard}>   
            <div className={styles.heading}>
                <h4>{name}</h4>
                <h4>{num}</h4>
            </div>
            <p>{descr}</p>
        </div>
    )
}



export default function StepsToSucces() {
  return (
    <>
    <section className={styles.steps}>
        <h2>5 шагов к успеху</h2>
        <div className={styles.stepCards}>
            <StepCard 
                name={'Договор'}
                num={'01'}
                descr={'С партнером подписывается договор. Каждая из сторон обязуется соблюдать условия'}
            />
            <StepCard 
                name={'Открытие'}
                num={'02'}
                descr={'Партнер формирует отдел продаж с поддержкой центрального подразделения и участвует в аттестации сотрудников. А также проводит переговоры с поставщиками.'}
            />
            <StepCard 
                name={'Инструктаж'}
                num={'03'}
                descr={'Партнеру проводится подробный инструктаж по всей система бизнеса. После чего передаются Методические пособия, организуется доступ к чату поддержки, системе обучения'}
            />
            <StepCard 
                name={'Продажи'}
                num={'04'}
                descr={'Партнер, при поддержке центрального подразделения, курирует переговоры отдела продаж. Курирует и контролирует, совместно с логистом центральной компании, каждую отгрузку продукции клиенту'}
            />
            <StepCard 
                name={'Прибыль'}
                num={'05'}
                descr={'Получайте прибыль и выходите в плюс'}
            />
        </div>
        <button type="button">Получить звонок</button>
    </section>
    <Partners />
    </>
  )
}
