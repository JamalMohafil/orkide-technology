import Image from 'next/image'
import React from 'react'
import WhyWeUseDigitalMarketingSectionImg from '../public/assets/AboutMarketing/2img.png'
const WhyWeUseDigitalMarketingSection = () => {
  return (
    <section className="flex max-lg:flex-col  max-lg:gap-y-6 justify-center items-center gap-0 lg:px-12 xl:px-30 py-20 bg-white">
      <div className='lg:w-3/6 xl:w-2/5 max-lg:w-5/6 max-lg:justify-center max-lg:flex max-lg:items-center'>
        <Image
          src={WhyWeUseDigitalMarketingSectionImg}
          width={500}
          height={500}
          alt="Why We Use Digital Marketing"
        />
      </div>
      <div className='flex flex-col max-[480px]:w-full max-[480px]:px-1 max-[480px]:gap-4 gap-6 xl:w-2/6 lg:w-3/6 max-lg:w-4/6 max-md:w-5/6 max-lg:justify-center max-lg:items-center max-lg:text-center'>
        <h1 className='text-4xl max-[480px]:text-2xl text-accent font-bold'>لماذا نستخدم مواقع التواصل للتسويق لخدماتنا ومنتجاتنا؟</h1>
        <p className='text-[17px] leading-normal max-[470px]:text-[15px]'>
          في عصر التطوّر الرقمي لم يعد التسويق باستخدام الوسائل التقليدية
          كالجرائد والإذاعة والتلفزيون مجدياً كما كان في السابق؛ ويعود ذلك لكون
          الاهتمام الأكبر اليوم يتجه نحو وسائل التواصل الاجتماعي، الأمر الذي جعل
          من حضور الأعمال المختلفة إلكترونياً أمراً حتمياً وضرورياً للثبات
          والازدهار، وبسبب التواجد الضخم للأفراد من مختلف الأعمال ومن جميع انحاء
          العالم على مواقع التواصل الاجتماعي كالفيس بوك والانستقرام؛ فهم يشكلون
          حوالي 89% من عدد مستخدمي شبكة الإنترنت الإجمالي، يمكن القول بأن
          التسويق عبرهما أصبح الوسيلة الأقوى والأكثر فعالية في استهداف العملاء
          المحتملين، وزيادة الوعي بالعلامة التجارية وخلق صورة إيجابية حولها،
          بالإضافة لتشكيل نظام تفاعلي ما بين العلامة التجارية والعملاء لمعرفة
          الآراء والرغبات والتفضيلات التي يمكن الأخذ بها للتحسين والتقدّم
        </p>
      </div>
    </section>
  );
}

export default WhyWeUseDigitalMarketingSection