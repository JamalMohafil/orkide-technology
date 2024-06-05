import Image from 'next/image';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

const HeroWeb = () => {
  return (
    <>
      <div className="mt-10"></div>
      <section className="bg-[#f3fafb] lg:px-14 max-md:justify-center
       max-md:flex-col-reverse max-md:gap-10 
       md:justify-between md:px-10  lg:flex-row
           h-full  w-full py-32 flex 
          lg:justify-between xl:justify-around items-center">
        <div className='max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center
        max-sm:px-6 max-md:px-16  lg:w-3/6 md:w-3/5 md:pl-10  xl:w-[50%] space-y-8'>
          <h1 className='text-4xl max-sm:text-2xl font-semibold text-accent mb-5 max-md:mb-0'>إنشاء موقع الكتروني</h1>
          <p className='text-xl xl:text-2xl max-sm:text-[16px]'>
            نستلهم من تجاربكم، تصاميم احترافية، نُنشئ بها منصات رقمية، تفي
            بمتطلباتكم، لاستخدامٍ عمليّ متوائمٍ مع جميع الأجهزة، وطرق العرض
          </p>
          <a href='tel:+905055781300' className='flex gap-2 w-max hover:bg-white hover:text-accent transition-all 
          border-transparent border-2 hover:border-accent  py-3 px-8 max-sm:px-6 max-sm:py-2 rounded-lg
           bg-accent items-start cursor-pointer justify-around text-lg max-sm:items-center flex-row-reverse
            text-white'>طلب عرض سعر <FaWhatsapp className='text-3xl max-sm:text-2xl'/></a>
        </div>
        <div className='xl:w-[25%] md:w-2/5 max-sm:w-[90%]'>
          <Image
            src={"/assets/web/web-design.png"}
            width={350}
            height={350}
            alt="web-design"
          />
        </div>
      </section>
    </>
  );
}

export default HeroWeb