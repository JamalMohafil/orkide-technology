import Image from 'next/image';
import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
const otherPages = [
  {
    name: "سياسة الخصوصية",
    link: "#",
  },
  {
    name: "الأحكام والشروط",
    link: "#",
  },
  {
    name: "سياسة الاسترجاع",
    link:'#'
  },
];
const ourServices = ['تصميم جرافيكي','تطوير وورد بريس','تطوير تطبيقات','تطوير مواقع','تسويق الكتروني وادارة صفحات']
const Footer = () => {
  return (
    <footer className=" bg-[#0d1c22] flex flex-col text-white pt-10 px-0">
      <div className="flex justify-between items-center max-lg:px-8 max-md:flex-col max-md:gap-6 max-xl:gap-2 max-lg:flex-row-reverse max-xl:flex-col xl:px-24 px-10 max-xl:px-20">
        <Image
          src="/logo_white.png"
          alt="logo"
          className=" rounded-full max-lg:w-[330px]"
          width={250}
          height={250}
        />
        <hr className="h-[1px] w-[100vw] max-md:block md:hidden bg-slate-600 border-0 my-1 mb-3" />

        <div className="flex items-center max-lg:flex-col max-lg:items-start   justify-between gap-16 max-xl:gap-10">
          <div className="flex items-center gap-4">
            <span className="bg-[#4c4d52] max-sm:p-2 p-4 rounded-full flex justify-center items-center">
              <IoCallOutline className="text-accent text-4xl max-sm:text-3xl" />
            </span>
            <div className="flex flex-col gap-1 justify-center">
              <h2 className="font-semibold text-2xl max-sm:text-xl">
                اتصل بنا
              </h2>
              <a
                href="tel:+905011333366"
                dir="ltr"
                className="text-xl max-sm:text-lg"
              >
                +90 501 133 33 66
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-[#4c4d52] max-sm:p-2 p-4 rounded-full flex justify-center items-center">
              <CiMail className="text-accent text-4xl max-sm:text-3xl" />
            </span>
            <div className="flex flex-col gap-1 justify-center">
              <h2 className="font-semibold text-2xl max-sm:text-xl">راسلنا</h2>
              <a
                href="mailto:orkidetech@gmail.com"
                dir="ltr"
                className="text-xl max-sm:text-lg"
              >
                orkidetech@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-[#4c4d52] max-sm:p-2 p-4 rounded-full flex justify-center items-center">
              <FiMapPin className="text-accent text-4xl max-sm:text-3xl" />
            </span>
            <div className="flex flex-col gap-1 justify-center">
              <h2 className="font-semibold text-2xl max-sm:text-xl">
                الموقع الجغرافي
              </h2>
              <span dir="ltr" className="text-xl max-sm:text-lg">
                تركيا, اسطنبول, عثمان بي
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[1px] border-0 w-[100%] max-md:hidden bg-slate-600 my-10" />
      <div
        className="flex max-lg:flex-col justify-between max-lg:items-start
       max-md:mt-10 max-md:flex-row max-md:flex-wrap items-center gap-12 max-md:px-10 max-sm:px-4 px-20"
      >
        <div className="flex max-md:flex-wrap max-md:justify-start max-md:gap-10 max-md:gap-x-16 gap-0 w-3/5 max-lg:w-full justify-around">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-xl text-accent font-semibold">روابط الموقع</h2>
            <ul className="list-none flex flex-col gap-4 justify-start items-start">
              <li>
                <a href="#" className="text-white hover:underline">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  الاستشارة
                </a>
              </li>{" "}
              <li>
                <a href="#" className="text-white hover:underline">
                  خدماتنا
                </a>
              </li>{" "}
              <li>
                <a href="#" className="text-white hover:underline">
                  التواصل معنا
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <h2 className="text-xl text-accent font-semibold"> خدماتنا</h2>
            <ul className="list-none flex flex-col gap-4 justify-start items-start">
              {ourServices.map((item, i) => (
                <li className="text-white" key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <h2 className="text-xl text-accent font-semibold"> صفحات أخرى</h2>
            <ul className="list-none flex flex-col gap-4 justify-start items-start">
              {otherPages.map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="text-white hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#363b3d] max-md:w-full max-lg:w-4/6 w-2/6 px-6 py-10 rounded-xl flex flex-col gap-5">
          <h2 className="text-2xl font-bold">الوصف:</h2>
          <p className="xl:text-lg ">
            اوركيدا تكنولوجي هي شركة متخصصة في تطوير التطبيقات والمواقع
            وتسويقها، مع فريق مبدع ومتميز يضمن جودة عالية وتجربة مميزة للعملاء.
          </p>
        </div>
      </div>
      <hr className="h-[1px] max-w-[1920px] w-[100vw]  bg-slate-600 border-0 mt-10 mb-3" />
      <div className="py-4 pb-8 px-24 max-lg:px-12 max-md:flex-col max-md:gap-5 max-md:px-4 max-md:text-center max-sm:px-1 flex justify-between items-center">
        <h2>
          حقوق النشر لــ <span className="text-accent">ORKIDE</span> 2023-2024 |
          صمم من قبل <span className="text-accent">Orkide Tech جمال محفل</span>{" "}
        </h2>
        <div className="flex items-end gap-2 text-lg">
          <span>تابعنا :</span>
          <a href="#" className="text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl">
            <AiFillTikTok />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer