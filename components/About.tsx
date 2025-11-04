// /components/About.tsx (既存のファイルを更新)
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
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
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-2">
            <div
              className={`duration-2000 transition-all ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <div className="mb-16">
                <div
                  className="mb-8 h-12 w-px"
                  style={{ backgroundColor: "#D4C4B0" }}
                ></div>
                <h2
                  className="mb-8 font-['Crimson_Text'] text-4xl font-normal leading-tight md:text-6xl"
                  style={{ color: "#8B7355" }}
                >
                  About
                </h2>
              </div>

              <div className="space-y-12">
                <div className="relative">
                  <div
                    className="absolute -left-6 top-0 h-2 w-2 rounded-full"
                    style={{ backgroundColor: "#D4C4B0" }}
                  ></div>
                  <p
                    className="pl-6 font-['Noto_Sans_JP'] text-lg font-light leading-relaxed"
                    style={{ color: "#7A6B5A" }}
                  >
                    DMC Photo Studioは、東京を拠点とした写真スタジオです。
                    お客様の大切な記念日や人生の節目を、プロフェッショナルな技術と温かいおもてなしで記録いたします。
                  </p>
                </div>

                <div className="relative">
                  <div
                    className="absolute -left-6 top-0 h-2 w-2 rounded-full"
                    style={{ backgroundColor: "#D4C4B0" }}
                  ></div>
                  <p
                    className="pl-6 font-['Noto_Sans_JP'] text-lg font-light leading-relaxed"
                    style={{ color: "#7A6B5A" }}
                  >
                    アニバーサリー撮影から七五三、成人式、ウェディングまで、
                    幅広いシーンに対応。経験豊富なスタッフが、お客様一人ひとりに寄り添い、
                    最高の一枚を残すお手伝いをいたします。
                  </p>
                </div>

                <div className="pt-8">
                  <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3
                        className="font-['Crimson_Text'] text-xl font-normal tracking-wide"
                        style={{ color: "#8B7355" }}
                      >
                        Location
                      </h3>
                      <div
                        className="h-px w-8"
                        style={{ backgroundColor: "#D4C4B0" }}
                      ></div>
                      <p
                        className="font-['Noto_Sans_JP'] font-light"
                        style={{ color: "#9B8C7A" }}
                      >
                        Tokyo, Japan
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3
                        className="font-['Crimson_Text'] text-xl font-normal tracking-wide"
                        style={{ color: "#8B7355" }}
                      >
                        Open
                      </h3>
                      <div
                        className="h-px w-8"
                        style={{ backgroundColor: "#D4C4B0" }}
                      ></div>
                      <p
                        className="font-['Noto_Sans_JP'] font-light"
                        style={{ color: "#9B8C7A" }}
                      >
                        10:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* 詳細ページへのリンク */}
                <div className="pt-8">
                  <Link
                    href="/about"
                    className="group inline-flex items-center font-['Noto_Sans_JP'] text-sm font-light transition-all duration-300 hover:font-normal"
                    style={{ color: "#9B8C7A" }}
                  >
                    <span className="mr-2">詳しく見る</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                      style={{ color: "#D4C4B0" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div
              className={`duration-2000 transition-all delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
            >
              <div className="relative">
                <img
                  src="/kimono/1.webp"
                  alt="DMC Photo Studio"
                  className="h-auto w-full object-cover shadow-lg"
                  loading="lazy"
                />
                <div
                  className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-opacity-30"
                  style={{ borderColor: "#D4C4B0" }}
                ></div>
              </div>

              <div className="mt-8 text-center">
                <div
                  className="mx-auto mb-4 h-px w-16"
                  style={{ backgroundColor: "#D4C4B0" }}
                ></div>
                <p
                  className="font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.2em]"
                  style={{ color: "#A0937D" }}
                >
                  DMC Photo Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
