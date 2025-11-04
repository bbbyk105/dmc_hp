// /app/about/page.tsx
import { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import AboutHero from "@/components/about/AboutHero";
import StudioIntro from "@/components/about/StudioIntro";
import Facilities from "@/components/about/Facilities";
import Access from "@/components/about/Access";

export const metadata: Metadata = {
  title: "店舗・スタジオ紹介",
  description:
    "DMC Photo Studioは東京を拠点とした写真スタジオです。最新の撮影設備と経験豊富なスタッフが、お客様の大切な瞬間を美しく記録いたします。",
  openGraph: {
    title: "店舗・スタジオ紹介 | DMC Photo Studio",
    description:
      "DMC Photo Studioの施設、設備、アクセス情報をご紹介。お客様に快適な撮影体験をご提供いたします。",
  },
};

const breadcrumbItems = [
  { label: "ホーム", href: "/" },
  { label: "店舗・スタジオ紹介", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <AboutHero />
      <StudioIntro />
      <Facilities />
      <Access />
    </>
  );
}
