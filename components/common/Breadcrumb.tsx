// /components/common/Breadcrumb.tsx
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // 構造化データ(JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || ""}${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* パンくずリスト UI */}
      <nav
        aria-label="Breadcrumb"
        className="py-4"
        style={{ backgroundColor: "#FEFCFA" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <ol className="flex items-center space-x-2 text-sm">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight
                    className="mx-2 h-4 w-4"
                    style={{ color: "#D4C4B0" }}
                  />
                )}
                {index === items.length - 1 ? (
                  <span
                    className="font-['Noto_Sans_JP'] font-normal"
                    style={{ color: "#8B7355" }}
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="font-['Noto_Sans_JP'] font-light transition-colors hover:font-normal"
                    style={{ color: "#9B8C7A" }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
