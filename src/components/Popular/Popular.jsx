import React from 'react'
import styles from './Popular.module.scss';
import { ProductCard } from '../Recomendation/Recomendation';


export default function Popular() {
  return (
    <>
        <h2 className={styles.heading}>
            Популярные товары
        </h2>    
        <div className={styles.recomendsCtr}>
            <div className={styles.adsBanner}>
                Тут будет ваша реклама
            </div>
            <div className={styles.recomendsCards}>
                <ProductCard
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
            </div>
        </div>
    </>
  )
}
