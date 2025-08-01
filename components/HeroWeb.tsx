import Image from 'next/image';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import LottieAnimation from './LottieAni';
import ProgrammingAni from '../public/assets/animation/programming.json'
const HeroWeb = () => {
  return (
    <>
      <div className="mt-10"></div>
      <section
        className="bg-[#f3fafb] lg:px-14 max-md:justify-center
       max-md:flex-col-reverse max-md:gap-10 
       md:justify-between md:px-10  lg:flex-row
           h-full  w-full py-32 flex 
          lg:justify-between xl:justify-around items-center"
      >
        <div
          className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center
        max-sm:px-6 max-md:px-16  lg:w-3/6 md:w-3/5 md:pl-10  xl:w-[50%] space-y-8"
        >
          <h1 className="xl:text-6xl text-4xl max-sm:text-2xl font-semibold text-accent mb-12 max-md:mb-0">
            إنشاء موقع الكتروني
          </h1>
          <p className="text-xl xl:text-3xl max-sm:text-[16px]">
            نستلهم من تجاربكم، تصاميم احترافية، نُنشئ بها منصات رقمية، تفي
            بمتطلباتكم، لاستخدامٍ عمليّ متوائمٍ مع جميع الأجهزة، وطرق العرض
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=905055781300&text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85+%D8%B9%D9%84%D9%8A%D9%83%D9%85+%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84+%D9%85%D8%B9%D9%83%D9%85+%D8%A8%D8%B4%D8%A3%D9%86+%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9+%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D8%A7%D8%AA+%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9&type=phone_number&app_absent=0"
            className="flex gap-2 w-max hover:bg-white hover:text-accent transition-all 
          border-transparent border-2 hover:border-accent  py-3 px-8 max-sm:px-6 
          max-sm:py-2 rounded-lg mt-5
           bg-accent items-start cursor-pointer justify-around text-lg 
           max-sm:items-center flex-row-reverse xl:text-2xl font-bold
            text-white"
          >
            طلب عرض سعر{" "}
            <FaWhatsapp className="xl:text-4xl text-3xl max-sm:text-2xl" />
          </a>
        </div>
        <div className="xl:w-[25%] md:w-3/6 max-sm:w-[90%] flex justify-center items-center">
          {/* <Image
            src={"/assets/web/web-design.png"}
            width={350}
            height={350}
            alt="web-design"
          /> */}
          <LottieAnimation animationData={ProgrammingAni} />
        </div>
      </section>
    </>
  );
}

export default HeroWeb