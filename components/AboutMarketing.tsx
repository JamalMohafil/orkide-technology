import React from 'react'
import AboutMarketingImg from '../public/assets/AboutMarketing/img1.png'
import Image from 'next/image';
const AboutMarketing = () => {
  return (
    <section className="bg-white flex justify-between items-center gap-0 px-32 py-24 ">
      <div className='w-3/6 flex flex-col gap-10'>
        <h1 className='text-5xl text-accent font-bold'>ما هي خدمات التسويق الرقمي التي نقدمها في اوركيدا تك؟</h1>
        <p className='text-2xl'>
          بصفتنا شركة متكاملة الخدمات ومن أفضل شركات التسويق الرقمي، فإن خبرتنا
          تغطي مجموعة من الخدمات الإلكترونية. يمكنك الاعتماد على خبرتنا الطويلة
          في تقديم نتائج مذهلة عبر عدد من قنوات التسويق الرقمي.
        </p>
      </div>
      <div className='w-2/5'>
        <Image src={AboutMarketingImg} width={470} height={470} alt="About Marketing Img" />
      </div>
    </section>
  );
}

export default AboutMarketing