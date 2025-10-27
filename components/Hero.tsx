"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Unsplashの画像URL（アニバーサリー撮影、ドレス、家族写真などのテーマ）
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&q=80", // ウェディングドレス
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&h=1080&fit=crop&q=80", // 家族写真
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&h=1080&fit=crop&q=80", // 七五三イメージ
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // 画像を自動で切り替える
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5秒ごとに切り替え

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#F5F3F0" }}
    >
      {/* 背景画像スライドショー */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        >
          <Image
            src={image}
            alt={`DMC Photo Studio Background ${index + 1}`}
            fill
            priority={index === 0}
            quality={90}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      ))}

      {/* 濃いめのオーバーレイ */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(245, 243, 240, 0.6)" }}
      />

      <div
        className={`duration-2500 relative z-20 mx-auto max-w-4xl px-6 text-center transition-all ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-12">
          <div
            className="mx-auto mb-8 h-16 w-px"
            style={{ backgroundColor: "#8B7355" }}
          ></div>

          <h1
            className="mb-8 font-['Crimson_Text'] text-5xl font-bold leading-tight tracking-wide md:text-7xl lg:text-8xl"
            style={{
              color: "#5A4A3A",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            DMC
          </h1>

          <div className="mb-8 flex items-center justify-center">
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#8B7355" }}
            ></div>
            <span
              className="mx-6 font-['Noto_Sans_JP'] text-sm font-medium uppercase tracking-[0.3em]"
              style={{ color: "#5A4A3A" }}
            >
              PHOTO STUDIO
            </span>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#8B7355" }}
            ></div>
          </div>

          <p
            className="mb-12 font-['Noto_Sans_JP'] text-lg font-normal tracking-wide md:text-xl"
            style={{
              color: "#5A4A3A",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            人生の特別な瞬間を、永遠の思い出に
          </p>
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <button
              className="transform cursor-pointer whitespace-nowrap border-2 px-10 py-3 font-['Noto_Sans_JP'] text-sm font-medium uppercase tracking-[0.2em] transition-all duration-700 hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "#5A4A3A",
                borderColor: "#8B7355",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#8B7355";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.9)";
                e.currentTarget.style.color = "#5A4A3A";
              }}
            >
              View Plans
            </button>
          </Link>
        </div>
      </div>

      {/* スライドインジケーター - sectionの直下に配置 */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 transform gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className="transition-all duration-300"
            style={{
              width: currentImageIndex === index ? "32px" : "8px",
              height: "8px",
              backgroundColor:
                currentImageIndex === index ? "#5A4A3A" : "#D4C4B0",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
            aria-label={`画像 ${index + 1} に切り替え`}
          />
        ))}
      </div>
    </section>
  );
}
