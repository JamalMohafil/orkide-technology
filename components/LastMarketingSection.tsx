import Image from 'next/image'
import React from 'react'
import FirstImg from '../public/assets/AboutMarketing/3img.png'
import SecondImg from '../public/assets/AboutMarketing/4img.png'
const LastMarketingSection = () => {
  return (
    <section
      className="max-md:flex-col max-md:gap-y-8 flex max-lg:flex-row max-lg:justify-between max-lg:px-0 lg:justify-between
 xl:justify-center items-center gap-0 
    lg:px-16 md:px-12 xl:px-24 py-12"
    >
      <div className="lg:w-[30%] max-md:w-2/6 max-sm:w-52 max-lg:w-[33%] xl:w-[30%] flex justify-center items-center">
        <Image src={SecondImg} width={300} height={300} alt="Second img" />
      </div>
      <div className="lg:mx-6 xl:w-[25%] max-md:w-5/6  max-lg:w-[30%]  lg:w-[35%] text-center justify-center items-center flex gap-5 flex-col">
        <h1 className="max-sm:text-[20px] max-lg:text-[23px] max-lg:leading-tight lg:text-4xl text-accent font-bold">
          هل تريد تخصيص شكل ظهورك في الإعلان على الانستقرام أو الفيس بوك؟
        </h1>
        <p className="max-lg:text-[16px] max-sm:text-[15px] max-lg:leading-tight text-[17px] leading-normal text-slate-600">
          سواء كنت تعتمد على التسويق على الفيس بوك أو التسويق على الانستغرام،
          فإنك تمتلك المجال للاستفادة من العديد من المميزات التي تزيد من نجاح
          عملية التسويق، ومن ذلك إمكانية تخصيص شكل ظهورك في الإعلان بحيث يكون
          إعلاناً ثابتاً أو مُدرجاً ضمن التجربة القصصية للانستغرام أو الفيس بوك
          أو غير ذلك من الخيارات، وهو الأمر الذي يزيد من مستوى التفاعل ويصب في
          نهاية المطاف بتحقيق النتائج المرجوة.
        </p>
      </div>
      <div className="lg:w-[30%] max-lg:w-[32%] max-sm:w-52 max-md:w-2/6 xl:w-[30%] flex justify-center items-center">
        <Image src={FirstImg} width={300} height={500} alt="first img" />
      </div>
    </section>
  );
}

export default LastMarketingSection