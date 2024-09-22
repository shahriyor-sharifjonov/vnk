import React from 'react'
import styles from './Recomendation.module.scss'
import ProductCard from './ProductCard'

export default function Recomendation() {
  return (
    <>
        <h2 className={styles.heading}>
            Рекомендации для вас
        </h2>    
        <div className={styles.recomendsCtr}>
            <div className={styles.recomendsCards}>
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    otherTags={true}
                    />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    yellowTag={true}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    secondGreenTag={true}
                    yellowTag={true}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    greenTag={true}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    greenTag={true}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    greenTag={true}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    greenTag={true}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    greenTag={true}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    greenTag={true}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    greenTag={true}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    greenTag={true}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                    redTag={true}
                    greenTag={true}
                />
            </div>
            <div className={styles.adsBanner}>
                Тут будет ваша реклама
            </div>
        </div>
    </>
  )
}
