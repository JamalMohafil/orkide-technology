'use client'
import React from 'react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import LottieAnimation from './LottieAni';
import { useMediaQuery } from "react-responsive";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

import MarketingAni from '../public/assets/animation/marketing.json'
const MarketingHero = () => {
      const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <>
      <div className="mt-10"></div>
      <section className="bg-[#f3fafb]  max-sm:flex-col-reverse max-sm:gap-y-10 max-sm:px-6 lg:flex-row sm:flex-col-reverse sm:gap-y-16 xl:px-20 py-32 flex lg:justify-between lg:px-12 xl:justify-around items-center">
        <div
          className="flex sm:justify-center max-sm:items-center max-sm:justify-center max-sm:text-center sm:items-center lg:text-right lg:justify-start lg:items-start 
        sm:text-center flex-col gap-6 lg:w-3/6 xl:w-2/5 sm:w-5/6"
        >
          <h1 className="max-sm:text-2xl md:leading-[1.15] lg:text-[2.25rem] sm:text-[2.25rem] xl:text-[3rem] font-bold text-accent">
            التسويق على منصات التواصل الاجتماعي - وسيلة فعّالة للنهوض باعمالك
          </h1>
          <p className="text-2xl max-sm:text-xl text-slate-600">
            دع خبراءنا يتولون مهمة زيادة الوصول والانتشار لعلامتك التجارية من
            خلال التسويق على منصات التواصل الإجتماعي
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=905055781300&text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85+%D8%B9%D9%84%D9%8A%D9%83%D9%85+%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84+%D9%85%D8%B9%D9%83%D9%85+%D8%A8%D8%B4%D8%A3%D9%86+%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9+%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D8%A7%D8%AA+%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9&type=phone_number&app_absent=0"
            className="flex gap-2  w-max hover:bg-white hover:text-accent transition-all 
          border-transparent border-2 hover:border-accent  py-3 px-8 max-sm:px-6 
          max-sm:py-2 rounded-lg mt-5 max-sm:text-xl
           bg-accent items-start cursor-pointer justify-around text-lg 
           max-sm:items-center flex-row-reverse lg:text-2xl xl:text-2xl font-bold
            text-white"
          >
            طلب عرض سعر{" "}
            <FaWhatsapp className="xl:text-4xl lg:text-4xl text-3xl max-sm:text-3xl" />
          </a>
          <div className='flex md:gap-12 gap-6 justify-between items-center'>
            <span className='w-14 text-3xl h-14 cursor-pointer hover:bg-white hover:text-black border-2 border-transparent hover:border-accent transition-all hover:scale-110 justify-center flex items-center text-white bg-accent rounded-lg'><FaWhatsapp/></span>
            <span className='w-14 text-3xl h-14 cursor-pointer hover:bg-white hover:text-black border-2 border-transparent hover:border-accent transition-all hover:scale-110 justify-center flex items-center text-white bg-accent rounded-lg'><FaInstagram/></span>
            <span className='w-14 text-3xl h-14 cursor-pointer hover:bg-white hover:text-black border-2 border-transparent hover:border-accent transition-all hover:scale-110 justify-center flex items-center text-white bg-accent rounded-lg'><FaFacebook/></span>
          </div>
        </div>
        <div className="lg:w-2/5 xl:w-2/6 max-sm:w-4/6 sm:w-5/6">
          <LottieAnimation
            animationData={MarketingAni}
            height={isSmallScreen ? 300 : 400}
            width={isSmallScreen ? 300 : 400}
          />
        </div>
      </section>
    </>
  );
}

export default MarketingHero