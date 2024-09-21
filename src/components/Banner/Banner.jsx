import React from 'react'

import styles from './Banner.module.scss'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.img1}>
                <img src="/banner-1.png" alt="" draggable={false}/>
            </div>
            <div className={styles.img2}>
                <img src="/banner-2.png" alt="" draggable={false}/>
            </div>
            <span className={styles.tag}>Реклама</span>
            <p className={styles.title}>Действует акция на всю продукцию категории спец. техника 5%</p>
        </div>
    )
}

export default Banner