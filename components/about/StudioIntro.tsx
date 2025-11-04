// /components/about/StudioIntro.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Camera, Users, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "プロフェッショナルな技術",
    description:
      "経験豊富なフォトグラファーが、最新の機材と確かな技術でお客様の大切な瞬間を美しく記録いたします。",
  },
  {
    icon: Users,
    title: "きめ細やかな対応",
    description:
      "お客様一人ひとりのご要望に寄り添い、リラックスできる雰囲気づくりを心がけています。",
  },
  {
    icon: Sparkles,
    title: "充実した設備",
    description:
      "最新の撮影機材、豊富な衣装、多様な撮影セットをご用意。あらゆるシーンに対応できます。",
  },
  {
    icon: Heart,
    title: "温かいおもてなし",
    description:
      "カフェスペース併設で、撮影前後もゆったりとお過ごしいただけます。自慢のコーヒーもお楽しみください。",
  },
];

export default function StudioIntro() {
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
      style={{ backgroundColor: "#FAF8F5" }}
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
            DMCの特徴
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
              Our Features
            </span>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>
          </div>
        </div>

        {/* 特徴グリッド */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div
                  className="h-full rounded-lg border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    borderColor: "#D4C4B0",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundColor: "#FEFCFA" }}
                  >
                    <Icon className="h-8 w-8" style={{ color: "#8B7355" }} />
                  </div>

                  <h3
                    className="mb-4 font-['Noto_Sans_JP'] text-xl font-normal"
                    style={{ color: "#8B7355" }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="font-['Noto_Sans_JP'] font-light leading-relaxed"
                    style={{ color: "#7A6B5A" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
