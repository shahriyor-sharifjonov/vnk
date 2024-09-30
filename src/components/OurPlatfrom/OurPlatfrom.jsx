import React from 'react'
import styles from './OurPlatfrom.module.scss'



const Indicator = () => {
    return (
        <div className={styles.indicator}>
            <h2>Финансовые показатели</h2>
            <div className={styles.indicatorCtr}>
                <div className={styles.info}>
                    <div className={styles.infoCtr}>
                        <h4>Высокий потребительский спрос</h4>
                        <p>В России зарегистрировано 287500 с/х предприятий</p>
                    </div>
                    <div className={styles.infoCtr}>
                        <h4>Прямые договора</h4>
                        <p>Дизельное Топливо 25 заводов<br/>Бензин 23 завода<br/>Мазут 15 заводов<br/>Удобрения 24 завода<br/>Химхащита 6 заводов<br/>Масла 25 заводов</p>
                    </div>
                    <div className={styles.infoCtr}>
                        <h4>Средний чек от 1 500 000 руб</h4>
                        <p>Маржинальность от 3 до 14%</p>
                    </div>
                </div>

                <div className={styles.graphCtr}>
                    <div className={styles.graphName}>Выручка за 2021 - 2023 год</div>
                    <div className={styles.graphs}>
                        <div className={styles.graph}>
                            <div className={styles.year}>2021</div>
                            <div className={styles.bar}>65 млн. руб</div>
                        </div>
                        <div className={styles.graph}>
                            <div className={styles.year}>2022</div>
                            <div className={styles.bar}>155 млн. руб</div>
                        </div>
                        <div className={styles.graph}>
                            <div className={styles.year}>2023</div>
                            <div className={styles.bar}>278 млн. руб</div>
                        </div>
                    </div>
                </div>


            </div>
            <div className={styles.avarage}>3 971 350 ₽ — средне годовая чистая прибыль региональных подразделений ООО "ВНК" по итогам 2022 года</div>
        </div>
    )
}



export default function OurPlatfrom() {
  return (
    <>
    <section className={styles.ourPlatfrom}>
        <div className={styles.heading}>
            <h4>Наша IT платформа</h4>
            <p>предоставляет и дает возможность широкого выбора цен среди заводов производителей позволяющие достойно конкурировать на рынке</p>
        </div>
        <div className={styles.cpu}>
            <img src="/Group 6.svg" className={styles.cpuImg} alt="" />
            <div className={styles.cards}>
                <span className={styles.card}>Автопросчет цены</span>
                <span className={styles.card}>Личный кабинет</span>
                <span className={styles.card}>Автопросчет логики</span>
            </div>
        </div>
    </section>
    <Indicator />
    </>
  )
}
