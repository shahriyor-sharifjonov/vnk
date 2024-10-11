'use client'
import React, { useState } from 'react'
import styles from './FiltrMark.module.scss'
import Link from 'next/link'


const CardLayout = ({imgSrc, name, redTag, greenTag, secondGreenTag, yellowTag, otherTags, price, descr, adress, date, companyImg, companyName, stars, feedback, firstLink, secondLink})=>{
    return (
        <div className={styles.truckCard}>
            <img src={imgSrc} className={styles.truckImg} alt="img" />
            <div className={styles.info}>
                <div className={styles.heading}>
                    <div className={styles.nameLike}>
                        <h4 className={styles.name}>{name}</h4>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 36 36"
                            fill="none"
                            >
                            <mask
                                id="mask0_6194_6028"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={36}
                                height={36}
                            >
                                <rect width={36} height={36} fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_6194_6028)">
                                <path
                                d="M18 31.4999L15.825 29.5499C13.3 27.2749 11.2125 25.3124 9.5625 23.6624C7.9125 22.0124 6.6 20.5311 5.625 19.2186C4.65 17.9061 3.96875 16.6999 3.58125 15.5999C3.19375 14.4999 3 13.3749 3 12.2249C3 9.87485 3.7875 7.91235 5.3625 6.33735C6.9375 4.76235 8.9 3.97485 11.25 3.97485C12.55 3.97485 13.7875 4.24985 14.9625 4.79985C16.1375 5.34985 17.15 6.12485 18 7.12485C18.85 6.12485 19.8625 5.34985 21.0375 4.79985C22.2125 4.24985 23.45 3.97485 24.75 3.97485C27.1 3.97485 29.0625 4.76235 30.6375 6.33735C32.2125 7.91235 33 9.87485 33 12.2249C33 13.3749 32.8063 14.4999 32.4188 15.5999C32.0313 16.6999 31.35 17.9061 30.375 19.2186C29.4 20.5311 28.0875 22.0124 26.4375 23.6624C24.7875 25.3124 22.7 27.2749 20.175 29.5499L18 31.4999ZM18 27.4499C20.4 25.2999 22.375 23.4561 23.925 21.9186C25.475 20.3811 26.7 19.0436 27.6 17.9061C28.5 16.7686 29.125 15.7561 29.475 14.8686C29.825 13.9811 30 13.0999 30 12.2249C30 10.7249 29.5 9.47485 28.5 8.47485C27.5 7.47485 26.25 6.97485 24.75 6.97485C23.575 6.97485 22.4875 7.3061 21.4875 7.9686C20.4875 8.6311 19.8 9.47485 19.425 10.4999H16.575C16.2 9.47485 15.5125 8.6311 14.5125 7.9686C13.5125 7.3061 12.425 6.97485 11.25 6.97485C9.75 6.97485 8.5 7.47485 7.5 8.47485C6.5 9.47485 6 10.7249 6 12.2249C6 13.0999 6.175 13.9811 6.525 14.8686C6.875 15.7561 7.5 16.7686 8.4 17.9061C9.3 19.0436 10.525 20.3811 12.075 21.9186C13.625 23.4561 15.6 25.2999 18 27.4499Z"
                                fill="#439F00"
                                />
                            </g>
                        </svg>

                    </div>
                    <div className={styles.tags}>
                        {redTag && (
                            <div className={styles.red}>лучшая цена</div>
                        )}
                        {greenTag && (
                            <div className={styles.green}>рассрочка</div>
                        )}
                        {secondGreenTag && (
                            <div className={styles.secondGreen}>в кредит</div>
                        )}
                        {yellowTag && (
                            <div className={styles.yellowTag}>хит сезона</div>
                        )}
                        {otherTags && (
                            <div className={styles.otherTags}>+ 3</div>
                        )}
                    </div>
                    <h4 className={styles.price}>{price}</h4>
                </div>

                <div className={styles.descr} dangerouslySetInnerHTML={{__html: descr}}/>
                <div className={styles.footerInfo}>
                    <span className={styles.adress}>{adress}</span>
                    <span className={styles.adress}>{date}</span>
                </div>
            </div>
            <div className={styles.companyInfo}>
                <div className={styles.companyHeading}>
                    <img src={companyImg} className={styles.companyImg} alt="img" />
                    <div className={styles.companyName}>{companyName}</div>
                    <div className={styles.feedback}>
                        <div className={styles.starsScore}>
                            <span className={styles.score}>{stars}.0</span>
                            <div className={styles.stars}>
                                {Array(stars).fill(0).map((index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <mask
                                        id="mask0_6194_6046"
                                        style={{ maskType: "alpha" }}
                                        maskUnits="userSpaceOnUse"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        >
                                        <rect width={20} height={20} fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_6194_6046)">
                                        <path
                                            d="M4.85352 17.5001L6.20768 11.6459L1.66602 7.70841L7.66602 7.18758L9.99935 1.66675L12.3327 7.18758L18.3327 7.70841L13.791 11.6459L15.1452 17.5001L9.99935 14.3959L4.85352 17.5001Z"
                                            fill="#FFF237"
                                        />
                                        </g>
                                    </svg>
                                ))}
                            </div>

                        </div>
                        <div className={styles.comments}>{feedback}</div>
                    </div>
                </div>
                <div className={styles.btns}>
                    <Link href={'#!'} className={styles.callBtn}>
                        <button type='button'>Позвонить</button>
                    </Link>
                    <Link href={'#!'} className={styles.textBtn}>
                        <button type='button'>Написать</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function FiltrMark() {
    const [filtrState, setFilterState] = useState('По умолчанию')
    const [ifOpen, setIfOpen] = useState(false)
    
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
    <div className={`${styles.sortSection} ${ifOpen && styles.active}`}>
        <span className={styles.sortText}>Сортировать по:</span>
        <button type="button" className={styles.sortBtn} onClick={()=>{setIfOpen(!ifOpen)}}>
            {filtrState}
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
        {ifOpen && (
            <div className={styles.menu}>
                <span onClick={()=>{setIfOpen(false); setFilterState('По умолчанию')}} className={styles.menuLink}>По умолчанию</span>
                <span onClick={()=>{setIfOpen(false); setFilterState('Цена по убыванию')}} className={styles.menuLink}>Цена по убыванию</span>
                <span onClick={()=>{setIfOpen(false); setFilterState('Цена по возрастанию')}} className={styles.menuLink}>Цена по возрастанию</span>
                <span onClick={()=>{setIfOpen(false); setFilterState('По дате')}} className={styles.menuLink}>По дате</span>
            </div>
        )}
    </div> 
    <div className={styles.cardsCtr}>
        <CardLayout 
            imgSrc={'/truckImg.png'}
            name={'Foton Aumark S85, 2024'}
            secondGreenTag={true}
            price={'4 150 000 с НДС'}
            descr={'Шасси Foton S085, 4х2; 152 л. С., 2023 год. Tеxникa в наличии! <br /> Уcпейте до повышения утиль. Сбoрa! Субсидия дo 300 000 р.<br /> При пoкупкe в лизинг в Агат; пoмoщь c пoдбoром лизинговой компaнии и выбоpом уcловий; Hдc для юp. Лиц; Почему слeдуeт обpатитьcя в Агат Техникa для бизнeсa: oтдаём тeхнику нa выгoдных условияx. У Bас уже eсть предложение от дpугогo дилеpа? Звоните и мы его улучшим!'}
            adress={'Домодедово'}
            date={'Опубликовано 21 августа 2024 г'}
            companyImg={'/companyImg.png'}
            companyName={'АГАТ Техника для бизнеса'}
            stars={5}
            feedback={'12 отзывов'}
            firstLink={'#!'}
            secondLink={'#!'}
        />
    </div>
    </>
  )
}
