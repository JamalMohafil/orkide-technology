import React from 'react'
import { GoPerson } from "react-icons/go";
import { CiMoneyBill } from "react-icons/ci";
import { TfiAnnouncement } from "react-icons/tfi";

const MarketingSteps = () => {
  return (
    <section className="bg-slate-50 flex flex-col gap-8 justify-center items-center lg:px-12 xl:px-20 py-16 ">
      <h1 className="max-md:text-3xl text-4xl text-accent text-center">
        خطوات التسويق عبر منصات التواصل الاجتماعي
      </h1>
      <hr className="w-3/6 border-0 my-4 mx-auto bg-black h-0.5 " />

      <div className="flex flex-wrap justify-center items-center gap-8">
        <div
          className="flex bg-white xl:w-[340px] md:w-2/5 max-md:w-5/6 max-lg:min-h-[400px] lg:min-h-[400px] lg:w-[300px] xl:h-[400px]  shadow-lg hover:scale-110
         hover:border-t-black transition-all flex-col gap-4
         justify-center items-center text-center px-8 py-8 border-t-4 border-t-accent rounded-lg"
        >
          <span className="text-5xl lg:text-6xl font-bold text-slate-600 hover:scale-110 hover:text-accent transition-all">
            <TfiAnnouncement />
          </span>
          <h2 className="text-3xl text-accent max-md:text-2xl font-bold">
            اختيار نوع الإعلان
          </h2>
          <p className="text-slate-700 text-xl max-md:text-lg">
            يمكّنك التسويق على الانستغرام والفيس بوك وباقي وسائل التواصل
            الاجتماعي من اختيار شكل إعلانك المناسب، كالإعلانات النصية أو الصور
            ومقاطع الفيديو وغيرها من أشكال المحتوى التفاعلي
          </p>
        </div>
        <div
          className="flex xl:w-[340px] bg-white md:w-2/5 max-md:w-5/6 max-lg:min-h-[400px] lg:min-h-[400px] lg:w-[300px] xl:h-[400px]  shadow-lg hover:scale-110
         hover:border-t-black transition-all flex-col gap-4
         justify-center items-center text-center px-8 py-8 border-t-4
          border-t-accent rounded-lg"
        >
          <span className="text-5xl lg:text-6xl  font-bold text-slate-600 hover:scale-110 hover:text-accent transition-all">
            <GoPerson />
          </span>
          <h2 className="text-3xl text-accent max-md:text-2xl font-bold">
            الوصول إلى العملاء
          </h2>
          <p className="text-slate-700 text-xl max-md:text-lg">
            يساعدك التسويق على الانستقرام والفيس بوك وغيرها من منصات التواصل في
            الوصول إلى عملائك المثاليين من خلال الخيارات المتقدمة لتخصيص الفئات
            المستهدفة بحسب العمر والجنس والموقع الجغرافي وغيرها
          </p>
        </div>
        <div
          className="flex xl:w-[340px] md:w-2/5 max-md:w-5/6 max-lg:min-h-[400px] lg:min-h-[400px] lg:w-[300px] xl:h-[400px]  shadow-lg hover:scale-110 hover:border-t-black transition-all flex-col gap-4 
        justify-center items-center text-center px-8 py-8 border-t-4
         border-t-accent rounded-lg bg-white"
        >
          <span className="text-5xl lg:text-6xl font-bold text-slate-600 hover:scale-110 hover:text-accent transition-all">
            <CiMoneyBill />
          </span>
          <h2 className="text-3xl text-accent max-md:text-2xl font-bold">
            تحديد الميزانية
          </h2>
          <p className="text-slate-700 text-xl max-md:text-lg">
            تزداد فعالية التسويق على الانستغرام والفيس بوك بتحديد ميزانية
            إعلاناتك المدفوعة، ولا يشترط أن تكون الميزانية مرتفعة لتحقيق الهدف
            المنشود وإنما يكفي تطبيق الاستراتيجية الصحيحة
          </p>
        </div>
      </div>
    </section>
  );
}

export default MarketingSteps