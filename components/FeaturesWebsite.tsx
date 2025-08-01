import React from 'react'
import FirstImg from '../public/assets/features/1img.png'
import SecondImg from '../public/assets/features/2img.jpg'
import ThirthImg from '../public/assets/features/3img.png'
import FourthImg from '../public/assets/features/4img.png'
import FifthImg from '../public/assets/features/5img.png'
import SixthImg from '../public/assets/features/6img.png'
import SeventhImg from '../public/assets/features/7img.png'
import EigthImg from '../public/assets/features/8img.png'
import NinthImg from '../public/assets/features/9img.png'
import TenthImg from '../public/assets/features/10img.png'
import EleventhImg from '../public/assets/features/11img.png'
import Image from 'next/image'
import MarketingAni from '../public/assets/animation/marketing.json'
import LottieAnimation from './LottieAni'
const FEATURES = [
  {
    img: FirstImg,
    name: "تحسين الظهور في محركات البحث",
    description: `نضبط إعدادات متوافقة مع المعايير القياسية لجوجل تعطي الفرصة لظهور موقعكم ضمن المراتب الأولى في محركات البحث`,
  },
  {
    img:SecondImg,
    name:"تحكم سلس في المحتوى",
    description:"باستخدامنا لبرمجة ووردبرس تصبح إضافة المحتوى وتطويره بالنسبة إليكم عملية سهلة وسريعة",
  },
  {
    img:ThirthImg,
    name:"تصاميم حصرية للمواقع",
    description:"نبتكر تصاميمنا الخاصة والحصرية للمواقع لنلبي تطلعاتكم بالتميز واحتياجاتكم العملية",
  },
  {
    img:FourthImg,
    name:"عرض متوائم",
    description:"أيّاً كانت طريقة المشاهدة، مرونة تصاميمنا تجعل موقعك متوائماً وسهل الاستخدام سواءً عبر شاشة الكومبيوتر أم الجوال أم الأجهزة اللوحية",
  },
  {
    img:FifthImg,
    name:"حماية محكمة",
    description:"نستخدم أفضل وسائل الحماية لموقعكم عن طريق تفعيل الأكواد البرمجية اللازمة وتأمين الخوادم لحفظ منصتكم من الأخطار السيبرانية",
  },
  {
    img:SixthImg,
    name:"ربط متبادل مع الشبكات الاجتماعية",
    description:"ننشئ تواصلاً متبادلاً للموقع مع الشبكات الاجتماعية يساهم في ربط منصاتكم مع مختلف الشرائح",
  },
  {
    img:SeventhImg,
    name:"احترام الخصوصية",
    description:"نحرص على تضمين ما يلزم من ملفات الارتباط وإشعارات الخصوصية لطمأنة المستخدمين عن احترام خصوصياتهم",
  },
  {
    img:EigthImg,
    name:"خريطة الموقع",
    description:"نعزز تصاميمنا بمعلومات الاتصال مع خرائط جوجل للتعرف على الموقع وتسهيل الوصول",
  },
  {
    img:NinthImg,
    name:"تواصل المهتمين",
    description:"نوفر للمهتمين بمحتواك المميز القدرة على التواصل عبر الموقع عن طريق استمارة مخصصة تملأ بالبيانات اللازمة",
  },
  {
    img:TenthImg,
    name:"سرعة مريحة",
    description:"نحرص في تصاميمنا وبرمجتنا لموقعكم على أن يكون التجول سريعاً مريحاً للمستخدمين",
  },
  {
    img:EleventhImg,
    name:"متعدد اللغات",
    description:"نلبي في تصاميمنا متطلباتكم في اختيارات اللغات المتعددة حسب الطلب",
  },
];
const FeaturesWebsite = () => {
  return (
    <section className="md:px-12 lg:px-10 xl:px-20  py-8 bg-slate-50">
      <h1 className="text-4xl  max-md:text-3xl text-center text-accent ">
        ميزات تصميم موقع الكتروني
      </h1>
       <hr className="w-5/6 border-0 my-10 mx-auto bg-black h-0.5 " />
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {FEATURES.map((item, index) => {
          if (index > 8) {
            return (
              <div
                key={index}
                className="max-md:w-5/6 md:w-[48%] min-[469px]:h-[350px] lg:w-[44%] w-[46%] bg-white shadow-lg justify-center items-center text-center rounded-lg py-4 px-5 flex flex-col gap-5"
              >
                <div className="max-[468px]:w-3/6 flex justify-center items-center hover:scale-110 transition-all">
                  <Image src={item.img} width={120} height={120} alt="" />
                </div>{" "}
                <h1 className="max-md:text-2xl md:text-2xl lg:text-2xl font-bold xl:text-3xl text-accent">
                  {item.name}
                </h1>
                <p className="md:text-lg max-md:text-lg text-slate-700 lg:text-lg xl:text-xl">
                  {item.description}
                </p>
              </div>
            );
          } else if (index <= 8) {
            return (
              <div
                key={index}
                className="max-md:w-5/6 md:w-[48%] min-[469px]:h-[350px] lg:w-[31%] xl:w-[32%] bg-white justify-center items-center text-center shadow-lg rounded-lg py-12 px-5 flex flex-col gap-5"
              >
                <div className="max-[468px]:w-3/6 hover:scale-110 flex justify-center items-center transition-all">
                  <Image src={item.img} width={120} height={120} alt="" />
                </div>
                <h1 className="max-md:text-2xl md:text-2xl lg:text-2xl font-bold xl:text-3xl text-accent">
                  {item.name}
                </h1>
                <p className="md:text-lg max-md:text-lg text-slate-700 lg:text-lg xl:text-xl">
                  {item.description}
                </p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default FeaturesWebsite