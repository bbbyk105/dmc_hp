// /components/about/AboutHero.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutHero() {
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
      className="relative px-6 py-24"
      style={{ backgroundColor: "#FEFCFA" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* テキストコンテンツ */}
          <div
            className={`duration-2000 transition-all ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
          >
            <div
              className="mb-8 h-12 w-px"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>

            <h1
              className="mb-6 font-['Crimson_Text'] text-5xl font-normal leading-tight md:text-6xl"
              style={{ color: "#8B7355" }}
            >
              About Us
            </h1>

            <div
              className="mb-8 h-px w-16"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>

            <h2
              className="mb-6 font-['Noto_Sans_JP'] text-2xl font-normal"
              style={{ color: "#8B7355" }}
            >
              人生の大切な瞬間を、美しく記録する
            </h2>

            <p
              className="mb-6 font-['Noto_Sans_JP'] text-lg font-light leading-relaxed"
              style={{ color: "#7A6B5A" }}
            >
              DMC Photo Studioは、東京を拠点とした写真スタジオです。
              お客様の大切な記念日や人生の節目を、プロフェッショナルな技術と温かいおもてなしで記録いたします。
            </p>

            <p
              className="font-['Noto_Sans_JP'] text-lg font-light leading-relaxed"
              style={{ color: "#7A6B5A" }}
            >
              アニバーサリー撮影から七五三、成人式、ウェディングまで、
              幅広いシーンに対応。経験豊富なスタッフが、お客様一人ひとりに寄り添い、
              最高の一枚を残すお手伝いをいたします。
            </p>
          </div>

          {/* 画像 */}
          <div
            className={`duration-2000 transition-all delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}
          >
            <div className="relative">
              <Image
                src="https://readdy.ai/api/search-image?query=modern%20photo%20studio%20interior%20Japan%20elegant%20minimalist&width=700&height=500&seq=studio-1"
                alt="DMC Photo Studio 外観"
                width={700}
                height={500}
                className="h-auto w-full rounded-lg object-cover shadow-xl"
                priority
              />
              <div
                className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg border-2"
                style={{ borderColor: "#D4C4B0" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
