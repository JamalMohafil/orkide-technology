import Image from 'next/image';
import React from 'react'
type Props = {
  children:React.ReactNode;
  className:string;
}
const CenterAligner = ({children,className}:Props) => {


  return (
  <section className={`flex items-center justify-center min-h-[50vh] py-20 bg-slate-50 ${className}`}>
    <div className="max-w-[1200px] w-full mx-auto">
      {children}
    </div>
  </section>
  );
}

export default CenterAligner