import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='mt-10'></div>
      <section className="bg-[#f3fafb] max-sm:px-1 px-5 h-full max-lg:py-2 max-lg:pb-16 py-10 max-md:pb-12  flex max-lg:justify-between max-lg:flex-col-reverse xl:justify-around max-xl:justify-around items-center">
        <div className="max-lg:w-full  w-3/5 xl:w-2/4 max-xl:w-2/4 max-md:space-y-6 max-lg:space-y-8 xl:space-y-16 max-xl:space-y-16 px-10">
          <h1 className="max-md:text-4xl max-sm:text-3xl max-lg:text-5xl max-lg:text-center max-lg:leading-tight xl:text-6xl max-xl:text-6xl font-bold max-md:text-center">
            <span className="text-accent ">اوركيدا تِــك: </span> صُـنّـاع
            الإبـداع فـي العالم الرقمي
          </h1>
          <p className="max-xl:w-3/4 xl:text-xl max-xl:text-xl xl:w-3/4 max-lg:w-full  max-lg:text-center">
            اختيارك الأمثل للحصول على كافة الخدمات الرقمية..في اوركيدا نقدم لكم
            خدمات برمجية و تسويقية لأعمالكم و نضمن لكم الظهور عبر أفضل نافذة
            الكترونية لعملائكم المستهدفين.
          </p>
          <div className="flex max-sm:flex-col flex-row gap-4 max-lg:justify-center items-center max-lg:mx-auto w-full">
            <button
              className="bg-accent hover:bg-[#0890c0]  transition shadow-lg rounded-lg
           max-lg:w-40 max-xl:w-52 xl:w-52 py-4 text-lg max-md:w-40   text-white"
            >
              خدماتنا
            </button>
            <button
              className="transition bg-white hover:bg-accent hover:text-white border-2 border-accent
         shadow-lg rounded-3xl max-xl:w-52 max-md:w-40  max-lg:w-40 xl:w-52 py-4 text-lg text-accent"
            >
              تواصل معنا
            </button>
          </div>
        </div>
        <div
          className="flex justify-center max-sm:w-[350px] max-md:w-[450px] max-lg:w-3/5 max-xl:w-3-6 xl:w-3/6 items-center
      "
        >
          <Image
            src="/assets/banner/banner.png"
            alt="logo"
            width={620}
            height={620}
          />
        </div>
      </section>
    </>
  );
}

export default Hero 