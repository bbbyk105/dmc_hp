import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Pacifico,
  Crimson_Text,
  Noto_Sans_JP,
} from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Yuki Tanaka - Model Portfolio",
  description:
    "Japanese aesthetic model portfolio showcasing elegant fashion photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${crimsonText.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
