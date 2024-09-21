import React from 'react'
import styles from './Recomendation.module.scss'



export function ProductCard({name, imgSrc, price, address, date}) {
    return (
        <div className={styles.productCard}>
            <div className={styles.cardImgCtr}>
                <img className={styles.cardImg} src={imgSrc} alt="" />
                <div className={styles.tags}>
                    <div className={styles.red}>лучшая цена</div>
                    <div className={styles.green}>рассрочка</div>
                </div>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardDescr}>
                    <div className={styles.productName}>
                        {name}
                    </div>
                    <button type='button' className={styles.like}>
                        <svg
                            className={styles.likeSvg}
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                        <mask
                            id="mask0_4015_15346"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                        >
                            <rect width={20} height={20} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_4015_15346)">
                            <path
                            d="M10 17L8.95833 16.0625C7.56944 14.8264 6.42361 13.7674 5.52083 12.8854C4.61806 12.0035 3.90625 11.2188 3.38542 10.5312C2.86458 9.84375 2.50347 9.21528 2.30208 8.64583C2.10069 8.07639 2 7.49306 2 6.89583C2 5.65972 2.42361 4.61806 3.27083 3.77083C4.11806 2.92361 5.15972 2.5 6.39583 2.5C7.07639 2.5 7.73611 2.64583 8.375 2.9375C9.01389 3.22917 9.55556 3.63889 10 4.16667C10.4444 3.63889 10.9861 3.22917 11.625 2.9375C12.2639 2.64583 12.9236 2.5 13.6042 2.5C14.8403 2.5 15.8819 2.92361 16.7292 3.77083C17.5764 4.61806 18 5.65972 18 6.89583C18 7.49306 17.9028 8.06944 17.7083 8.625C17.5139 9.18056 17.1562 9.79861 16.6354 10.4792C16.1146 11.1597 15.3993 11.9479 14.4896 12.8438C13.5799 13.7396 12.4167 14.8264 11 16.1042L10 17ZM10 14.9792C11.2917 13.8264 12.3542 12.8438 13.1875 12.0312C14.0208 11.2188 14.684 10.5104 15.1771 9.90625C15.6701 9.30208 16.0139 8.76389 16.2083 8.29167C16.4028 7.81944 16.5 7.35417 16.5 6.89583C16.5 6.07639 16.2222 5.38889 15.6667 4.83333C15.1111 4.27778 14.4236 4 13.6042 4C13.1181 4 12.6632 4.10069 12.2396 4.30208C11.816 4.50347 11.4514 4.78472 11.1458 5.14583L10.4167 6H9.58333L8.85417 5.14583C8.54861 4.78472 8.17708 4.50347 7.73958 4.30208C7.30208 4.10069 6.85417 4 6.39583 4C5.57639 4 4.88889 4.27778 4.33333 4.83333C3.77778 5.38889 3.5 6.07639 3.5 6.89583C3.5 7.35417 3.59028 7.80903 3.77083 8.26042C3.95139 8.71181 4.28125 9.23611 4.76042 9.83333C5.23958 10.4306 5.89931 11.1389 6.73958 11.9583C7.57986 12.7778 8.66667 13.7847 10 14.9792Z"
                            fill="#439F00"
                            />
                        </g>
                        </svg>
                    </button>
                </div>
                <div className={styles.price}>
                    {price} руб
                </div>
                <div className={styles.address}>
                    {address}
                </div>
                <div className={styles.date}>
                    {date}
                </div>
            </div>
        </div>
    )
}

export default function Recomendation() {
  return (
    <>
        <h2 className={styles.heading}>
            Рекомендации для вас
        </h2>    
        <div className={styles.recomendsCtr}>
            <div className={styles.recomendsCards}>
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
                <ProductCard 
                    name={'Универсальный трактор TFE-895'}
                    imgSrc={'/ImageProduct.png'}
                    price={'7 000 000'}
                    address={'г. Краснодар, ул. Пушкина, 59'}
                    date={'25 августа 2024'}
                />
            </div>
            <div className={styles.adsBanner}>
                Тут будет ваша реклама
            </div>
        </div>
    </>
  )
}
