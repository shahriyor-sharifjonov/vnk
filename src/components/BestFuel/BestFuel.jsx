'use client'

import React, { useState } from 'react'
import styles from './BestFuel.module.scss'
import Link from 'next/link'
import FuelCard from './FuelCard'


export default function BestFuel() {
  // начальноке состояние для активного фильтра
  const [activeFilter, setActiveFilter] = useState('Все');

  // Массив видов карточек
  const fuelCards = [
    {
      type: 'Дизельное топливо',
      name: 'Евро 5 (К5)',
      logoName: 'Танеко',
      logoSrc: '/image 61.png',
      delivery: 'Самовывоз, автовоз',
      file: '/image 61.png',
      density: '0.837',
      tonDiscount: '-2500 ▾',
      tonPrice: '55.000 ₽',
      litrDiscount: '+2.15 ▴ ',
      litrPrice: '41.65 ₽'
    },
    {
      type: 'Средства защиты',
      name: 'Евро 5 (К5)',
      logoName: 'Танеко',
      logoSrc: '/image 61.png',
      delivery: 'Самовывоз, автовоз',
      file: '/image 61.png',
      density: '0.837',
      tonDiscount: '-2500 ▾',
      tonPrice: '55.000 ₽',
      litrDiscount: '+2.15 ▴ ',
      litrPrice: '41.65 ₽'
    },
    {
      type: 'Удобрения',
      name: 'Евро 5 (К5)',
      logoName: 'Танеко',
      logoSrc: '/image 61.png',
      delivery: 'Самовывоз, автовоз',
      file: '/image 61.png',
      density: '0.837',
      tonDiscount: '-2500 ▾',
      tonPrice: '55.000 ₽',
      litrDiscount: '+2.15 ▴ ',
      litrPrice: '41.65 ₽'
    },
    {
      type: 'Бензин',
      name: 'Евро 5 (К5)',
      logoName: 'Танеко',
      logoSrc: '/image 61.png',
      delivery: 'Самовывоз, автовоз',
      file: '/image 61.png',
      density: '0.837',
      tonDiscount: '-2500 ▾',
      tonPrice: '55.000 ₽',
      litrDiscount: '+2.15 ▴ ',
      litrPrice: '41.65 ₽'
    },
    {
      type: 'Газ',
      name: 'Евро 5 (К5)',
      logoName: 'Танеко',
      logoSrc: '/image 61.png',
      delivery: 'Самовывоз, автовоз',
      file: '/image 61.png',
      density: '0.837',
      tonDiscount: '-2500 ▾',
      tonPrice: '55.000 ₽',
      litrDiscount: '+2.15 ▴ ',
      litrPrice: '41.65 ₽'
    },
    {
      type: 'Масло',
      name: 'Евро 5 (К5)',
      logoName: 'Танеко',
      logoSrc: '/image 61.png',
      delivery: 'Самовывоз, автовоз',
      file: '/image 61.png',
      density: '0.837',
      tonDiscount: '-2500 ▾',
      tonPrice: '55.000 ₽',
      litrDiscount: '+2.15 ▴ ',
      litrPrice: '41.65 ₽'
    },
  ];

  // Функция для фильтрации карточек
  const filteredFuelCards = fuelCards.filter(card => 
    activeFilter === 'Все' || card.type === activeFilter
  );

  return (
    <>
      <div className={styles.heading}>
        <h2 styles={styles.h2}>Лучшее топливо</h2>
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

      <div className={styles.filters}>
        <button 
            className={`${styles.button} ${activeFilter === 'Все' ? styles.active : ''}`} 
            onClick={() => setActiveFilter('Все')} 
            type="button"
          >
            Все
        </button>
        <button 
          className={`${styles.button} ${activeFilter === 'Дизельное топливо' ? styles.active : ''}`} 
          onClick={() => setActiveFilter('Дизельное топливо')} 
          type="button"
        >
          Дизельное топливо
        </button>
        <button 
          className={`${styles.button} ${activeFilter === 'Удобрения' ? styles.active : ''}`} 
          onClick={() => setActiveFilter('Удобрения')} 
          type="button"
        >
          Удобрения
        </button>
        <button 
          className={`${styles.button} ${activeFilter === 'Бензин' ? styles.active : ''}`} 
          onClick={() => setActiveFilter('Бензин')} 
          type="button"
        >
          Бензин
        </button>
        <button 
          className={`${styles.button} ${activeFilter === 'Средства защиты' ? styles.active : ''}`} 
          onClick={() => setActiveFilter('Средства защиты')} 
          type="button"
        >
          Средства защиты
        </button>
        <button 
          className={`${styles.button} ${activeFilter === 'Газ' ? styles.active : ''}`} 
          onClick={() => setActiveFilter('Газ')} 
          type="button"
        >
          Газ
        </button>
        <button 
          className={`${styles.button} ${activeFilter === 'Мазут' ? styles.active : ''}`} 
          onClick={() => setActiveFilter('Мазут')} 
          type="button"
        >
          Мазут
        </button>
      </div>

      <div className={styles.fuelCards}>
        {/* Отображаем отфильтрованные карточки */}
        {filteredFuelCards.map((card, index) => (
          <FuelCard
            key={index}
            type={card.type}
            name={card.name}
            logoName={card.logoName}
            logoSrc={card.logoSrc}
            delivery={card.delivery}
            file={card.file}
            density={card.density}
            tonDiscount={card.tonDiscount}
            tonPrice={card.tonPrice}
            litrDiscount={card.litrDiscount}
            litrPrice={card.litrPrice}
          />
        ))}
        {/* если нет */}
        {!filteredFuelCards.length && (
          <h2>Нету карточек</h2>
        )}
      </div>
    </>
  );
}