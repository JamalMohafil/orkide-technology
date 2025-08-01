import React from "react";
import DesignHeroImg from '../public/assets/designPage/HeroImage.png'
import Image from "next/image";
const DesignHero = () => {
  return (
    <>
      <div className="mt-10"></div>
      <section className="max-lg:flex-col-reverse  max-lg:justify-center max-lg:items-center max-lg:text-center 
      flex justify-around items-center lg:justify-between  lg:px-12
       xl:px-24 py-24 lg:h-[95vh] max-lg:h-max max-lg:py-16 h-[80vh] relative overflow-hidden">
        <div className="absolute inset-0 w-full h-[120%] transform rotate-[-45deg] stars">
          {[...Array(50)].map((_, i) => {
            const style = {
              "--top-offset": `${Math.random() * 100}vh`,
              "--star-tail-length": `${Math.random() * (750 - 500) + 500}em`,
              "--fall-duration": `${Math.random() * (12 - 6) + 6}s`,
              "--fall-delay": `${Math.random() * 10}s`,
            } as React.CSSProperties;

            return (
              <div
                key={i}
                className="absolute top-[var(--top-offset)] left-0 w-[var(--star-tail-length)] h-[2px] bg-gradient-to-r from-current to-transparent rounded-full filter drop-shadow-[0_0_6px_currentColor] star"
                style={style}
              ></div>
            );
          })}
        </div>
        <div className="flex flex-col text-white max-lg:justify-center max-lg:items-center max-lg:w-5/6 lg:w-3/6 xl:w-3/6 gap-8 z-[2]">
          <h1 className="text-5xl font-bold max-sm:text-3xl">التصميم الرسومي</h1>
          <p className="text-2xl max-sm:text-xl">
            عندما يتعلق الأمر بالتصميمات الثابتة فإنا ماهرون في التقاط الصور
            وابتكار الرسومات ومزجهما معاَ في تناغم فاعل يلفت الأنظار ويحقق
            التأثير
          </p>
          <a href="#" className="text-xl px-6 py-3 max-w-max text-white border-2 border-accent rounded-xl">لمشاهدة اعمالنا</a>
        </div>
        <div className="lg:w-3/6 flex justify-center items-center max-lg:w-3/6 max-sm:w-4/6 w-2/5 z-[2]">
            <Image src={DesignHeroImg} width={500} height={500} alt="Hero Image"/>
        </div>
      </section>
    </>
  );
};

export default DesignHero;
