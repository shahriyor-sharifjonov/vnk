import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
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
    <div className={styles.mobileBarPanel}>
        <Link href='#!' className={styles.link}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
            >
            <mask
                id="mask0_105_9671"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={17}
                height={16}
            >
                <rect x="0.5" width={16} height={16} fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_105_9671)">
                <path
                d="M6.83333 10.6667C5.62222 10.6667 4.59722 10.2472 3.75833 9.40833C2.91944 8.56944 2.5 7.54444 2.5 6.33333C2.5 5.12222 2.91944 4.09722 3.75833 3.25833C4.59722 2.41944 5.62222 2 6.83333 2C8.04444 2 9.06944 2.41944 9.90833 3.25833C10.7472 4.09722 11.1667 5.12222 11.1667 6.33333C11.1667 6.82222 11.0889 7.28333 10.9333 7.71667C10.7778 8.15 10.5667 8.53333 10.3 8.86667L14.0333 12.6C14.1556 12.7222 14.2167 12.8778 14.2167 13.0667C14.2167 13.2556 14.1556 13.4111 14.0333 13.5333C13.9111 13.6556 13.7556 13.7167 13.5667 13.7167C13.3778 13.7167 13.2222 13.6556 13.1 13.5333L9.36667 9.8C9.03333 10.0667 8.65 10.2778 8.21667 10.4333C7.78333 10.5889 7.32222 10.6667 6.83333 10.6667ZM6.83333 9.33333C7.66667 9.33333 8.375 9.04167 8.95833 8.45833C9.54167 7.875 9.83333 7.16667 9.83333 6.33333C9.83333 5.5 9.54167 4.79167 8.95833 4.20833C8.375 3.625 7.66667 3.33333 6.83333 3.33333C6 3.33333 5.29167 3.625 4.70833 4.20833C4.125 4.79167 3.83333 5.5 3.83333 6.33333C3.83333 7.16667 4.125 7.875 4.70833 8.45833C5.29167 9.04167 6 9.33333 6.83333 9.33333Z"
                fill="#266D00"
                />
            </g>
            </svg>

            Поиск
        </Link>
        <Link href='#!' className={styles.link}>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={17}
  height={16}
  viewBox="0 0 17 16"
  fill="none"
>
  <mask
    id="mask0_105_9676"
    style={{ maskType: "alpha" }}
    maskUnits="userSpaceOnUse"
    x={0}
    y={0}
    width={17}
    height={16}
  >
    <rect x="0.75" width={16} height={16} fill="#D9D9D9" />
  </mask>
  <g mask="url(#mask0_105_9676)">
    <path
      d="M9.41683 7.33325H8.0835C7.89461 7.33325 7.73627 7.26936 7.6085 7.14159C7.48072 7.01381 7.41683 6.85547 7.41683 6.66658C7.41683 6.4777 7.48072 6.31936 7.6085 6.19159C7.73627 6.06381 7.89461 5.99992 8.0835 5.99992H9.41683V4.66658C9.41683 4.4777 9.48072 4.31936 9.6085 4.19159C9.73627 4.06381 9.89461 3.99992 10.0835 3.99992C10.2724 3.99992 10.4307 4.06381 10.5585 4.19159C10.6863 4.31936 10.7502 4.4777 10.7502 4.66658V5.99992H12.0835C12.2724 5.99992 12.4307 6.06381 12.5585 6.19159C12.6863 6.31936 12.7502 6.4777 12.7502 6.66658C12.7502 6.85547 12.6863 7.01381 12.5585 7.14159C12.4307 7.26936 12.2724 7.33325 12.0835 7.33325H10.7502V8.66658C10.7502 8.85547 10.6863 9.01381 10.5585 9.14159C10.4307 9.26936 10.2724 9.33325 10.0835 9.33325C9.89461 9.33325 9.73627 9.26936 9.6085 9.14159C9.48072 9.01381 9.41683 8.85547 9.41683 8.66658V7.33325ZM3.41683 14.6666C3.05016 14.6666 2.73627 14.536 2.47516 14.2749C2.21405 14.0138 2.0835 13.6999 2.0835 13.3333V5.33325C2.0835 4.96659 2.21405 4.6527 2.47516 4.39159C2.73627 4.13047 3.05016 3.99992 3.41683 3.99992H4.75016V2.66659C4.75016 2.29992 4.88072 1.98603 5.14183 1.72492C5.40294 1.46381 5.71683 1.33325 6.0835 1.33325H14.0835C14.4502 1.33325 14.7641 1.46381 15.0252 1.72492C15.2863 1.98603 15.4168 2.29992 15.4168 2.66659V10.6666C15.4168 11.0333 15.2863 11.3471 15.0252 11.6083C14.7641 11.8694 14.4502 11.9999 14.0835 11.9999H12.7502V13.3333C12.7502 13.6999 12.6196 14.0138 12.3585 14.2749C12.0974 14.536 11.7835 14.6666 11.4168 14.6666H3.41683ZM6.0835 10.6666H14.0835V2.66659H6.0835V10.6666Z"
      fill="#266D00"
    />
  </g>
