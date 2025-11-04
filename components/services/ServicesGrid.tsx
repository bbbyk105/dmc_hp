// /components/services/ServicesGrid.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-16"
      style={{ backgroundColor: "#FEFCFA" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* ヘッダー */}
        <div
          className={`duration-2000 mb-16 text-center transition-all ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div
            className="mx-auto mb-8 h-12 w-px"
            style={{ backgroundColor: "#D4C4B0" }}
          ></div>

          <h1
            className="mb-8 font-['Crimson_Text'] text-4xl font-normal leading-tight md:text-5xl"
            style={{ color: "#8B7355" }}
          >
            Our Services
          </h1>

          <div className="flex items-center justify-center">
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>
            <span
              className="mx-6 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.3em]"
              style={{ color: "#A0937D" }}
            >
              人生の大切な瞬間を
            </span>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>
          </div>
        </div>

        {/* サービスグリッド */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <article
                className="overflow-hidden rounded-lg border transition-all duration-500 hover:shadow-xl"
                style={{
                  borderColor: "#D4C4B0",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {/* 画像 */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.titleJa}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>

                {/* コンテンツ */}
                <div className="p-6">
                  <h2
                    className="mb-2 font-['Crimson_Text'] text-2xl font-normal transition-colors duration-300 group-hover:font-semibold"
                    style={{ color: "#8B7355" }}
                  >
                    {service.titleJa}
                  </h2>

                  <p
                    className="mb-4 font-['Noto_Sans_JP'] text-sm font-light"
                    style={{ color: "#A0937D" }}
                  >
                    {service.subtitle}
                  </p>

                  <p
                    className="mb-4 line-clamp-2 font-['Noto_Sans_JP'] text-sm font-light leading-relaxed"
                    style={{ color: "#7A6B5A" }}
                  >
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className="font-['Crimson_Text'] text-xl font-normal"
                      style={{ color: "#8B7355" }}
                    >
                      {service.price}
                    </span>

                    <div className="flex items-center transition-transform duration-300 group-hover:translate-x-2">
                      <span
                        className="mr-2 font-['Noto_Sans_JP'] text-sm font-light"
                        style={{ color: "#9B8C7A" }}
                      >
                        詳細を見る
                      </span>
                      <ArrowRight
                        className="h-4 w-4"
                        style={{ color: "#D4C4B0" }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p
            className="mb-4 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.2em]"
            style={{ color: "#A0937D" }}
          >
            ご予約・お問い合わせ
          </p>
          <div
            className="mx-auto h-px w-16"
            style={{ backgroundColor: "#D4C4B0" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
