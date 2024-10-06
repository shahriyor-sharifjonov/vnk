'use client'
import React from 'react'
import styles from './Category.module.scss'
import Link from 'next/link'
import { useState } from 'react'


const CategoryCard = ({href, name, imgSrc, cardClass}) => {
    return (
        <Link href={href} className={`${styles.category__card} ${cardClass}`}>
            <div className={styles.card__name}>
                {name}
            </div>
            <img className={styles.card__img} src={imgSrc} alt="image" />
        </Link>
    )
}



export default function CategoryTwo() {
    const [ifPopup, setIfPopup] = useState(false)
  return (
    <>
    {ifPopup && (
        <div className={styles.categoryPopup}>
            <div className={styles.heading}>
                <h3>Вся спец. техника для покупки</h3>
                <svg
                    onClick={()=>{setIfPopup(!ifPopup)}}
                    xmlns="http://www.w3.org/2000/svg"
                    width={44}
                    height={44}
                    viewBox="0 0 44 44"
                    fill="none"
                    >
                    <mask
                        id="mask0_462_14708"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={44}
                        height={44}
                    >
                        <rect width={44} height={44} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_462_14708)">
                        <path
                        d="M11.7337 34.8334L9.16699 32.2667L19.4337 22.0001L9.16699 11.7334L11.7337 9.16675L22.0003 19.4334L32.267 9.16675L34.8337 11.7334L24.567 22.0001L34.8337 32.2667L32.267 34.8334L22.0003 24.5667L11.7337 34.8334Z"
                        fill="#1C1B1F"
                        />
                    </g>
                </svg>

            </div>
            <div className={styles.ctr}>
                
            </div>
        </div>
    )}
    <div className={`${styles.category} ${styles.second}`}>
        <CategoryCard 
            href='#!' 
            name={'Нефтепродукты'} 
            imgSrc={'/Image7.png'} 
            cardClass={styles.lightYellow} 
        />
        <CategoryCard 
            href='#!' 
            name={'Агрохимия'} 
            imgSrc={'/Image2.png'} 
            cardClass={styles.gray50} 
        />
        <CategoryCard 
            href='#!' 
            name={'Спец. техника'} 
            imgSrc={'/Image8.png'} 
            cardClass={styles.lightGreen} 
        />
        <CategoryCard 
            href='#!' 
            name={'Реализация урожая'} 
            imgSrc={'/Image9.png'} 
            cardClass={styles.gray} 
        />
        <CategoryCard 
            href='#!' 
            name={'Нефтепродукты'} 
            imgSrc={'/Image10.png'} 
            cardClass={styles.lightGreen} 
        />
        <CategoryCard 
            href='#!' 
            name={'Агрохимия'} 
            imgSrc={'/Image11.png'} 
            cardClass={styles.lightYellow} 
        />
        <CategoryCard 
            href='#!' 
            name={'Спец. техника'} 
            imgSrc={'/Image12.png'} 
            cardClass={styles.gray50} 
        />
        <Link href={'#!'} className={`${styles.category__card} ${styles.green500}`}>
            <div className={styles.card__name}>
                Все категории →
            </div>
        </Link>
    </div>
    </>
  )
}
