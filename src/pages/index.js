import SliderAds from "@/components/Advertisements/SliderAds";
import Banner from "@/components/Banner/Banner";
import Category from "@/components/Category/Category";
import Header from "@/components/Header/Header";
import Videos from "@/components/Videos/Videos";
import Head from "next/head";
import Image from "next/image";
import Recomendation from "@/components/Recomendation/Recomendation"
import SecondBanner from "@/components/Advertisements/SecondBanner";
import Popular from "@/components/Popular/Popular";
import BestFuel from "@/components/BestFuel/BestFuel";
import OtherProducts from "@/components/OtherProducts/OtherProducts";
import Footer from "@/components/Footer/Footer";
import TopPrices from "@/components/Header/TopPrices";


export default function Home() {
  return (
    <>
      <Head>
        <title>ВНК</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Header />
      <TopPrices />
      <Category />
      <SliderAds />
      <Videos />
      <Recomendation />
      <SecondBanner />
      <Popular /> 
      <BestFuel />
      <OtherProducts />
      <Footer />
    </>
  );
}
