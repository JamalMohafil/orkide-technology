"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SnackbarProvider, useSnackbar } from "notistack";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvoejvoa");
    const notify:any = (msg:string,type:string) => {
      if(type === 'success'){
        toast.success(msg)
      }else if(type === 'error'){
        toast.error(msg)
      }else if(type === 'warn'){
        toast.warn(msg)
      }
    };
 
  if (state.succeeded) {
    notify('تم الارسال بنجاح','success');
  }
  if (state.errors) {
   notify('عذراً, حدث خطأ اثناء الارسال الرجاء المحاولة لاحقاً','errror')
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[800px] mx-auto p-6     space-y-4"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          الاسم
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="الاسم"
          className="shadow appearance-none border rounded   w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>

      <div className="mb-4">
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
          className="shadow appearance-none   border rounded w-full py-2 px-3
           text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>

      <div className="mb-4 flex gap-2">
        <div className="w-1/4">
          <label
            htmlFor="country"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            الدولة
          </label>
          <input
            id="country"
            type="text"
            name="country"
            placeholder="الدولة"
            className="shadow appearance-none   border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError
            prefix="Country"
            field="country"
            errors={state.errors}
            className="text-red-500 text-xs italic"
          />
        </div>

        <div className="w-3/4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            رقم الهاتف
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            className="shadow appearance-none   border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError
            prefix="Phone"
            field="phone"
            errors={state.errors}
            className="text-red-500 text-xs italic"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="website-type"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          نوع الموقع
        </label>
        <select
          id="website-type"
          name="websiteType"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">اختر نوع الموقع</option>
          <option value="متجر الكتروني">متجر الكتروني</option>
          <option value="موقع تعريف شخصي">موقع تعريف شخصي</option>
          <option value="موقع شركة">موقع شركة</option>
          <option value="موقع اخباري">موقع اخباري</option>
        </select>
        <ValidationError
          prefix="Website Type"
          field="websiteType"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="details"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          التفاصيل
        </label>
        <textarea
          id="details"
          name="details"
          placeholder="التفاصيل"
          className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        <ValidationError
          prefix="Details"
          field="details"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          إرسال
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}
