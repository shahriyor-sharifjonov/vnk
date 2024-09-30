import React from 'react'
import styles from './Advantages.module.scss'


function AdvantagesCard ({imgSrc, name, descr}){
    return (
        <div className={styles.card}>
            <img src={imgSrc} className={styles.cardImg} alt="svg" />
            <div className="info">
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.desrc}>{descr}</p>
            </div>
        </div>
    )
}




const GalleryCard = ({name, descr}) => {
    return (
        <div className={styles.galleryCard}>
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.descr}>
                {descr}
            </div>
        </div>
    )
}

function Gallery (){
    return (
        <>
        <h2 className={styles.headingH2Second}>
            Широкая линейка продуктов напрямую от производителей с конкурентными условиями
        </h2>
        <div className={styles.imgGalleryCtr}>

            <GalleryCard 
                name={'Дизельное топливо'}
                descr={'Жидкий продукт, использующийся как топливо в дизельном двигателе внутреннего сгорания.'}
            />
            <GalleryCard 
                name={'Сжиженный газ'}
                descr={'Газ, который при некоторых условиях может превращаться в жидкость.'}
            />
            <GalleryCard 
                name={'Бензин'}
                descr={'Горючая смесь лёгких углеводородов с температурой кипения от + 33 до +205 °C (в зависимости от примесей).'}
            />
            <GalleryCard 
                name={'Масла'}
                descr={'Способствуют предохранению деталей от износа в результате трения между движущимися деталями.'}
            />
            <GalleryCard 
                name={'Агрохимия'}
                descr={'Удобрения для питания растений и повышения плодородия почв.'}
            />
            <GalleryCard 
                name={'Мазут и битум'}
                descr={'Жидкий продукт, остающийся после переработки нефти.'}
            />

        </div>
        </>
    )
}



export default function Advantages() {
  return (
    <section className={styles.section4}>
        <h2 className={styles.headingH2}>Наши преимущества</h2>
        <div className={styles.advantagesCtr}>
            <AdvantagesCard 
                imgSrc={'/Icons1.svg'}
                name={'Вариативность'}
                descr={'Подписывая договор коммерческой концессии с нами вы заключаете договор со всеми заводами на вашей территории, а так же с соседними регионами. Что дает вам большую вариативность ценообразования'}
            />
            <AdvantagesCard 
                imgSrc={'/Icons2.svg'}
                name={'Партнерство'}
                descr={'Вы становитесь официальными дилерами ФосАгро и КуйбышевАзот. Получая таким образом торговое преимущество и специальные предложения от наших партнеров'}
            />
            <AdvantagesCard 
                imgSrc={'/Icons3.svg'}
                name={'Стабильность'}
                descr={'Паушальный взнос так же является вашим обеспечением вы так же можете на него покупать продукты и заниматься их реализацией в случае не хватки средств или форс мажорных обстоятельств'}
            />
            <AdvantagesCard 
                imgSrc={'/Icons4.svg'}
                name={'Собственное ПО'}
                descr={'Собственное программное обеспечение поможет вашим менеджерам подобрать оптимальный продукт с наилучшей ценной и добиться наилучшего результата'}
            />
            <AdvantagesCard 
                imgSrc={'/Icons5.svg'}
                name={'Таргетинг'}
                descr={'Все клиенты которые будут вам переданы первоначально проработаны и являются потребителями топлива и удобрений'}
            />
            <AdvantagesCard 
                imgSrc={'/Icons6.svg'}
                name={'Обучение'}
                descr={'Подписывая договор коммерческой концессии с нами вы заключаете договор со всеми заводами на вашей территории, а так же с соседними регионами. Что дает вам большую вариативность ценообразования'}
            />
        </div>

        <Gallery />
    </section>
  )
}
