// /components/about/Facilities.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const facilities = [
  {
    title: "撮影スタジオ",
    description:
      "自然光が入る明るいスタジオ。様々な撮影シーンに対応できる多彩な背景と照明設備を完備しています。",
    image:
      "https://readdy.ai/api/search-image?query=photo%20studio%20interior%20professional%20lighting&width=600&height=400&seq=studio-room-1",
  },
  {
    title: "衣装ルーム",
    description:
      "豊富な衣装を取り揃えた衣装ルーム。ドレス、振袖、袴、七五三用衣装など、あらゆるシーンに対応します。",
    image:
      "https://readdy.ai/api/search-image?query=dress%20room%20kimono%20wardrobe%20elegant&width=600&height=400&seq=studio-room-2",
  },
  {
    title: "メイクルーム",
    description:
      "プロのヘアメイクアーティストが対応するメイクルーム。リラックスして準備いただけます。",
    image:
      "https://readdy.ai/api/search-image?query=makeup%20room%20salon%20professional&width=600&height=400&seq=studio-room-3",
  },
  {
    title: "カフェスペース",
    description:
      "撮影前後にゆっくりお過ごしいただけるカフェスペース。自慢のコーヒーと紅茶をご用意しております。",
    image:
      "https://readdy.ai/api/search-image?query=cozy%20cafe%20interior%20warm%20lighting&width=600&height=400&seq=studio-room-4",
  },
];

export default function Facilities() {
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
      className="px-6 py-24"
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

          <h2
            className="mb-8 font-['Crimson_Text'] text-4xl font-normal leading-tight md:text-5xl"
            style={{ color: "#8B7355" }}
          >
            施設・設備
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
              Facilities
            </span>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>
          </div>
        </div>

        {/* 施設グリッド */}
        <div className="space-y-16">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`grid items-center gap-8 transition-all duration-1000 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* 画像 */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg border-2"
                  style={{ borderColor: "#D4C4B0" }}
                ></div>
              </div>

              {/* テキスト */}
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <h3
                  className="mb-4 font-['Crimson_Text'] text-3xl font-normal"
                  style={{ color: "#8B7355" }}
                >
                  {facility.title}
                </h3>
                <div
                  className="mb-6 h-px w-16"
                  style={{ backgroundColor: "#D4C4B0" }}
                ></div>
                <p
                  className="font-['Noto_Sans_JP'] text-lg font-light leading-relaxed"
                  style={{ color: "#7A6B5A" }}
                >
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
