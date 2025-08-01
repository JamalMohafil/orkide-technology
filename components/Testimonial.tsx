'use client'
import Image from 'next/image';
import React, { useRef } from 'react'
import CenterAligner from './CenterAligner';
type Props = {
  }
import Slider from 'react-slick'
import { testimonials } from '@/data/testimonials';
import { FaQuoteLeft,FaQuoteRight } from 'react-icons/fa';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
const Testimonial = ({}:Props) => {
  const sliderRef = useRef<any>()
  const settings = {
    dots:true,
    infinite:false,
    speed:500,
    slidesToShow:1,
    SlidesToScroll:1,
    arrows:false,
  }

  return (
 <CenterAligner className='bg-[#ffe69d px-5 py-10]'>
  <h1 className="text-center text-2xl font-bold sm:text-3xl pb-8">
    اراء عملائنا
  </h1>
  {/* Container for the slider  */}
  <div className="max-w-[1100px] mx-auto w-full rounded-xl relative overflow-hidden">
    {/* Main Section */}
    <Slider {...settings} ref={sliderRef}>
      {testimonials.map((single,index)=>{
        return (
          <div key={index}>
            <section
              className="mx-auto bg-white p-5 sm:p-12 grid grid-cols-1 sm:grid-cols-[3fr_1fr]
            md:grid-cols-[4fr_1fr] items-center gap-5 md:gap-8 rounded-xl overflow-hidden"
            >
              {/* Right Section */}
              <div className="text-[16px] flex justify-start flex-col items-end space-y-3  sm:text-[18px]">
                <div className="text-accent text-[40px]">
                  <FaQuoteLeft />
                </div>
                <p className='text-right'>{single.testimonial}</p>
                <div className="text-accent text-[40px]">
                  <FaQuoteRight />
                </div>
              </div>
              {/* left section */}
              <div className="space-y-5 text-center">
                {/* Image  */}
                <div className="border-8 inline-block rounded-full border-accent p-2.5">
                  <div className="mx-auto w-[100px] h-[100px] rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src={single.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Others */}
                <div>
                  <h2 className="text-xl font-medium">{single.name}</h2>
                  <p className="text-gray-600 ">{single.profession}</p>
                </div>
                
              </div>
            </section>
          </div>
        );
      })}
    </Slider>
    {/* Creating the Prev and Next button  */}
    <button className='absolute top-[50%] left-[10px] z-10 text-gray-600'
     onClick={() => sliderRef?.current?.slickPrev()}>
        <MdOutlineArrowBackIos/>
    </button>
    <button className='absolute top-[50%] right-[10px] z-10 text-gray-600'
     onClick={() => sliderRef?.current?.slickNext()}>
        <MdOutlineArrowForwardIos/>
    </button>
  </div>
 </CenterAligner>
  );
}

export default Testimonial