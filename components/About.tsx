import Image from 'next/image';
import React from 'react'
import { FcStatistics } from "react-icons/fc";
import { PiUsersLight } from "react-icons/pi";
import { MdOutlineMonitorHeart } from "react-icons/md";

const About = () => {
  return (
    <section className="h-full py-12 max-lg:flex-col flex lg:flex-row items-center lg:gap-12 xl:gap-28 lg:px-10  xl:px-16">
      <div className="max-lg:w-2/5 max-sm:w-4/5 max-md:w-3/5 lg:w-3/6 xl:w-3/6 flex justify-center items-center">
        <Image
          src="/assets/aboutus/aboutus.png"
          width={600}
          height={600}
          alt="About Us"
        />
      </div>
      <div className="xl:w-2/5 max-xl:px-18 lg:w-3/5 lg:pl-20 max-lg:mt-10 max-md:mt-5 max-lg:items-center  flex flex-col gap-6">
        <div className="flex flex-col gap-1 mb-4 max-sm:px-4">
          <span className="mr-4 text-lg text-accent max-lg:mr-0 max-lg:mb-3 max-lg:text-center">
            من نحن{" "}
          </span>
          <h1 className="text-4xl max-lg:text-center max-md:text-2xl font-semibold ">
            عندما يجتمع الشغف مع الإبداع يتَّبلور فريق اوركيدا .
          </h1>
        </div>
        <hr className="h-[1px] max-lg:w-full  bg-slate-300" />
        <p className="text-slate-600 max-lg:text-center max-sm:text-sm max-lg:w-4/6 max-md:w-5/6">
          شركة اوركيدا تكنولوجي هي شركة تقدم خدمات برمجية و تسويقية متكاملة
          وفعالة والتي تهدف إلى تحقيق الوعي بالعلامة التجارية وفقا لاستراتيجية
          تضمن لك الظهور بفاعلية في السوق المستهدف والوصول إلى العملاء بالشكل
          الصحيح عبر قنوات التسويق الرقمي المختلفة بتكاليف تناسب ميزانيتك.
        </p>
        <div className="flex max-lg:w-4/6 max-md:w-5/6 flex-col gap-6  relative">
          <div className="self-stretch group flex flex-row items-start mb-2 ms-1 md:ms-8">
            <span
              className="mt-5 max-sm:w-16 max-sm:h-16 max-sm:mt-6 w-20 shrink-0 
            flex justify-center items-center border-[1px] rounded-full h-20 group-hover:border-slate-400  border-accent"
            >
              <MdOutlineMonitorHeart className="text-4xl max-sm:text-3xl transition-all group-hover:text-accent" />
            </span>
            <div className="flex flex-col gap-5 w-auto items-start">
              <div className="self-stretch flex flex-col gap-4 h-12 shrink-0 items-start">
                <h2 
                  className="md:text-3xl text-2xl font-medium text-accent transition-all
                   ms-2"
                >
                  نتائج مضمونة
                </h2>
                <hr className="border-solid border-accent group-hover:border-[#cfcfcf] self-stretch h-px shrink-0 border-t border-b-0 border-x-0 mt-2" />
              </div>
              <p className="text-[16px] text-[#555555] ms-4 w-5/6 max-sm:w-full max-sm:text-[15px]">
                نتائج أعمالنا جميعها مدروسة وتحمل نتائجاً مضمونة لتطوير أعمالكم
                وأفكاركم لإبرازها بشكلها الأفضل للسوق
              </p>
            </div>
          </div>

          <div className="relative group flex flex-row items-start mb-2 ms-1 md:ms-8">
            <span
              className="mt-5 max-sm:w-16 max-sm:h-16 max-sm:mt-6 w-20 shrink-0 flex justify-center items-center
             border-[1px] rounded-full h-20 group-hover:border-slate-400 border-accent"
            >
              <PiUsersLight className="text-4xl  max-sm:text-3xl group-hover:text-accent  transition-all" />
            </span>
            <div className="flex flex-col gap-5 w-auto items-start">
              <div className="self-stretch flex flex-col gap-4 h-12 shrink-0 items-start">
                <h2 className="md:text-3xl text-2xl font-medium transition-all  text-accent ms-2">
                  فريق من الخبراء
                </h2>
                <hr className="border-solid border-accent group-hover:border-[#cfcfcf] self-stretch h-px shrink-0 border-t border-b-0 border-x-0 mt-2" />
              </div>
              <p className="text-[16px] text-[#555555] ms-4 w-5/6 max-sm:w-full max-sm:text-[15px]">
                فريق عمل متنوع المواهب وأفضل الكوادر المتدربة بشكل فعال لتقديم
                الخدمات بأفضل شكل وصورة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About