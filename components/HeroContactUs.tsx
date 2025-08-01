import Image from 'next/image';
import React from 'react'
import LocationImg from '../public/assets/contactUs/location.png'
import CallImg from '../public/assets/contactUs/call.png'
import MailBoxImg from '../public/assets/contactUs/mail-box.png'
import Co from "../public/assets/contactUs/cover-color.png";
const BoxesContact = [
  {
    img: MailBoxImg,
    name: "رقم الهاتف",
    desc: "orkidetech1@gmail.com",
    descLink: "#",
  },
  {
    img: CallImg,
    name: "البريد الإلكتروني",
    desc: "+90 505 578 13 00",
    descLink: "#",
  },
  {
    img: LocationImg,
    name: "الموقع الجغرافي",
    desc: "Istanbul, Ümraniye, Altınşehir mah, Canberk Sk",
    descLink: "#",
  },
];
const HeroContactUs = () => {
  return (
    <>
      <div className="mt-10"></div>

      <section className="relative">
        <div className="relative w-full">
          <img
            src="https://www.hela-tech.com/images/contact-us/cover.png"
            className="w-full h-[300px] object-left object-cover md:object-cover lg:object-fill "
            alt="Bg Image"
          />
          <Image
            src={Co}
            className="w-full h-[300px] absolute top-0"
            fill alt={''}          />
          <div className="absolute w-full top-0 px-[10px] md:px-[30px] lg:px-[190px] pt-[60px] pb-[126px] text-white">
{        // eslint-disable-next-line react/jsx-no-comment-textnodes
}            <h2 className="text-2xl">// اتصل بنا</h2>
            <span className="text-[24px] sm:text-[30px] font-medium lg:text-[35px] xl:text-[40px] w-full">
              يمكنكم التواصل معنا للحصول على معلومات أكثر
            </span>
          </div>
        </div>
        <div className="flex flex-wrap mt-[-80px] relative items-center justify-center max-md:gap-4 md:gap-12">
          {BoxesContact.map((item, index) => (
            <div
              className="flex lg:w-[28%] md:w-5/12 max-md:w-8/12 max-[500px]:w-10/12 xl:w-3/12 flex-col h-[350px]  shadow-lg rounded-lg bg-white items-center justify-center py-6 px-8 max-sm:px-2"
              key={index}
            >
              <Image
                src={item.img}
                alt={item.name}
                className="bg-white max-[320px]:w-5/6 rounded-full border-2 border-accent p-3"
                width={150}
                height={150}
              />
              <h1 className="text-xl text-center mt-3 max-sm:text-lg" >{item.name}</h1>
              <hr className='border-0 bg-gray-500 max-sm:w-[50%] w-[30%] mx-auto h-0.5 mt-4 mb-3' />
              <a href={item.descLink} className="
             whitespace-pre-wrap max-[350px]:text-sm text-gray-400 text-center text-lg" dir='ltr'>
                {item.desc}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroContactUs