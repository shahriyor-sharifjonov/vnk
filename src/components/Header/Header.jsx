import React from 'react'

import styles from './Header.module.scss'
import Link from 'next/link'

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

const Header = () => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.header__topContainer}>
                <div className={styles.header__topContainer__locationBar}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    >
                    <mask
                        id="mask0_4001_4962"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={18}
                        height={18}
                    >
                        <rect width={18} height={18} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_4001_4962)">
                        <path
                        d="M8.99994 9C9.41244 9 9.76556 8.85312 10.0593 8.55937C10.3531 8.26562 10.4999 7.9125 10.4999 7.5C10.4999 7.0875 10.3531 6.73437 10.0593 6.44062C9.76556 6.14687 9.41244 6 8.99994 6C8.58744 6 8.23431 6.14687 7.94056 6.44062C7.64681 6.73437 7.49994 7.0875 7.49994 7.5C7.49994 7.9125 7.64681 8.26562 7.94056 8.55937C8.23431 8.85312 8.58744 9 8.99994 9ZM8.99994 14.5125C10.5249 13.1125 11.6562 11.8406 12.3937 10.6969C13.1312 9.55312 13.4999 8.5375 13.4999 7.65C13.4999 6.2875 13.0656 5.17187 12.1968 4.30312C11.3281 3.43437 10.2624 3 8.99994 3C7.73744 3 6.67181 3.43437 5.80306 4.30312C4.93431 5.17187 4.49994 6.2875 4.49994 7.65C4.49994 8.5375 4.86869 9.55312 5.60619 10.6969C6.34369 11.8406 7.47494 13.1125 8.99994 14.5125ZM8.99994 16.5C6.98744 14.7875 5.48431 13.1969 4.49056 11.7281C3.49681 10.2594 2.99994 8.9 2.99994 7.65C2.99994 5.775 3.60306 4.28125 4.80931 3.16875C6.01556 2.05625 7.41244 1.5 8.99994 1.5C10.5874 1.5 11.9843 2.05625 13.1906 3.16875C14.3968 4.28125 14.9999 5.775 14.9999 7.65C14.9999 8.9 14.5031 10.2594 13.5093 11.7281C12.5156 13.1969 11.0124 14.7875 8.99994 16.5Z"
                        fill="#868686"
                        />
                    </g>
                    </svg>

                    <div className={styles.locationBar__name}>
                        <span>Кемерово</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <mask
                                id="mask0_4001_4967"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={16}
                                height={16}
                            >
                            <rect width={16} height={16} fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_4001_4967)">
                            <path
                                d="M7.99987 9.98337C7.91098 9.98337 7.82765 9.96948 7.74987 9.9417C7.67209 9.91392 7.59987 9.8667 7.5332 9.80003L4.46654 6.73337C4.34431 6.61114 4.2832 6.45559 4.2832 6.2667C4.2832 6.07781 4.34431 5.92225 4.46654 5.80003C4.58876 5.67781 4.74431 5.6167 4.9332 5.6167C5.12209 5.6167 5.27765 5.67781 5.39987 5.80003L7.99987 8.40003L10.5999 5.80003C10.7221 5.67781 10.8776 5.6167 11.0665 5.6167C11.2554 5.6167 11.411 5.67781 11.5332 5.80003C11.6554 5.92225 11.7165 6.07781 11.7165 6.2667C11.7165 6.45559 11.6554 6.61114 11.5332 6.73337L8.46654 9.80003C8.39987 9.8667 8.32765 9.91392 8.24987 9.9417C8.17209 9.96948 8.08876 9.98337 7.99987 9.98337Z"
                                fill="#868686"
                            />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className={styles.header__topContainer__navBar}>
                    <Link href="#!" className={styles.navBar__link}>Франшиза</Link>
                    <Link href="#!" className={styles.navBar__link}>Инвестиции</Link>
                    <Link href="#!" className={styles.navBar__link}>Мобильное приложение</Link>
                    <Link href="#!" className={`${styles.navBar__link} ${styles.navBar__greenBtn}`}>Разместить объявление</Link>
                </div>
            </div>
            <div className={styles.header__bottomContainer}>
                <div className={styles.header__bottomContainer__logoCtr}>
                <Link href='#!' className={styles.logoCtr__link}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <mask
                            id="mask0_4001_5086"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={24}
                            height={24}
                        >
                            <rect width={24} height={24} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_4001_5086)">
                            <path
                            d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z"
                            fill="#266D00"
                            />
                        </g>
                        </svg>

                        Войти
                    </Link>
                    <Link href='#!' className={styles.logo}>
                        <img src="/Logo.png" alt="" />
                    </Link>
                    <Link href='#!' className={styles.logoCtr__catalogBtn}>
                        <svg
                            className={styles.active}
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <mask
                                id="mask0_6004_2068"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={24}
                                height={24}
                            >
                                <rect width={24} height={24} fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_6004_2068)">
                                <path
                                d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                                fill="#1C1B1F"
                                />
                            </g>
                            </svg>

                        <svg
                            className={styles.notActive}
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <mask
                                id="mask0_4001_4993"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={24}
                                height={24}
                            >
                                <rect width={24} height={24} fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_4001_4993)">
                                <path d="M3 18V16H15V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#142B02" />
                            </g>
                        </svg>
                        <span>Каталог</span>
                    </Link>
                </div>
                <div className={styles.header__bottomContainer__searchWrp}>
                    <div className={styles.searchWrp__searchCtr}>
                        <input type="text" placeholder={'Найти'} className={styles.searchCtr__searchInput} />
                        <div className={styles.searchCtr__searchBtn}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <mask
                                    id="mask0_4001_5072"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                >
                                    <rect width={20} height={20} fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_4001_5072)">
                                    <path
                                    d="M7.93234 13.0126C6.50929 13.0126 5.30415 12.5191 4.31693 11.532C3.32985 10.5448 2.8363 9.33965 2.8363 7.9166C2.8363 6.49354 3.32985 5.2884 4.31693 4.30118C5.30415 3.3141 6.50929 2.82056 7.93234 2.82056C9.3554 2.82056 10.5605 3.3141 11.5478 4.30118C12.5348 5.2884 13.0284 6.49354 13.0284 7.9166C13.0284 8.51174 12.9285 9.08014 12.7288 9.62181C12.5289 10.1635 12.2623 10.6346 11.929 11.0351L16.724 15.8301C16.8394 15.9454 16.8985 16.0904 16.9011 16.2651C16.9037 16.4399 16.8447 16.5876 16.724 16.7083C16.6033 16.829 16.4569 16.8893 16.2848 16.8893C16.1129 16.8893 15.9666 16.829 15.8459 16.7083L11.0509 11.9133C10.6342 12.2573 10.1551 12.5265 9.61339 12.721C9.07172 12.9154 8.51137 13.0126 7.93234 13.0126ZM7.93234 11.7628C9.00609 11.7628 9.91554 11.3902 10.6607 10.6449C11.406 9.89979 11.7786 8.99035 11.7786 7.9166C11.7786 6.84285 11.406 5.9334 10.6607 5.18826C9.91554 4.44299 9.00609 4.07035 7.93234 4.07035C6.85859 4.07035 5.94915 4.44299 5.20401 5.18826C4.45873 5.9334 4.0861 6.84285 4.0861 7.9166C4.0861 8.99035 4.45873 9.89979 5.20401 10.6449C5.94915 11.3902 6.85859 11.7628 7.93234 11.7628Z"
                                    fill="#183203"
                                    />
                                </g>
                            </svg>

                        </div>
                    </div>
                </div>
                <div className={styles.header__bottomContainer__linksCtr}>
                    <Link href='#!' className={styles.linksCtr__link}>
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
                    <Link href='#!' className={styles.linksCtr__link}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <mask
                            id="mask0_4001_5086"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={24}
                            height={24}
                        >
                            <rect width={24} height={24} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_4001_5086)">
                            <path
                            d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z"
                            fill="#266D00"
                            />
                        </g>
                        </svg>

                        Войти
                    </Link>
                    <Link href='#!' className={styles.linksCtr__link}>
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
            </div>
        </header>
        <div className={styles.topPrices}>
           <Cost name={'ДТЛ'} price={'42.54₽'} />
           <Cost name={'ДТЗ'} price={'64.54₽'} />
           <Cost name={'ДТМ'} price={'82.54₽'} />
           <Cost name={'АИ-92'} price={'52.17₽'} />
           <Cost name={'АИ-95'} price={'56.89₽'} />
            
        </div>
        </>
    )
}

export default Header