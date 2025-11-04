// /app/layout.tsx
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Pacifico,
  Crimson_Text,
  Noto_Sans_JP,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const crimsonText = Crimson_Text({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-jp",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dmc-studio.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DMC Photo Studio | 記念撮影・ウェディング・七五三",
    template: "%s | DMC Photo Studio",
  },
  description:
    "DMC Photo Studioは東京を拠点とした写真スタジオです。アニバーサリー撮影、ウェディング、七五三、成人式など、人生の大切な瞬間を美しく残します。",
  keywords: [
    "写真スタジオ",
    "記念撮影",
    "ウェディング",
    "七五三",
    "成人式",
    "アニバーサリー",
    "DMC",
    "東京",
  ],
  authors: [{ name: "DMC Photo Studio" }],
  creator: "DMC Photo Studio",
  publisher: "DMC Photo Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "DMC Photo Studio",
    title: "DMC Photo Studio | 記念撮影・ウェディング・七五三",
    description:
      "人生の大切な瞬間を美しく残す写真スタジオ。アニバーサリー撮影、ウェディング、七五三、成人式など幅広く対応。",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "DMC Photo Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMC Photo Studio | 記念撮影・ウェディング・七五三",
    description:
      "人生の大切な瞬間を美しく残す写真スタジオ。アニバーサリー撮影、ウェディング、七五三、成人式など幅広く対応。",
    images: [`${siteUrl}/og-image.jpg`],
  },
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
  verification: {
    // Google Search Console用
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <head>
        {/* 構造化データ - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "DMC Photo Studio",
              image: `${siteUrl}/og-image.jpg`,
              "@id": siteUrl,
              url: siteUrl,
              telephone: "+81-3-XXXX-XXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "XX-XX-XX",
                addressLocality: "Tokyo",
                postalCode: "XXX-XXXX",
                addressCountry: "JP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.6812,
                longitude: 139.7671,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "10:00",
                  closes: "19:00",
                },
              ],
              sameAs: [
                // SNSリンクがあれば追加
                // "https://www.facebook.com/dmc-studio",
                // "https://www.instagram.com/dmc_studio",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${crimsonText.variable} ${notoSansJP.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
