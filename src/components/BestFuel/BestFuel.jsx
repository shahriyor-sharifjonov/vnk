import React from 'react'
import styles from './BestFuel.module.scss'

export default function BestFuel() {
  return (
    <>
        <div className={styles.heading}>
            <h2>Другие объявления</h2>
            <Link href={'#!'}>
                ПОКАЗАТЬ ВСЕ →
            </Link>
        </div>
    </>
  )
}
