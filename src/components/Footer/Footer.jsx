import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.mainCtr}>
            <div className={styles.topCtr}>
              <div className={styles.section}>
                <h4 className={styles.h4}>
                    Покупателям
                </h4>
                <div className={styles.footerLinksCtr}>
                    <Link className={styles.footerLink} href="#!">
                        Доставка
                    </Link>
                    <Link className={styles.footerLink} href="#!">
                        Каталог
                    </Link>
                    <Link className={styles.footerLink} href="#!">
                        Узнать о франизе 
                    </Link>
                    <Link className={styles.footerLink} href="#!">
                        Инвестиции
                    </Link>
                    <Link className={styles.footerLink} href="#!">
                        Заказать продукцию
                    </Link>
                </div>
              </div>
              <div className={styles.section}>
                <h4 className={styles.h4}>
                    О компании
                </h4>
                <div className={styles.footerLinksCtr}>
                    <Link className={styles.footerLink} href="#!">
                    Политика конфиденциальности
                    </Link>
                    <Link className={styles.footerLink} href="#!">
                    Персональные данные
                    </Link>
                    <Link className={styles.footerLink} href="#!">
                        Новости
                    </Link>
                </div>
              </div>
              <div className={styles.section}>
                <h4 className={styles.h4}>
                Контакты
                </h4>
                <div className={styles.footerLinksCtr}>
                    <Link className={styles.footerLink} href="#!">
                    Приволжский федеральный округ, Республика Башкортостан, городской округ Уфа, улица Минигали Губайдуллина, 2, корп. 1
                    </Link>
                    <Link className={styles.footerLink} href="#!">
                    infovnk@yandex.ru
                    </Link>
                    <Link className={styles.footerLink} href="#!">
                    8-999-999-00-00
                    </Link>
                </div>
              </div>
              <div className={`${styles.section} ${styles.last}`}>
                <div className={styles.footerLinksCtr}>
                    <Link className={styles.footerLink} href="#!">
                    Контакты
                    </Link>
                    <Link className={styles.footerLink} href="#!">
                    Реквизиты
                    </Link>
                    <Link className={styles.footerLink} href="#!">
                    Разместить рекламу
                    </Link>
                </div>
              </div>
            </div>
            <div className={styles.bottomCtr}>
                <div className={styles.apps}>
                    <Link href='#!'>
                        <img className={styles.img} src="/Google Play.png" alt="image" />
                    </Link>
                    <Link href='#!'>
                        <img className={styles.img} src="/App Store.png" alt="image" />
                    </Link>
                    <Link href='#!'>
                        <img className={styles.img} src="/AppGallery.png" alt="image" />
                    </Link>
                    <Link href='#!'>
                        <img className={styles.img} src="/Galaxy Store.png" alt="image" />
                    </Link>
                </div>  
                <div className={styles.socials}>
                    <Link href='#!'>
                        <img className={styles.img} src="/telegram.svg" alt="image" />
                    </Link>
                    <Link href='#!'>
                        <img className={styles.img} src="/whatsapp.svg" alt="image" />
                    </Link>
                    <Link href='#!'>
                        <img className={styles.img} src="/vk.svg" alt="image" />
                    </Link>
                    <Link href='#!'>
                        <img className={styles.img} src="/ok.png" alt="image" />
                    </Link>
                    <Link href='#!'>
                        <img className={styles.img} src="/yandex_zen.svg" alt="image" />
                    </Link>
                </div>
            </div>
        </div>
        <div className={styles.copyrightCtr}>
            <div className={styles.span}>
            © ВНК
            </div>
            <div className={styles.span}>
            2024
            </div>
        </div>
    </footer>
  )
}
