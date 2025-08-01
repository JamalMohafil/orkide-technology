import Image from 'next/image'
import React from 'react'
interface Card {
  name:string,
  description:string,
  img:string,
  number:number,
  link:string
}
const WebsiteCard = ({name,description,img,number,link }:Card) => {
  return (
    <div
      className="flex-row max-md:flex-col max-md:justify-center
       max-md:items-center bg-gray-400/5 py-6 rounded-lg px-6
    max-md:gap-6 max-[500px]:px-2 max-md:px-6 gap-2 w-full h-max
     md:items-center lg:items-center  justify-center flex"
    >
      <div
        className="lg:w-[45%] max-[500px]:w-5/6 max-md:shadow-xl md:w-2/6 max-md:w-3/6  xl:w-[3/6] relative justify-center flex
       rounded-lg bg-accent items-center "
      >
        <Image
          className="rounded-xl object-cover   relative w-full h-full -left-2 -bottom-2"
          src={`https://${img}`}
          width={300}
          height={300}
          alt={name}
        />
      </div>
      <div className="flex lg:gap-2  xl:gap-6 justify-center items-center md:w-3/6 lg:w-3/6 flex-col mr-4">
        <a href={link} target='_blank' className="text-2xl max-[500px]:text-xl font-semibold max-md:text-center max-md:mb-2">
          <span className="text-accent">#{number} |</span> {name}
        </a>
        <p className="text-[21px] max-[500px]:text-[17px] max-md:text-center max-md:text-lg lg:text-[16px] text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default WebsiteCard