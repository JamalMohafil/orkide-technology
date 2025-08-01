import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
// Components
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const noto_kufi_arabic = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-noto-kufi-arabic",
  display: "swap", // Better font loading performance
});

export const metadata: Metadata = {
  title: {
    default: "أوركيدا تك - تطوير التطبيقات والمواقع الإلكترونية | Orkide Tech",
    template: "%s | أوركيدا تك - Orkide Tech"
  },
  description: "أوركيدا تكنولوجي شركة رائدة في تطوير التطبيقات الجوالة والمواقع الإلكترونية والتسويق الرقمي. نقدم حلول تقنية مبتكرة وخدمات تطوير عالية الجودة للشركات والأفراد في الشرق الأوسط.",
  keywords: [
    "تطوير التطبيقات",
    "تطوير المواقع",
    "التسويق الرقمي",
    "تطبيقات الجوال",
    "مواقع إلكترونية",
    "تقنية المعلومات",
    "حلول برمجية",
    "أوركيدا تك",
    "Orkide Tech",
    "app development",
    "web development",
    "digital marketing",
    "mobile apps",
    "websites",
    "software solutions"
  ],
  authors: [{ name: "Orkide Tech Team" }],
  creator: "Orkide Tech",
  publisher: "Orkide Tech",
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: "https://orkide-tech.vercel.app",
    siteName: "أوركيدا تك - Orkide Tech",
    title: "أوركيدا تك - تطوير التطبيقات والمواقع الإلكترونية",
    description: "شركة رائدة في تطوير التطبيقات الجوالة والمواقع الإلكترونية والتسويق الرقمي. حلول تقنية مبتكرة وخدمات عالية الجودة.",
    images: [
      {
        url: "https://orkide-tech.vercel.app/og-image.png", // Create a proper OG image
        width: 1200,
        height: 630,
        alt: "أوركيدا تك - Orkide Tech Logo",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@orkidetech", // Add your Twitter handle if available
    creator: "@orkidetech",
    title: "أوركيدا تك - تطوير التطبيقات والمواقع الإلكترونية",
    description: "شركة رائدة في تطوير التطبيقات الجوالة والمواقع الإلكترونية والتسويق الرقمي.",
    images: ["https://orkide-tech.vercel.app/twitter-image.png"],
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  
  // Additional metadata
  applicationName: "Orkide Tech",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Business",
  
  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification
  verification: {
    google: "meEuCLq3Cy9KQwI_scIjTfnu89H2GDWitCDCsaCH1yM",
    // Add other verification codes if needed
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  // Alternate languages
  alternates: {
    canonical: "https://orkide-tech.vercel.app",
    languages: {
      "ar-SA": "https://orkide-tech.vercel.app",
      "en-US": "https://orkide-tech.vercel.app/en",
    },
  },
  
  // Additional meta tags
  other: {
    "theme-color": "#ffffff",
    "color-scheme": "light",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className="bg-gray-200" dir="rtl">
      <head>
        {/* Additional head elements for better SEO */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "أوركيدا تك - Orkide Tech",
              "alternateName": "Orkide Tech",
              "url": "https://orkide-tech.vercel.app",
              "logo": "https://orkide-tech.vercel.app/logo.png",
              "description": "شركة رائدة في تطوير التطبيقات الجوالة والمواقع الإلكترونية والتسويق الرقمي",
              "foundingDate": "2020", // Update with actual founding date
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["Arabic", "English"]
              },
              "sameAs": [
                // Add your social media URLs
                // "https://www.facebook.com/orkidetech",
                // "https://www.twitter.com/orkidetech",
                // "https://www.linkedin.com/company/orkidetech",
                // "https://www.instagram.com/orkidetech"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": "Middle East"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "خدماتنا - Our Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "تطوير التطبيقات الجوالة",
                      "description": "تطوير تطبيقات جوالة احترافية لنظامي iOS و Android"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "تطوير المواقع الإلكترونية",
                      "description": "تصميم وتطوير مواقع إلكترونية متجاوبة وعالية الأداء"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "التسويق الرقمي",
                      "description": "خدمات التسويق الرقمي الشاملة وإدارة وسائل التواصل الاجتماعي"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${noto_kufi_arabic.variable} w-full max-w-[1920px] overflow-x-hidden mx-auto bg-white`}
      >
        <div className="top-0 max-w-[1920px] z-[10] fixed w-full">
          <Nav />
        </div>
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}