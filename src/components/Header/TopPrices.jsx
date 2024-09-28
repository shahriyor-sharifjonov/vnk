import React from 'react'
import styles from './Header.module.scss'

const Cost = ({name, price}) => {
    return (
        <div className={styles.topPrices__costCtr}>
            <div className={styles.costCtr__name}>
                {name}
            </div>
            <div className={styles.costCtr__cost}>
                {price}
            </div>
        </div>
    )
}


export default function TopPrices() {
  return (
    <div className={styles.topPrices}>
        <Cost name={'ДТЛ'} price={'42.54₽'} />
        <Cost name={'ДТЗ'} price={'64.54₽'} />
        <Cost name={'ДТМ'} price={'82.54₽'} />
        <Cost name={'АИ-92'} price={'52.17₽'} />
        <Cost name={'АИ-95'} price={'56.89₽'} />
    </div>
  )
}
