'use client'
import Image from 'next/image';
import React from 'react'
import { IoMdClose } from "react-icons/io";

interface Props {
    src:any;
    setActive:any
}
const ImagePanel = ({ src, setActive }: Props) => {
  console.log(src.src);
  return (
    <div
      className="h-screen w-[100vw] overflow-hidden bg-black/25 flex justify-center
     items-center fixed z-[100] left-0 top-0 translate-x-0
     translate-y-0"
    >
      <div className="max-w-[95vw] max-h-[90vh] px-4">
        <Image
          src={src?.src}
          width={500}
          height={500}
          alt="image"
          className=" rounded-xl"
        />
      </div>
      <span onClick={()=>{
        setActive(false)
      }} className='absolute cursor-pointer left-5 top-5 rounded-full bg-red-600 p-2 flex justify-center items-center
       text-white'>
        <IoMdClose className='text-2xl'/>
      </span>
    </div>
  );
};

export default ImagePanel