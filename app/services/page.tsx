// /app/services/page.tsx
import { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import ServicesGrid from "@/components/services/ServicesGrid";

export const metadata: Metadata = {
  title: "サービス一覧",
  description:
    "DMC Photo Studioのサービス一覧。アニバーサリー撮影、ウェディング、七五三、成人式など、お客様のニーズに合わせた撮影プランをご用意しております。",
  openGraph: {
    title: "サービス一覧 | DMC Photo Studio",
    description:
      "アニバーサリー撮影、ウェディング、七五三、成人式など、人生の大切な瞬間を記録するサービスをご提供。",
  },
};

const breadcrumbItems = [
  { label: "ホーム", href: "/" },
  { label: "サービス", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ServicesGrid />
    </>
  );
}
