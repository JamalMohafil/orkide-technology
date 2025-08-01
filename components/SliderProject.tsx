import { EmblaOptionsType } from 'embla-carousel';
import React from 'react'
import EmblaCarousel from './EmblaCarousel';
const OPTIONS: EmblaOptionsType = { loop: true };
interface Props {
    firstTitle:String;
    secondTitle:String;
    SLIDES:any;
}
const SliderProject = ({firstTitle,secondTitle,SLIDES}:Props) => {
  return (
        <>
     <h1 className="text-4xl text-accent font-bold text-center">
        <span className="text-[#0d1d31]">{firstTitle} | </span>
        {secondTitle}
      </h1>
      <div dir="ltr">

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </>  
    )
}

export default SliderProject