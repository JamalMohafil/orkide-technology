import React from 'react'
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { LuMonitor } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { FaShop } from "react-icons/fa6";

const servicesContent = [
  {
    icon: <CiShoppingBasket />,
    name: "تصميم متجر الكتروني",
    desc: "تصميماتنا المرنة للواجهات الاحترافية، تجعل متجركم الالكتروني، فعالاً وسهل الاستخدام، عبر مختلف الأجهزة",
  },
  {
    icon: <IoIosPhonePortrait />,
    name: "تصميم تطبيقات الجوال",
    desc: "نسخّر أحدث التقنيات، لتطوير حلول مبتكرة، تمنح تطبيقات الجوال التي نصممها لكم، أداء سلساً",
  },
  {
    icon: <LuMonitor />,
    name: "تصميم المواقع",
    desc: "نستلهم من تجاربكم، تصاميم احترافية، نُنشئ بها منصات رقمية، تفي بمتطلباتكم، لاستخدامٍ عمليّ متوائمٍ مع جميع الأجهزة، وطرق العرض",
  },
  {
    icon: <MdOutlineDesignServices />,
    name: "التصميم الرسومي",
    desc: "عندما يتعلق الأمر بالتصميمات الثابتة فإنا ماهرون في التقاط الصور وابتكار الرسومات ومزجهما معاَ في تناغم فاعل يلفت الأنظار ويحقق التأثير",
  },
  {
    icon: <SiGoogleads />,
    name: "إدارة الإعلانات الرقمية",
    desc: "نصمم حملات إعلانية رقمية شاملة، من خلال خطة تحليلية تستهدف الجهات المقصودة مباشرة، وتؤدي إلى نتائج فعالة.",
  },
  {
    icon: <FaShop />,
    name: "تصميم هوية تجارية",
    desc: "نعتني بتصميم هويتكم التجارية، من خلال الحرص على أن تكون جذابة، خلاقة، محققة لرؤاكم",
  },
];
const Services = () => {
  return (
    <section className="h-full p-20 bg-slate-50 max-sm:p-6 max-sm:py-12 max-xl:p-12">
      <h1 className="text-accent text-6xl text-center font-bold max-sm:text-4xl">
        خدماتنا
      </h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 mt-12 max-xl:px-0 px-24">
        {servicesContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center group hover:mt-[-10px] hover:mb-[10px] transition-all items-center gap-6 shadow-lg 
          px-10 py-10 max-sm:px-5 rounded-lg border-t-[10px] border-accent"
          >
            <span className="text-6xl group-hover:text-accent transition-all">
              {item.icon}
            </span>
            <h2 className="text-2xl max-sm:text-xl font-semibold text-accent">
              {item.name}
            </h2>
            <p className="text-center max-sm:text-[16px] text-slate-500 text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;