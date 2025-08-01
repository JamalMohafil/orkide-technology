"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUsForm() {
  const [state, handleSubmit] = useForm("mvoejvoa");
  const notify = (msg:string, type:string) => {
    if (type === "success") {
      toast.success(msg);
    } else if (type === "error") {
      toast.error(msg);
    } else if (type === "warn") {
      toast.warn(msg);
    }
  };

  if (state.succeeded) {
    notify("تم الإرسال بنجاح", "success");
  }
  if (state.errors) {
    notify("عذراً, حدث خطأ أثناء الإرسال الرجاء المحاولة لاحقاً", "error");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[1100px] mx-auto p-6 mt-12 space-y-4"
    >
      <h1 className="text-accent text-4xl text-center mb-10">تواصل معنا </h1>
      <div className="mb-4 flex flex-wrap justify-between gap-4 items-center">
        <div className="max-md:w-full w-[48%]">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            الاسم الكامل
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="الاسم الكامل"
            className="border hover:border-gray-800 focus:border-accent active:border-accent border-gray-400 appearance-none rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-500 text-xs italic"
          />
        </div>

        <div className="max-md:w-full w-[48%]">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            البريد الإلكتروني
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            className="border hover:border-gray-800 focus:border-accent active:border-accent border-gray-400 appearance-none rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-xs italic"
          />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap justify-between gap-4 items-center">
        <div className="max-md:w-full w-[48%]">
          <label
            htmlFor="company"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            اسم الشركة
          </label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="اسم الشركة"
            className="border hover:border-gray-800 focus:border-accent active:border-accent border-gray-400 appearance-none rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError
            prefix="Company"
            field="company"
            errors={state.errors}
            className="text-red-500 text-xs italic"
          />
        </div>
        <div className="max-md:w-full w-[48%]">
          <label
            htmlFor="service"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            كيف يمكننا خدمتك
          </label>
          <input
            id="service"
            type="text"
            name="service"
            placeholder="كيف يمكننا خدمتك"
            className="border hover:border-gray-800 focus:border-accent active:border-accent border-gray-400 appearance-none rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError
            prefix="Service"
            field="service"
            errors={state.errors}
            className="text-red-500 text-xs italic"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="serviceType"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          نوع الخدمة
        </label>
        <div className="flex gap-2 flex-wrap">
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value="تطوير مواقع"
              className="mr-2 mt-[7px]"
            />
            تطوير مواقع
          </label>
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value="تطوير ووردبريس"
              className="mr-2 mt-[7px]"
            />
            تطوير ووردبريس
          </label>
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value="تطوير تطبيقات"
              className="mr-2 mt-[7px]"
            />
            تطوير تطبيقات
          </label>
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value="تصميم جرافيكي"
              className="mr-2 mt-[7px]"
            />
            تصميم جرافيكي
          </label>
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value="الهوية البصرية"
              className="mr-2 mt-[7px]"
            />
            الهوية البصرية
          </label>
          <label className="flex items-center cursor-pointer gap-2 justify-center">
            <input
              type="radio"
              name="serviceType"
              value="تصميم UI/UX"
              className="mr-2 mt-[7px]"
            />
            تصميم UI/UX
          </label>
        </div>
        <ValidationError
          prefix="ServiceType"
          field="serviceType"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>

      <div className="mb-4 ">
        <label
          htmlFor="message"
          className="block text-gray-700  text-sm font-bold mb-2"
        >
          الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="الرسالة"
          className=" min-h-[200px] appearance-none border border-gray-400 hover:border-gray-800 focus:border-accent active:border-accent rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-accent hover:bg-accentHover w-[200px] text-white font-bold py-3 rounded-xl px-4 focus:outline-none focus:shadow-outline"
        >
          إرسال
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}
