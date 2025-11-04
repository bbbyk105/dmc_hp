// /components/home/ServicesSection.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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

        <div
          className={`duration-2000 transition-all delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="grid grid-cols-2 items-center gap-12 md:grid-cols-3 lg:grid-cols-4">
            {servicesData.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group cursor-pointer text-center transition-all duration-700`}
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="px-4 py-8 transition-transform duration-500 hover:scale-105">
                  <h3
                    className="font-['Noto_Sans_JP'] text-sm font-light tracking-[0.15em] transition-all duration-300 group-hover:font-normal"
                    style={{ color: "#9B8C7A" }}
                  >
                    {service.titleJa}
                  </h3>
                  <div
                    className="mx-auto mt-4 h-px w-8 transition-all duration-500 group-hover:w-12"
                    style={{ backgroundColor: "#D4C4B0" }}
                  ></div>
                  <p
                    className="mt-3 font-['Crimson_Text'] text-lg font-normal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ color: "#8B7355" }}
                  >
                    {service.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-block rounded-lg px-8 py-3 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-lg"
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
    </section>
  );
}
