import React from 'react'
import styles from './Category.module.scss'
import Link from 'next/link'



const CategoryCard = ({href, name, imgSrc, cardClass, large}) => {
    return (
        <Link href={href} className={`${styles.category__card} ${cardClass} ${large && styles.large}`}>
            <div className={styles.card__name}>
                {name}
            </div>
            <img className={styles.card__img} src={imgSrc} alt="image" />
        </Link>
    )
}

const Category = () => {
    return (
        <div className={styles.category}>
            <CategoryCard 
                href='#!' 
                name={'Нефтепродукты'} 
                imgSrc={'/Image.png'} 
                cardClass={styles.yellow} 
            />
            <CategoryCard 
                href='#!' 
                name={'Агрохимия'} 
                imgSrc={'/Image1.png'} 
                cardClass={styles.green} 
            />
            <CategoryCard 
                href='#!' 
                name={'Спец. техника'} 
                imgSrc={'/Image2.png'} 
                cardClass={styles.gray} 
            />
            <CategoryCard 
                href='#!' 
                name={'Реализация урожая'} 
                imgSrc={'/Image3.png'} 
                cardClass={styles.lightGreen} 
            />
            <CategoryCard 
                href='#!' 
                name={'Готовый бизнес'} 
                imgSrc={'/Image4.png'} 
                cardClass={styles.lightYellow} 
                large={true}
            />
            <CategoryCard 
                href='#!' 
                name={'Недвижимость'} 
                imgSrc={'/Image5.png'} 
                cardClass={styles.gray} 
                large={true}
            />
            <CategoryCard 
                href='#!' 
                name={'Услуги'} 
                imgSrc={'/Image6.png'} 
                cardClass={styles.middleYellow} 
                large={true}
            />
        </div>
    )
}
export default Category
