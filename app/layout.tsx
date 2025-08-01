import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
// Components
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const noto_kufi_arabic = Noto_Kufi_Arabic({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-noto-kufi-arabic",
});



export const metadata: Metadata = {
  title: "Orkide Tech",
  icons: {
    icon: "https://orkide-tech.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75",
    apple: "https://orkide-tech.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75",
  },
  description:
    "اوركيدا تكنولوجي هي شركة متخصصة في تطوير التطبيقات والمواقع وتسويقها، مع فريق مبدع ومتميز يضمن جودة عالية وتجربة مميزة للعملاء.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(noto_kufi_arabic)
  return (
    <html lang="en" className="bg-gray-200" dir="rtl">
      <body
        className={`${noto_kufi_arabic.variable} w-full max-w-[1920px] overflow-x-hidden mx-auto bg-white`}
      >
        <div className="top-0 max-w-[1920px] z-[10] fixed w-full ">
          <Nav />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
