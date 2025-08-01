import React from 'react'
import AboutMarketingImg from '../public/assets/AboutMarketing/img1.png'
import Image from 'next/image';
const AboutMarketing = () => {
  return (
    <section className="bg-white flex max-[370px]:px-2 justify-between max-sm:px-4 max-md:justify-center max-md:gap-y-6 max-md:flex-col-reverse max-lg:px-10 items-center gap-0 px-32 py-24 ">
      <div className='w-3/6 flex max-md:w-5/6 flex-col max-md:text-center gap-10 max-sm:gap-4'>
        <h1 className='text-5xl max-[370px]:text-2xl  max-md:text-4xl max-sm:text-3xl text-accent font-bold'>ما هي خدمات التسويق الرقمي التي نقدمها في اوركيدا تك؟</h1>
        <p className='text-2xl max-sm:text-xl max-[370px]:text-lg'>
          بصفتنا شركة متكاملة الخدمات ومن أفضل شركات التسويق الرقمي، فإن خبرتنا
          تغطي مجموعة من الخدمات الإلكترونية. يمكنك الاعتماد على خبرتنا الطويلة
          في تقديم نتائج مذهلة عبر عدد من قنوات التسويق الرقمي.
        </p>
      </div>
      <div className='w-2/5 max-md:w-3/6 max-sm:w-4/6 max-[370px]:w-5/6'>
        <Image src={AboutMarketingImg} width={470} height={470} alt="About Marketing Img" />
      </div>
    </section>
  );
}

export default AboutMarketing