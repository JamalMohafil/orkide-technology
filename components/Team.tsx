import Image from 'next/image';
import React from 'react'
import jamal from '@/public/assets/Team/jamal.webp'
import obada from '@/public/assets/Team/obada.webp'
import hossam from '@/public/assets/Team/hossam.webp'
const Team = () => {
  return (
    <section className="h-full p-10 max-sm:px-0 bg-slate-50 max-sm:p-6 max-sm:py-16 max-xl:p-12 py-24">
      <h1 className="text-accent text-6xl text-center font-bold max-sm:text-4xl">
        فريق العمل
      </h1>{" "}
      <div className="flex flex-wrap flex-row justify-center items-center  mt-16">
        <div className="w-2/6 max-md:w-3/6 flex max-sm:w-4/6 hover:scale-110 transition-all justify-center items-center">
          <Image src={hossam} alt="hossam" className='rounded-full' width={450} height={450} />
        </div>
        <div className="w-2/6 z-0 max-md:w-3/6 flex max-sm:w-4/6 hover:scale-110 transition-all justify-center items-center">
          <Image
            src={obada}
            alt="obada"
            width={450}
            className="hover:z-0"
            height={450}
          />
        </div>
        <div className="w-2/6 max-md:w-3/6 max-sm:w-4/6 flex hover:scale-110 transition-all justify-center items-center">
          <Image src={jamal} alt="jamal" className='rounded-full' width={450} height={450} />
        </div>
      </div>
    </section>
  );
}

export default Team