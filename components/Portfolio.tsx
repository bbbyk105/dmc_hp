"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  const portfolioImages = [
    {
      id: 1,
      title: "Editorial Serenity",
      category: "Editorial",
      height: "h-96",
      image: "/kimono/1.webp",
    },
    {
      id: 2,
      title: "Natural Grace",
      category: "Portrait",
      height: "h-80",
      image: "/kimono/2.webp",
    },
    {
      id: 3,
      title: "Timeless Beauty",
      category: "Beauty",
      height: "h-[28rem]",
      image: "/kimono/3.webp",
    },
    {
      id: 4,
      title: "Modern Elegance",
      category: "Fashion",
      height: "h-72",
      image: "/kimono/4.webp",
    },
    {
      id: 5,
      title: "Gentle Light",
      category: "Editorial",
      height: "h-[26rem]",
      image: "/kimono/5.webp",
    },
    {
      id: 6,
      title: "Pure Form",
      category: "Artistic",
      height: "h-88",
      image: "/kimono/6.webp",
    },
    {
      id: 7,
      title: "Soft Harmony",
      category: "Portrait",
      height: "h-80",
      image: "/kimono/7.webp",
    },
    {
      id: 8,
      title: "Ethereal Moment",
      category: "Fashion",
      height: "h-96",
      image: "/kimono/8.webp",
    },
    {
      id: 9,
      title: "Silent Poetry",
      category: "Artistic",
      height: "h-[22rem]",
      image: "/kimono/9.webp",
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="px-6 py-32"
      style={{ backgroundColor: "#F8F6F3" }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`duration-2000 mb-24 text-center transition-all ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div
            className="mx-auto mb-8 h-16 w-px"
            style={{ backgroundColor: "#D4C4B0" }}
          ></div>

          <h2
            className="mb-8 font-['Crimson_Text'] text-5xl font-normal leading-tight md:text-7xl"
            style={{ color: "#8B7355" }}
          >
            Portfolio
          </h2>

          <div className="mb-8 flex items-center justify-center">
            <div
              className="h-px w-16"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>
            <span
              className="mx-8 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.3em]"
              style={{ color: "#A0937D" }}
            >
              Selected Works
            </span>
            <div
              className="h-px w-16"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>
          </div>
        </div>

        <div
          className={`duration-2000 delay-303 transition-all ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
            {portfolioImages.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer break-inside-avoid overflow-hidden shadow-sm transition-all duration-700 hover:shadow-xl"
                style={{ backgroundColor: "#FEFCFA" }}
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full ${item.height} object-cover object-top transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-90`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 transition-all duration-700 group-hover:bg-black/10">
                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 transform p-6 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                      <div
                        className="mb-3 h-px w-8"
                        style={{ backgroundColor: "#D4C4B0" }}
                      ></div>
                      <h3 className="mb-2 font-['Crimson_Text'] text-lg font-normal tracking-wide text-white">
                        {item.title}
                      </h3>
                      <p className="font-['Noto_Sans_JP'] text-xs font-light uppercase tracking-[0.2em] text-white/80">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/gallery">
            <button
              className="transform cursor-pointer whitespace-nowrap border px-12 py-4 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.2em] transition-all duration-700 hover:scale-105"
              style={{
                backgroundColor: "transparent",
                color: "#8B7355",
                borderColor: "#D4C4B0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#8B7355";
                e.currentTarget.style.color = "#FAF8F5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#8B7355";
              }}
            >
              View Collection
            </button>
          </Link>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8 transition-all duration-500"
          style={{ backgroundColor: "rgba(245, 243, 240, 0.95)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-full max-w-4xl">
            <img
              src={
                portfolioImages.find((img) => img.id === selectedImage)?.image
              }
              alt="Portfolio Image"
              className="h-auto w-full object-contain shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 cursor-pointer items-center justify-center text-2xl transition-opacity duration-300 hover:opacity-70"
              style={{ color: "#8B7355" }}
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
