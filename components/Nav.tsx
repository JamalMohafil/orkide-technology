"use client";
import Image from "next/image";

import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const links = [
  {
    name: "الرئيسية",
    target: "/",
  },
  {
    name: "خدماتنا",
    target: "services",
    // subLinks: ["انشاء المواقع الالكترونية", "التسويق الالكتروني", "التصميم"],
    subLinks: [
      {
        name: "انشاء المواقع الالكترونية",
        target: "/web",
      },
      {
        name: "التسويق الالكتروني",
        target: "/marketing",
      },
      {
        name: "التصميم",
        target: "/design",
      },
    ],
  },
  {
    name: "من نحن",
    target: "about",
  },
  {
    name: "اتصل بنا",
    target: "/contact-us",
  },
];

const Nav = () => {
  const [active,setActive] = useState<Boolean>(false)
  const [activeMenu,setActiveMenu] = useState<Boolean>(false)
                console.log(active);
  const router = useRouter();


  const handleClick = (link:any) => {
    if (location.pathname !== "/") {
      router.push(`/#${link.target}`);
    } else {
      scroller.scrollTo(link.target, {
        smooth: true,
        duration: 500,
        offset: 50,
      });
    }
  };
  return (
    <nav className="   h-[90px] w-full bg-white py-1 shadow-lg ">
      <div className="relative flex justify-around max-lg:justify-between items-center px-2">
        <a href="/">
          <Image src="/logo.png" alt="logo" width={200} height={200} />
        </a>
        <ul className="max-md:hidden flex gap-16 max-lg:gap-6 text-black ">
          {links.map((link, index) => (
            <li key={index} className="relative group">
              <Link
                href={
                  link.name !== "الرئيسية" && !link.target.startsWith("/")
                    ? `/#${link.target}`
                    : `${link.target}`
                }
                onClick={() => {
                  handleClick(link);
                }}
                className="font-din_next_arabic cursor-pointer text-lg min-[1760px]:text-2xl xl:text-xl  py-2 hover:underline"
              >
                {link.name}
              </Link>
              {link.subLinks && (
                <ul
                  className="absolute border-accent border-2 border-t-4 border-t-accentHover -left-20 hidden mt-2 space-y-2 bg-white text-black py-2 px-4
                 rounded-b-lg rounded-t-sm shado  w-lg group-hover:block"
                >
                  {link.subLinks.map((subLink, index) => (
                    <li key={index}>
                    
                      <Link
                        href={
                          subLink.name !== "الرئيسية" &&
                          !subLink.target.startsWith("/")
                            ? `/#${subLink.target}`
                            : `${subLink.target}`
                        }
                        className={`w-40 cursor-pointer block px-1 py-2 transition-all text-accent hover:text-black  hover:bg-gray-200 ${
                          index !== link.subLinks.length - 4
                            ? "border-b border-black"
                            : ""
                        }`}
                      >
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <a
          href="/contact-us"
          className="max-md:hidden inline-flex items-center px-4 py-2 border-2 border-accent bg-white hover:bg-accent hover:text-white transition-all ease-linear text-accent font-semibold
           rounded-full shadow-md hover:opacity-95 focus:outline-none focus:ring-2
             focus:ring-offset-2"
        >
          احصل على استشارة مجاناً <span className="mr-2"> ↗ </span>
        </a>
        <ul
          className={`md:hidden flex fixed translate-x-[-6%] bg-slate-100
           shadow-xl w-[250px] top-[0%] trnaslate-y-[0%] h-[100vh] py-6 justify-center items-center
         gap-6 flex-col text-black  transition-all ease ${
           active ? `left-[0%]` : `left-[-100%] max-sm:left-[-180%]`
         } `}
        >
          <span
            className="absolute right-3 cursor-pointer  top-3"
            onClick={() => {
              console.log("close");
              setActive(false);
              console.log(active);
            }}
          >
            <FaRegCircleXmark className="text-3xl hover:text-accent transition" />
          </span>
          {links.map((link, index) => {
            if (link.name == "خدماتنا") {
              return (
                <li
                  key={index}
                  className="relative group flex justify-center items-center flex-col"
                >
                  <span className="relative flex justify-center items-center">
                    <Link
                      href={
                        link.target.startsWith('/') ? link.target : `/#${link.target}`
                      }
                      onClick={() => {
                        handleClick(link);
                      }}
                      className="font-din_next_arabic text-lg   hover:underline hover:text-accent"
                    >
                      {link.name}
                    </Link>
                    <span
                      className="absolute -left-7 w-5 h-5 flex justify-center rounded-xl cursor-pointer items-center
                       bg-white top-[25%]"
                      onClick={() => setActiveMenu(!activeMenu)}
                    >
                      <FiArrowDown />
                    </span>
                  </span>
                  {link.subLinks && (
                    <ul
                      className={`   flex flex-col gap-2 text-center trans-height  ${
                        activeMenu
                          ? "opacity-100 h-[85px] mt-3"
                          : "mt-[-10px] h-[0]"
                      }`}
                    >
                      {link.subLinks.map((subLink, subIndex) => (
                        <li
                          key={subIndex}
                          className={`trans-height ${
                            activeMenu
                              ? "opacity-100 h-[28.33px]"
                              : "opacity-0 h-[0px]"
                          }`}
                        >
                          <Link
                            href={
                              subLink.name !== "الرئيسية" &&
                              !subLink.target.startsWith("/")
                                ? `/#${subLink.target}`
                                : `${subLink.target}`
                            }
                            className="hover:underline"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li
                  key={index}
                  className="relative group flex justify-center items-center flex-col"
                >
                  <Link
                    href={
                      link.name !== "الرئيسية" && !link.target.startsWith("/")
                        ? `/#${link.target}`
                        : `${link.target}`
                    }
                    onClick={() => {
                      handleClick(link);
                    }}
                    className="font-din_next_arabic text-lg hover:text-accent  hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            }
          })}
          <a
            href="/contact-us"
            className="mt-2 inline-flex items-center px-4 py-2 border-2 border-accent
             bg-white hover:bg-accent hover:text-white transition-all ease-linear
              text-accent font-semibold
           rounded-full shadow-md hover:opacity-95 focus:outline-none focus:ring-2
             focus:ring-offset-2"
          >
            احصل على استشارة مجاناً <span className="mr-2"> ↗ </span>
          </a>
        </ul>

        <span
          className="text-4xl cursor-pointer md:hidden"
          onClick={() => setActive(!active)}
        >
          <FiAlignJustify />
        </span>
      </div>
    </nav>
  );
};

export default Nav;
