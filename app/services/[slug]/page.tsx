// /app/services/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import ServiceDetail from "@/components/services/ServiceDetail";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// 動的メタデータ生成
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "サービスが見つかりません | DMC",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dmc-studio.jp";

  return {
    title: `${service.titleJa} | DMC Photo Studio`,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    openGraph: {
      title: `${service.titleJa} | DMC`,
      description: service.metaDescription,
      url: `${siteUrl}/services/${service.slug}`,
      siteName: "DMC Photo Studio",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.titleJa,
        },
      ],
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.titleJa} | DMC`,
      description: service.metaDescription,
      images: [service.image],
    },
    alternates: {
      canonical: `${siteUrl}/services/${service.slug}`,
    },
  };
}

// 静的パス生成(SSG用)
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // パンくずリストのデータ
  const breadcrumbItems = [
    { label: "ホーム", href: "/" },
    { label: "サービス", href: "/services" },
    { label: service.titleJa, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ServiceDetail service={service} />
    </>
  );
}
