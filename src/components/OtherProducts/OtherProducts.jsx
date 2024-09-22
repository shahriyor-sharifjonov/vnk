import React from 'react'
import styles from './OtherProducts.module.scss'
import Link from 'next/link'
import ProductCard from '../Recomendation/ProductCard'


const products = [
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  {
    name: 'Универсальный трактор TFE-895',
    imgSrc: '/ImageProduct.png',
    price: '7 000 000',
    address: 'г. Краснодар, ул. Пушкина, 59',
    date: '25 августа 2024',
    redTag: true,
    greenTag: true
  },
  // Add 14 more products here
];


export default function OtherProducts() {
  return (
    <div className={styles.otherProducts}>
       <div className={styles.heading}>
        <h2 styles={styles.h2}>Другие объявления</h2>
        <Link href={'#!'} className={styles.seeAll}>
          ПОКАЗАТЬ ВСЕ →
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
          >
            {/* SVG код */}
          </svg>
        </Link>
      </div>
      <div className={styles.cards}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            imgSrc={product.imgSrc}
            price={product.price}
            address={product.address}
            date={product.date}
            redTag={product.redTag}
            greenTag={product.greenTag}
          />
        ))}
      </div>
    </div>
  )
}
