import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div className="h-[80vh] pt-0 flex flex-col gap-10 justify-center items-center text-black ">
      <h2 className="text-4xl font-bold">عذرا هذه الصفحة غير موجودة</h2>
      <Link href={"/"} className="text-white text-2xl bg-accent py-4 px-6 rounded-xl">
        العودة الى الصفحة الرئيسية
      </Link>
    </div>
  );
}

export default NotFound