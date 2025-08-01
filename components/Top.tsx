import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

const Top = () => {
  return (
    <section className="flex justify-around gap-4 w-full  max-md:flex-col max-md:gap-y-10 max-md:px-6 max-md:justify-center max-md:items-center py-10 items-center bg-[#00364a]">
      <h1 className='text-3xl text-white max-md:text-center'>هل انتم مستعدون للتواجد في المقدمة</h1>
      <button className="px-7 hover:border-accent hover:bg-transparent border-2 border-transparent transition-all py-3 bg-[#00adea] text-white text-lg rounded-md
       flex gap-4 items-start justify-center">
        <FaWhatsapp className='text-4xl'/>
        تواصل معنا الان
      </button>
    </section>
  );
}

export default Top