'use client'
import { CATEGORIES, WEBSITES } from '@/data/websites'
import React, { useState } from 'react'
import WebsiteCard from './WebsiteCard'
import { FaPlus } from "react-icons/fa6";
import Link from 'next/link';

const Websites = () => {
  const [activeCat,setActiveCat] = useState<string>("الجميع")
  const websitesMap = activeCat === 'الجميع' ? WEBSITES : activeCat ? WEBSITES.filter(item=>item.category.includes(activeCat)) : WEBSITES
  return (
    <section className="h-full w-full bg-white flex justify-center flex-col max-[500px]:px-4 gap-24 py-12 px-10 items-center">
     <h1 className='text-5xl text-black font-black mt-6 max-sm:text-3xl text-center'>اعمالنا في برمجة المواقع</h1>
      {/* <div className="flex max-sm:gap-2 max-sm:grid max-sm:grid-cols-2 max-[400px]:grid-cols-1 gap-6 flex-wrap justify-center items-center">
        {CATEGORIES.map((item, index) => (
          <button
            className={`text-xl font-bold bg-accent border-2  px-5 py-3 border-gray-600
           rounded-tl-xl rounded-br-xl ${
             activeCat === item ? "bg-white text-black shadow-lg" : "text-white"
           }`}
            key={index}
            onClick={() => setActiveCat(item)}
          >
            {item}
          </button>
        ))}
      </div> */}
      <div className="flex flex-wrap lg:justify-between xl:justify-center items-center gap-y-10 xl:gap-x-8">
        {websitesMap.length > 0 ? (
          websitesMap.slice(0, 3).map((card, index) => (
            <div key={index} className="xl:w-2/5 lg:w-[46%] md:w-full ">
              <WebsiteCard
                number={index + 1}
                name={card.name}
                description={card.description}
                img={card.img}
                link={card.link}
              />
            </div>
          ))
        ) : (
          <h2 className="text-center text-accent text-4xl">
            عذرا لا يوجد مواقع في هذا التصنيف
          </h2>
        )}
      </div>
      <Link href="/web/websites" className="w-full cursor-pointer justify-center items-end flex gap-2 text-3xl mt-[-20px] hover:text-black transition-all mb-8 font-bold text-accent text-center">
        اظهار المزيد <FaPlus />
      </Link>
    </section>
  );
}

export default Websites