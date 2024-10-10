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

    const dataArray = [
        {
          category: "Коммерческий транспорт",
          subcategories: [
            { name: "Грузовики", link: "#!" },
            { name: "Тягачи", link: "#!" },
            { name: "Полуприцепы", link: "#!" },
            { name: "Легкие прицепы", link: "#!" }
          ]
        },
        {
          category: "Сельхоз техника",
          subcategories: [
            { name: "Грузовики", link: "#!" },
            { name: "Тягачи", link: "#!" },
            { name: "Полуприцепы", link: "#!" },
            { name: "Легкие прицепы", link: "#!" }
          ]
        },
        {
          category: "Комунальная техника",
          subcategories: [
            { name: "Грузовики", link: "#!" },
            { name: "Тягачи", link: "#!" },
            { name: "Полуприцепы", link: "#!" },
            { name: "Легкие прицепы", link: "#!" }
          ]
        },
        {
          category: "Коммерческий транспорт",
          subcategories: [
            { name: "Грузовики", link: "#!" },
            { name: "Тягачи", link: "#!" },
            { name: "Полуприцепы", link: "#!" },
            { name: "Легкие прицепы", link: "#!" }
          ]
        },
        {
          category: "Сельхоз техника",
          subcategories: [
            { name: "Грузовики", link: "#!" },
            { name: "Тягачи", link: "#!" },
            { name: "Полуприцепы", link: "#!" },
            { name: "Легкие прицепы", link: "#!" }
          ]
        }
      ];
      
      
  return (
    <>
    {ifPopup && (
        <div className={styles.categoryPopup}>
            <div className={styles.wrapper}>
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
                <div className={styles.ctrs}>
                    {dataArray.map((item, index)=> (
                        <div className={styles.ctr} key={index}>
                            <div className={styles.ctr_heading}>
                            {item.category}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <mask
                                id={`mask0_${index}`}
                                style={{ maskType: 'alpha' }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={24}
                                height={24}
                                >
                                <rect width={24} height={24} fill="#D9D9D9" />
                                </mask>
                                <g mask={`url(#mask0_${index})`}>
                                <path
                                    d="M13.0498 12.0001L8.9498 7.9001C8.76647 7.71676 8.6748 7.50426 8.6748 7.2626C8.6748 7.02093 8.76647 6.80843 8.9498 6.6251C9.13314 6.44176 9.34564 6.3501 9.5873 6.3501C9.82897 6.3501 10.0443 6.4446 10.2333 6.6336L14.9748 11.3751C15.0581 11.4651 15.1206 11.5626 15.1623 11.6676C15.204 11.7726 15.2248 11.8851 15.2248 12.0051C15.2248 12.1251 15.204 12.2376 15.1623 12.3426C15.1206 12.4476 15.0581 12.5418 14.9748 12.6251L10.2333 17.3666C10.0443 17.5556 9.83314 17.6459 9.5998 17.6376C9.36647 17.6293 9.15814 17.5334 8.9748 17.3501C8.79147 17.1668 8.6998 16.9543 8.6998 16.7126C8.6998 16.4709 8.79147 16.2584 8.9748 16.0751L13.0498 12.0001Z"
                                    fill="#183203"
                                />
                                </g>
                            </svg>
                            </div>
                            <div className={styles.links}>
                            {item.subcategories.map((subcat, subIndex) => (
                                <Link
                                className={styles.popupLink}
                                href={subcat.link}
                                key={subIndex}
                                >
                                {subcat.name}
                                </Link>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )}

    <div className={`${styles.category} ${styles.second}`}>
        <CategoryCard 
            href='/gruzovik' 
            name={'Грузовики'} 
            imgSrc={'/Image7.png'} 
            cardClass={styles.lightYellow} 
            />
        <CategoryCard 
            href='#!' 
            name={'Трактора'} 
            imgSrc={'/Image2.png'} 
            cardClass={styles.gray50} 
        />
        <CategoryCard 
            href='#!' 
            name={'Экскаваторы'} 
            imgSrc={'/Image8.png'} 
            cardClass={styles.lightGreen} 
        />
        <CategoryCard 
            href='#!' 
            name={'Погрузчики'} 
            imgSrc={'/Image9.png'} 
            cardClass={styles.gray} 
        />
        <CategoryCard 
            href='#!' 
            name={'Комбайны'} 
            imgSrc={'/Image10.png'} 
            cardClass={styles.lightGreen} 
        />
        <CategoryCard 
            href='#!' 
            name={'Сеялки'} 
            imgSrc={'/Image11.png'} 
            cardClass={styles.lightYellow} 
        />
        <CategoryCard 
            href='#!' 
            name={'Косилки'} 
            imgSrc={'/Image12.png'} 
            cardClass={styles.gray50} 
        />
        <Link href={'#popup'} onClick={()=>{setIfPopup(true)}} className={`${styles.category__card} ${styles.green500}`}>
            <div className={styles.card__name}>
                Все категории →
            </div>
        </Link>
    </div>
    </>
  )
}
