// /components/Services.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-32"
      style={{ backgroundColor: "#FEFCFA" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* ヘッダー */}
        <div
          className={`duration-2000 mb-20 text-center transition-all ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div
            className="mx-auto mb-8 h-12 w-px"
            style={{ backgroundColor: "#D4C4B0" }}
          ></div>

          <h2
            className="mb-8 font-['Crimson_Text'] text-4xl font-normal leading-tight md:text-5xl"
            style={{ color: "#8B7355" }}
          >
            Our Services
          </h2>

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

        {/* サービスカードグリッド */}
        <div
          className={`duration-2000 mb-16 transition-all delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group"
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`
                    : "none",
                  opacity: 0,
                }}
              >
                <article
                  className="h-full overflow-hidden rounded-lg border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    borderColor: "#D4C4B0",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  {/* 画像 */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.titleJa}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30"></div>
                  </div>

                  {/* コンテンツ */}
                  <div className="p-6">
                    <h3
                      className="mb-2 font-['Noto_Sans_JP'] text-xl font-normal transition-colors duration-300 group-hover:font-medium"
                      style={{ color: "#8B7355" }}
                    >
                      {service.titleJa}
                    </h3>

                    <p
                      className="mb-4 font-['Noto_Sans_JP'] text-sm font-light"
                      style={{ color: "#A0937D" }}
                    >
                      {service.subtitle}
                    </p>

                    <p
                      className="mb-6 line-clamp-3 font-['Noto_Sans_JP'] text-sm font-light leading-relaxed"
                      style={{ color: "#7A6B5A" }}
                    >
                      {service.description}
                    </p>

                    {/* 詳細リンク */}
                    <div className="flex items-center justify-end transition-transform duration-300 group-hover:translate-x-2">
                      <span
                        className="mr-2 font-['Noto_Sans_JP'] text-sm font-light"
                        style={{ color: "#9B8C7A" }}
                      >
                        詳細を見る
                      </span>
                      <ArrowRight
                        className="h-4 w-4 transition-colors duration-300"
                        style={{ color: "#D4C4B0" }}
                      />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`duration-2000 text-center transition-all delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <Link
            href="/services"
            className="inline-block rounded-lg px-10 py-4 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: "#8B7355",
              color: "#FFFFFF",
            }}
          >
            全てのサービスを見る
          </Link>
          <div
            className="mx-auto mt-6 h-px w-16"
            style={{ backgroundColor: "#D4C4B0" }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
