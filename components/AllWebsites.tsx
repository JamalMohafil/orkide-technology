"use client";
import React, { useState } from "react";
import WebsiteCard from "./WebsiteCard";
import { CATEGORIES, WEBSITES } from "@/data/websites";

const AllWebsites = () => {
  const [activeCat, setActiveCat] = useState<string>("الجميع");
  const [limit, setLimit] = useState<number>(4);
  const [loading, setLoading] = useState<boolean>(false);

  const websitesMap =
    activeCat === "الجميع"
      ? WEBSITES
      : activeCat
      ? WEBSITES.filter((item) => item.category.includes(activeCat))
      : WEBSITES;

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
       setLimit((prevLimit) => {
         const remainingItems = websitesMap.length - prevLimit;
         if (remainingItems > 5) {
           return prevLimit + 5;
         } else {
           return prevLimit + remainingItems;
         }
       });
      setLoading(false);
    }, 500); // Simulating a network request delay
  };

  const resetLimit = () => {
    setLimit(4);
  };

  return (
    <section className="h-full w-full bg-white flex justify-center flex-col max-[500px]:px-4 gap-24 py-12 px-10 items-center">
      <h1 className="text-5xl text-black font-black mt-6 max-sm:text-3xl text-center">
        PROJECTS
      </h1>
      <div className="flex max-sm:gap-2 max-sm:grid max-sm:grid-cols-2 max-[400px]:grid-cols-1 gap-6 flex-wrap justify-center items-center">
        {CATEGORIES.map((item, index) => (
          <button
            className={`text-xl max-[500px]:text-lg font-bold bg-accent border-2  max-[500px]:px-4 max-[500px]:py-2 px-5 py-3 border-gray-600
           rounded-tl-xl rounded-br-xl ${
             activeCat === item ? "bg-white text-black shadow-lg" : "text-white"
           }`}
            key={index}
            onClick={() => {
              setActiveCat(item);
              resetLimit();
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap lg:justify-between xl:justify-center items-center gap-y-10 xl:gap-x-8">
        {websitesMap.length > 0 ? (
          websitesMap.slice(0, limit).map((card, index) => (
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
          <h2 className="text-center my-28 max-sm:my-14 max-sm:text-2xl text-accent text-4xl">
            عذرا لا يوجد مواقع في هذا التصنيف
          </h2>
        )}
      </div>
      {websitesMap.length && loading ? (
        <div className="flex justify-center items-center">
          <div className="loaderMore border-t-2 border-blue-500 border-solid rounded-full w-8 h-8 animate-spin"></div>
        </div>
      ) : websitesMap.length ? (
        websitesMap.length > limit && (
          <button
            onClick={loadMore}
            className="text-white mt-[-35px] bg-accent px-12 hover:bg-black transition-all py-3 rounded-lg"
          >
            Show More
          </button>
        )
      ) : null}
      {websitesMap.length
        ? websitesMap.length <= limit && (
            <button
              onClick={resetLimit}
              className="text-white mt-[-35px] bg-accent px-12 hover:bg-black transition-all py-3 rounded-lg"
            >
              Hide More
            </button>
          )
        : null}
    </section>
  );
};

export default AllWebsites;
