// /components/services/ServiceDetail.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { ServiceData } from "@/lib/services-data";
import { Check, Clock, MapPin } from "lucide-react";
import Image from "next/image";

interface ServiceDetailProps {
  service: ServiceData;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
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
            className="mb-4 font-['Crimson_Text'] text-4xl font-normal leading-tight md:text-5xl"
            style={{ color: "#8B7355" }}
          >
            {service.titleJa}
          </h1>

          <p
            className="font-['Noto_Sans_JP'] text-lg font-light"
            style={{ color: "#9B8C7A" }}
          >
            {service.subtitle}
          </p>

          <div
            className="mx-auto mt-6 h-px w-16"
            style={{ backgroundColor: "#D4C4B0" }}
          ></div>
        </div>

        {/* メイン画像 */}
        <div
          className={`duration-2000 mb-16 transition-all delay-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg shadow-lg">
            <Image
              src={service.image}
              alt={service.titleJa}
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* コンテンツグリッド */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* 説明 */}
          <div
            className={`duration-2000 transition-all delay-500 lg:col-span-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h2
              className="mb-6 font-['Crimson_Text'] text-2xl font-normal"
              style={{ color: "#8B7355" }}
            >
              サービス詳細
            </h2>

            <p
              className="mb-8 font-['Noto_Sans_JP'] text-lg font-light leading-relaxed"
              style={{ color: "#7A6B5A" }}
            >
              {service.description}
            </p>

            {/* 特徴 */}
            <div className="mb-8">
              <h3
                className="mb-4 font-['Noto_Sans_JP'] text-xl font-normal"
                style={{ color: "#8B7355" }}
              >
                特徴
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                    style={{ color: "#7A6B5A" }}
                  >
                    <Check
                      className="mr-3 mt-1 h-5 w-5 flex-shrink-0"
                      style={{ color: "#D4C4B0" }}
                    />
                    <span className="font-['Noto_Sans_JP'] font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 含まれるもの */}
            <div>
              <h3
                className="mb-4 font-['Noto_Sans_JP'] text-xl font-normal"
                style={{ color: "#8B7355" }}
              >
                プラン内容
              </h3>
              <ul className="space-y-3">
                {service.includes.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                    style={{ color: "#7A6B5A" }}
                  >
                    <Check
                      className="mr-3 mt-1 h-5 w-5 flex-shrink-0"
                      style={{ color: "#D4C4B0" }}
                    />
                    <span className="font-['Noto_Sans_JP'] font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* サイドバー */}
          <div
            className={`duration-2000 space-y-8 transition-all delay-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            {/* 料金 */}
            <div
              className="rounded-lg border p-6"
              style={{ borderColor: "#D4C4B0", backgroundColor: "#FFFFFF" }}
            >
              <h3
                className="mb-4 font-['Noto_Sans_JP'] text-lg font-normal"
                style={{ color: "#8B7355" }}
              >
                料金
              </h3>
              <p
                className="font-['Crimson_Text'] text-3xl font-normal"
                style={{ color: "#8B7355" }}
              >
                {service.price}
              </p>
            </div>

            {/* スケジュール */}
            {service.schedule && (
              <div
                className="rounded-lg border p-6"
                style={{ borderColor: "#D4C4B0", backgroundColor: "#FFFFFF" }}
              >
                <h3
                  className="mb-4 font-['Noto_Sans_JP'] text-lg font-normal"
                  style={{ color: "#8B7355" }}
                >
                  スケジュール
                </h3>
                <div className="space-y-3">
                  {service.schedule.days && (
                    <div className="flex items-start">
                      <Clock
                        className="mr-3 mt-1 h-5 w-5 flex-shrink-0"
                        style={{ color: "#D4C4B0" }}
                      />
                      <span
                        className="font-['Noto_Sans_JP'] font-light"
                        style={{ color: "#7A6B5A" }}
                      >
                        {service.schedule.days}
                      </span>
                    </div>
                  )}
                  {service.schedule.times && (
                    <div className="ml-8 space-y-1">
                      {service.schedule.times.map((time, index) => (
                        <p
                          key={index}
                          className="font-['Noto_Sans_JP'] text-sm font-light"
                          style={{ color: "#9B8C7A" }}
                        >
                          ① {time}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 場所 */}
            <div
              className="rounded-lg border p-6"
              style={{ borderColor: "#D4C4B0", backgroundColor: "#FFFFFF" }}
            >
              <h3
                className="mb-4 font-['Noto_Sans_JP'] text-lg font-normal"
                style={{ color: "#8B7355" }}
              >
                撮影場所
              </h3>
              <div className="flex items-start">
                <MapPin
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0"
                  style={{ color: "#D4C4B0" }}
                />
                <span
                  className="font-['Noto_Sans_JP'] font-light"
                  style={{ color: "#7A6B5A" }}
                >
                  DMC Photo Studio
                </span>
              </div>
            </div>

            {/* 予約ボタン */}
            <button
              className="w-full rounded-lg py-4 font-['Noto_Sans_JP'] font-normal tracking-wider transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "#8B7355",
                color: "#FFFFFF",
              }}
              onClick={() => alert("予約システムは準備中です")}
            >
              予約する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
