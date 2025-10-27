"use client";

import { useState, useEffect, useRef } from "react";

export default function Brands() {
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

  const brands = [
    "UNIQLO",
    "MUJI",
    "COMME DES GARÇONS",
    "ISSEY MIYAKE",
    "YOHJI YAMAMOTO",
    "VOGUE JAPAN",
    "HARPER'S BAZAAR",
    "ELLE JAPAN",
  ];

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
            Collaborations
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
              Brands & Publications
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
          <div className="grid grid-cols-2 items-center gap-12 md:grid-cols-4">
            {brands.map((brand, index) => (
              <div
                key={brand}
                className={`group cursor-pointer text-center transition-all duration-700 delay-${index * 100}`}
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="px-4 py-8 transition-transform duration-500 hover:scale-105">
                  <h3
                    className="font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.2em] transition-all duration-300 group-hover:font-normal"
                    style={{ color: "#9B8C7A" }}
                  >
                    {brand}
                  </h3>
                  <div
                    className="mx-auto mt-4 h-px w-8 transition-all duration-500 group-hover:w-12"
                    style={{ backgroundColor: "#D4C4B0" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p
            className="font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.2em]"
            style={{ color: "#A0937D" }}
          >
            Open for New Collaborations
          </p>
          <div
            className="mx-auto mt-4 h-px w-16"
            style={{ backgroundColor: "#D4C4B0" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
