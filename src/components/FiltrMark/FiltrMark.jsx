'use client'
import React from 'react'
import styles from './FiltrMark.module.scss'
import Link from 'next/link'

export default function FiltrMark() {
  return (
    <>
    <div className={styles.marksSection}>
        <div className={styles.marksHeading}>
            <h4>Порулярные марки</h4>
            <h4 className={styles.all}>Все</h4>
        </div>
        <div className={styles.markCtrs}>
            <div className={styles.linkCtr}>
                <Link href={'#!'}>Daewoo</Link>
                <Link href={'#!'}>DongFeng</Link>
                <Link href={'#!'}>FAW</Link>
                <Link href={'#!'}>Foton</Link>
                <Link href={'#!'}>Hino</Link>
                <Link href={'#!'}>Howo</Link>
                <Link href={'#!'}>Hyundai</Link>
            </div>
            <div className={styles.linkCtr}>
                <Link href={'#!'}>Daewoo</Link>
                <Link href={'#!'}>DongFeng</Link>
                <Link href={'#!'}>FAW</Link>
                <Link href={'#!'}>Foton</Link>
                <Link href={'#!'}>Hino</Link>
                <Link href={'#!'}>Howo</Link>
                <Link href={'#!'}>Hyundai</Link>
            </div>
            <div className={styles.linkCtr}>
                <Link href={'#!'}>Daewoo</Link>
                <Link href={'#!'}>DongFeng</Link>
                <Link href={'#!'}>FAW</Link>
                <Link href={'#!'}>Foton</Link>
                <Link href={'#!'}>Hino</Link>
                <Link href={'#!'}>Howo</Link>
                <Link href={'#!'}>Hyundai</Link>
            </div>
            <div className={styles.linkCtr}>
                <Link href={'#!'}>Daewoo</Link>
                <Link href={'#!'}>DongFeng</Link>
                <Link href={'#!'}>FAW</Link>
                <Link href={'#!'}>Foton</Link>
                <Link href={'#!'}>Hino</Link>
                <Link href={'#!'}>Howo</Link>
                <Link href={'#!'}>Hyundai</Link>
            </div>
            <div className={styles.linkCtr}>
                <Link href={'#!'}>Daewoo</Link>
                <Link href={'#!'}>DongFeng</Link>
                <Link href={'#!'}>FAW</Link>
                <Link href={'#!'}>Foton</Link>
                <Link href={'#!'}>Hino</Link>
                <Link href={'#!'}>Howo</Link>
                <Link href={'#!'}>Hyundai</Link>
            </div>
            <div className={styles.linkCtr}>
                <Link href={'#!'}>Daewoo</Link>
                <Link href={'#!'}>DongFeng</Link>
                <Link href={'#!'}>FAW</Link>
                <Link href={'#!'}>Foton</Link>
                <Link href={'#!'}>Hino</Link>
                <Link href={'#!'}>Howo</Link>
                <Link href={'#!'}>Hyundai</Link>
            </div>
        </div>
    </div>
    <div className={styles.sortSection}>
        <span className={styles.sortText}>Сортировать по:</span>
        <button type="button" className={styles.sortBtn}>
            По умолчанию
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                >
                <mask
                    id="mask0_6178_2605"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={32}
                >
                    <rect width={32} height={32} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_6178_2605)">
                    <path
                    d="M16.0007 19.9999L9.33398 13.3333H22.6673L16.0007 19.9999Z"
                    fill="#1C1B1F"
                    />
                </g>
            </svg>
        </button>
        <div className={styles.menu}>
            <span className={styles.menuLink}>По умолчанию</span>
            <span className={styles.menuLink}>Цена по убыванию</span>
            <span className={styles.menuLink}>Цена по возрастанию</span>
            <span className={styles.menuLink}>По дате</span>
        </div>
    </div> 
    </>
  )
}
