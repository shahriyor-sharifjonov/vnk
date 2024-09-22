import React from 'react'
import styles from './BestFuel.module.scss'

export default function FuelCard({name, type, logoSrc, logoName, delivery, file, density, tonPrice, tonDiscount, litrPrice, litrDiscount }){
    return (
      <>
        <div className={styles.card}>
            <div className={styles.cardHeading}>
                <div className={styles.desc}>
                <p className={styles.type}>
                    {type}
                </p>
                <h3 className={styles.name}>
                    {name}
                </h3>
                </div>
                <div className={styles.logo}>
                <img className={styles.logoSrc} draggable={false} src={logoSrc} alt="" />
                <h4 className={styles.logoName}>{logoName}</h4>
                </div>
            </div>
            <div className={styles.line}></div>
            {/* delivery */}
            <div className={styles.container}>
                <div className={styles.ctrName}>
                    Доставка
                </div>
                <div className={styles.delivery}>
                    {delivery}
                </div>
            </div>
            {/* file */}
            <div className={styles.container}>
                <div className={styles.ctrName}>
                Сертификат
                </div>
                <div className={styles.file}>
                    <a href={file} className={styles.fileLink} download>
                        <svg
                            className={styles.fileSvg}
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <mask
                                id="mask0_4031_13194"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={24}
                                height={24}
                            >
                                <rect width={24} height={24} fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_4031_13194)">
                                <path
                                d="M8 18H16V16H8V18ZM8 14H16V12H8V14ZM6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H14L20 8V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM13 9V4H6V20H18V9H13Z"
                                fill="#142B02"
                                />
                            </g>
                        </svg>

                    </a>
                </div>
            </div>
            {/* density */}
            <div className={styles.container}>
                <div className={styles.ctrName}>
                Плотность
                </div>
                <div className={styles.delivery}>
                    {density}
                </div>
            </div>
            {/* price for each ton */}
            <div className={styles.container}>
                <div className={styles.ctrName}>
                Цена за тонну
                </div>
                <div className={styles.tonPrice}>
                    <span className={styles.mainPrice}>{tonPrice}</span>
                    <span className={styles.discPrice}>{tonDiscount}</span>
                </div>
            </div>
            {/* price for each litr */}
            <div className={styles.container}>
                <div className={styles.ctrName}>
                    Цена за литр
                </div>
                <div className={styles.tonPrice}>
                    <span className={styles.mainPrice}>{litrPrice}</span>
                    <span className={styles.updPrice}>{litrDiscount}</span>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footer}>
                <div className={styles.mainPrice}>
                  {tonPrice}
                </div>
                <button type="button" className={styles.button}>
                    <svg
                        className={styles.btnSgv}
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    >
    <mask
        id="mask0_4031_13216"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={21}
        height={20}
    >
        <rect x="0.5" width={20} height={20} fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_4031_13216)">
        <path
        d="M9.75 10.75H6.25C6.0375 10.75 5.85938 10.6785 5.71563 10.5356C5.57188 10.3927 5.5 10.2156 5.5 10.0044C5.5 9.79313 5.57188 9.61458 5.71563 9.46875C5.85938 9.32292 6.0375 9.25 6.25 9.25H9.75V5.75C9.75 5.5375 9.82146 5.35937 9.96438 5.21562C10.1073 5.07187 10.2844 5 10.4956 5C10.7069 5 10.8854 5.07187 11.0312 5.21562C11.1771 5.35937 11.25 5.5375 11.25 5.75V9.25H14.75C14.9625 9.25 15.1406 9.32146 15.2844 9.46438C15.4281 9.60729 15.5 9.78438 15.5 9.99563C15.5 10.2069 15.4281 10.3854 15.2844 10.5312C15.1406 10.6771 14.9625 10.75 14.75 10.75H11.25V14.25C11.25 14.4625 11.1785 14.6406 11.0356 14.7844C10.8927 14.9281 10.7156 15 10.5044 15C10.2931 15 10.1146 14.9281 9.96875 14.7844C9.82292 14.6406 9.75 14.4625 9.75 14.25V10.75Z"
        fill="#142B02"
        />
    </g>
                    </svg>
                    Купить
                </button>
            </div>
        </div>
      </>
    )
  }
  
