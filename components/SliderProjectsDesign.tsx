'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EmblaOptionsType } from "embla-carousel";

import img1 from '../public/assets/designProjects/1img.jpg'
import img2 from '../public/assets/designProjects/2img.jpg'
import img3 from '../public/assets/designProjects/3img.jpg'
import img4 from '../public/assets/designProjects/4img.jpg'
import img5 from '../public/assets/designProjects/5img.jpg'
import img6 from '../public/assets/designProjects/6img.jpg'
import img7 from '../public/assets/designProjects/7img.jpg'
import img8 from '../public/assets/designProjects/8img.jpg'
import img9 from '../public/assets/designProjects/9img.jpg'
import img10 from '../public/assets/designProjects/10img.jpg'
import img11 from '../public/assets/designProjects/11img.png'
import img12 from '../public/assets/designProjects/12img.jpg'
import img13 from '../public/assets/designProjects/13img.jpg'
import img14 from '../public/assets/designProjects/14img.jpg'
import img15 from '../public/assets/designProjects/15img.jpg'
import img16 from '../public/assets/designProjects/16img.jpg'
import img17 from '../public/assets/designProjects/17img.jpg'
import img18 from '../public/assets/designProjects/18img.jpg'
import img19 from '../public/assets/designProjects/19img.jpg'
import img20 from '../public/assets/designProjects/20img.jpg'
import img21 from '../public/assets/designProjects/21img.jpg'
import img22 from '../public/assets/designProjects/22img.jpg'
import img23 from '../public/assets/designProjects/23img.jpg'
import img24 from '../public/assets/designProjects/24img.jpg'
import img25 from '../public/assets/designProjects/25img.jpg'
import img26 from '../public/assets/designProjects/26img.jpg'
import img27 from '../public/assets/designProjects/27img.jpg'
import img28 from '../public/assets/designProjects/28img.jpg'
import img29 from '../public/assets/designProjects/29img.jpg'
import img30 from '../public/assets/designProjects/30img.jpg'
import img31 from '../public/assets/designProjects/31img.jpg'

import SliderProject from "./SliderProject";

interface Props {
  firstTitle: string;
  secondTitle: string;
  data:any;
}
const SLIDE_COUNT = 5;
const SliderLogos = [img1,img2,img3,img4,img5,img6,img7,img8];
const SliderVisualIdentity = [img9,img10,img11,img12,img13];
const SliderDesigns = [img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25];
const SliderPublications = [img26,img27,img28,img29,img30,img31]
const OPTIONS: EmblaOptionsType = { loop: true };
const SliderProjectsDesign = ({ firstTitle, secondTitle }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000, // تعديل سرعة التحرك هنا
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // تعديل سرعة الانتقال بين الشرائح هنا
  };


  return (
    <section className="flex flex-col gap-8  bg-white py-12">
      <SliderProject
        SLIDES={SliderLogos}
        firstTitle={"Logo"}
        secondTitle={"شعارات"}
      />
      <SliderProject
        SLIDES={SliderVisualIdentity}
        firstTitle={"Visual Identity"}
        secondTitle={"هوية بصرية"}
      />
      <SliderProject
        SLIDES={SliderDesigns}
        firstTitle={"Designs"}
        secondTitle={"تصاميم"}
      />
      <SliderProject
        SLIDES={SliderPublications}
        firstTitle={"Publications "}
        secondTitle={"مطبوعات"}
      />
    </section>
  );
};

export default SliderProjectsDesign;