</svg>

            Объявление
        </Link>
        <Link href='#!' className={styles.link}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                >
                <mask
                    id="mask0_140_7229"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={16}
                    height={16}
                >
                    <rect width={16} height={16} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_140_7229)">
                    <path
                    d="M2.66683 13.3334C2.30016 13.3334 1.98627 13.2029 1.72516 12.9417C1.46405 12.6806 1.3335 12.3667 1.3335 12.0001V4.00008C1.3335 3.63341 1.46405 3.31953 1.72516 3.05841C1.98627 2.7973 2.30016 2.66675 2.66683 2.66675H13.3335C13.7002 2.66675 14.0141 2.7973 14.2752 3.05841C14.5363 3.31953 14.6668 3.63341 14.6668 4.00008V12.0001C14.6668 12.3667 14.5363 12.6806 14.2752 12.9417C14.0141 13.2029 13.7002 13.3334 13.3335 13.3334H2.66683ZM13.3335 5.33341L8.35016 8.45008C8.29461 8.48342 8.23627 8.50842 8.17516 8.52508C8.11405 8.54175 8.05572 8.55008 8.00016 8.55008C7.94461 8.55008 7.88627 8.54175 7.82516 8.52508C7.76405 8.50842 7.70572 8.48342 7.65016 8.45008L2.66683 5.33341V12.0001H13.3335V5.33341ZM8.00016 7.33342L13.3335 4.00008H2.66683L8.00016 7.33342ZM2.66683 5.50008V4.51675V4.53341V4.52508V5.50008Z"
                    fill="#266D00"
                    />
                </g>
                </svg>

            Сообщения
        </Link>
        <Link href='#!' className={styles.link}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                >
                <mask
                    id="mask0_4001_5077"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={25}
                    height={24}
                >
                    <rect x="0.5" width={24} height={24} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_4001_5077)">
                    <path
                    d="M12.5 20.9999L11.05 19.6999C9.36667 18.1832 7.975 16.8749 6.875 15.7749C5.775 14.6749 4.9 13.6874 4.25 12.8124C3.6 11.9374 3.14583 11.1332 2.8875 10.3999C2.62917 9.66657 2.5 8.91657 2.5 8.1499C2.5 6.58324 3.025 5.2749 4.075 4.2249C5.125 3.1749 6.43333 2.6499 8 2.6499C8.86667 2.6499 9.69167 2.83324 10.475 3.1999C11.2583 3.56657 11.9333 4.08324 12.5 4.7499C13.0667 4.08324 13.7417 3.56657 14.525 3.1999C15.3083 2.83324 16.1333 2.6499 17 2.6499C18.5667 2.6499 19.875 3.1749 20.925 4.2249C21.975 5.2749 22.5 6.58324 22.5 8.1499C22.5 8.91657 22.3708 9.66657 22.1125 10.3999C21.8542 11.1332 21.4 11.9374 20.75 12.8124C20.1 13.6874 19.225 14.6749 18.125 15.7749C17.025 16.8749 15.6333 18.1832 13.95 19.6999L12.5 20.9999ZM12.5 18.2999C14.1 16.8666 15.4167 15.6374 16.45 14.6124C17.4833 13.5874 18.3 12.6957 18.9 11.9374C19.5 11.1791 19.9167 10.5041 20.15 9.9124C20.3833 9.32074 20.5 8.73324 20.5 8.1499C20.5 7.1499 20.1667 6.31657 19.5 5.6499C18.8333 4.98324 18 4.6499 17 4.6499C16.2167 4.6499 15.4917 4.87074 14.825 5.3124C14.1583 5.75407 13.7 6.31657 13.45 6.9999H11.55C11.3 6.31657 10.8417 5.75407 10.175 5.3124C9.50833 4.87074 8.78333 4.6499 8 4.6499C7 4.6499 6.16667 4.98324 5.5 5.6499C4.83333 6.31657 4.5 7.1499 4.5 8.1499C4.5 8.73324 4.61667 9.32074 4.85 9.9124C5.08333 10.5041 5.5 11.1791 6.1 11.9374C6.7 12.6957 7.51667 13.5874 8.55 14.6124C9.58333 15.6374 10.9 16.8666 12.5 18.2999Z"
                    fill="#266D00"
                    />
                </g>
            </svg>
            Избранное
        </Link>
        <Link href='#!' className={styles.link}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
            >
            <mask
                id="mask0_4001_5095"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={25}
                height={24}
            >
                <rect x="0.5" width={24} height={24} fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_4001_5095)">
                <path
                d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                fill="#266D00"
                />
            </g>
            </svg>

            Корзина
        </Link>
    </div>
    </>
  )
}
