import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { IoMdHappy } from "react-icons/io";

const Consulting = () => {
  return (
    <section className="h-full p-10 max-sm:px-0  max-sm:p-6 max-sm:py-16 max-xl:p-12 py-24">
      <div className="flex max-md:flex-col max-md:items-center max-md:gap-3 justify-between items-start">
        <div className="flex flex-col max-md:text-center gap-1 mb-4 max-sm:px-4">
          <span className="mr-4 text-lg text-accent max-lg:mr-0 max-lg:mb-3  ">
            من نحن{" "}
          </span>
          <h1 className="text-5xl  max-md:text-2xl xs:w-4/6 lg:w-5/6 max-md:w-6/6  md:w-5/6 md:text-3xl">
            نقدم لكم <span className="text-accent semibold">30 دقيقة </span> من
            الاستشارة المجانية للعمل الخاص بكم{" "}
          </h1>
        </div>
        <div>
          <a
            href="/conact-us"
            className="items-center max-lg:gap-1 justify-around max-lg:justify-between transition-all hover:bg-slate-300 w-32 px-3 h-14 lg:w-36
             bg-slate-200 rounded-lg flex "
          >
            تواصل معنا{" "}
            <span className="w-[25px]  h-[25px] flex text-[11px] items-center justify-center rounded-full bg-accent text-white">
              <FaArrowLeft />
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 max-xl:px-0 max-lg:grid-cols-2 max-lg:gap-y-12 max-sm:px-3 max-md:px-6 max-lg:gap-x-4 max-md:grid-cols-1 max-md:gap-x-0 gap-3 mt-20 xl:px-24">
        <div className="relative rounded-lg hover:bg-slate-100 transition-all bg-[#f4f4f4] max-sm:p-4 max-sm:py-16 p-10 py-20 ">
          <span
            className="p-4 text-4xl absolute left-[50%] top-[-10%] 
          translate-x-[-50%] flex justify-center items-center text-white bg-accent rounded-full"
          >
            <BsCalendar2Date />
          </span>
          <h2 className="text-center text-3xl font-semibold text-accent mb-4">
            حدد موعداً
          </h2>
          <p className="text-center text-lg text-slate-600">
            تواصل معنا عن طريق المعلومات الموضحة في صفحة التواصل، لنحدد معك
            موعداً في الوقت المناسب لمناقشة الخدمة المطلوبة
          </p>
        </div>
        <div className="relative rounded-lg hover:bg-slate-100 transition-all bg-[#f4f4f4] max-sm:p-4 max-sm:py-16 p-10 py-20 ">
          <span
            className="p-4 text-4xl absolute left-[50%] top-[-10%] 
          translate-x-[-50%] flex justify-center items-center text-white bg-accent rounded-full"
          >
            <FaPersonWalkingArrowRight />
          </span>
          <h2 className="text-center text-3xl font-semibold text-accent mb-4">
            الاستشارة
          </h2>
          <p className="text-center text-lg text-slate-600">
            سنقدم لك استشارة مجانية لعملك او للخدمة المطلوبة لمدة 30 دقيقة نعرض
            فيها لك الطرق المثلى للوصول للحلول المناسبة
          </p>
        </div>
        <div className="relative rounded-lg hover:bg-slate-100 transition-all bg-[#f4f4f4] max-sm:p-4 max-sm:py-16 p-10 py-20 ">
          <span
            className="p-4 text-4xl absolute left-[50%] top-[-10%] 
          translate-x-[-50%] flex justify-center items-center text-white bg-accent rounded-full"
          >
            <IoMdHappy />
          </span>
          <h2 className="text-center text-3xl font-semibold text-accent mb-4">
            استمتع بالخدمة
          </h2>
          <p className="text-center text-lg text-slate-600">
            بعد التوصل إلى الطريقة الأمثل للعمل على الفكرة المقدمة، سيتم البدء
            بتنفيذ العمل بطريقة احترافية وتسليمها
          </p>
        </div>
      </div>
    </section>
  );
}

export default Consulting