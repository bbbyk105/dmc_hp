// /components/about/Access.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Car, Train } from "lucide-react";

export default function Access() {
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
            アクセス
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
              Access
            </span>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* 店舗情報 */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
          >
            <div
              className="rounded-lg border p-8"
              style={{
                borderColor: "#D4C4B0",
                backgroundColor: "#FFFFFF",
              }}
            >
              <h3
                className="mb-6 font-['Noto_Sans_JP'] text-2xl font-normal"
                style={{ color: "#8B7355" }}
              >
                店舗情報
              </h3>

              <div className="space-y-4">
                {/* 住所 */}
                <div className="flex items-start">
                  <MapPin
                    className="mr-4 mt-1 h-5 w-5 flex-shrink-0"
                    style={{ color: "#D4C4B0" }}
                  />
                  <div>
                    <p
                      className="mb-1 font-['Noto_Sans_JP'] text-sm font-normal"
                      style={{ color: "#8B7355" }}
                    >
                      住所
                    </p>
                    <p
                      className="font-['Noto_Sans_JP'] font-light"
                      style={{ color: "#7A6B5A" }}
                    >
                      〒XXX-XXXX
                      <br />
                      東京都○○区○○ X-X-X DMCビル 1F
                    </p>
                  </div>
                </div>

                {/* 電話番号 */}
                <div className="flex items-start">
                  <Phone
                    className="mr-4 mt-1 h-5 w-5 flex-shrink-0"
                    style={{ color: "#D4C4B0" }}
                  />
                  <div>
                    <p
                      className="mb-1 font-['Noto_Sans_JP'] text-sm font-normal"
                      style={{ color: "#8B7355" }}
                    >
                      電話番号
                    </p>
                    <p
                      className="font-['Noto_Sans_JP'] font-light"
                      style={{ color: "#7A6B5A" }}
                    >
                      03-XXXX-XXXX
                    </p>
                  </div>
                </div>

                {/* メール */}
                <div className="flex items-start">
                  <Mail
                    className="mr-4 mt-1 h-5 w-5 flex-shrink-0"
                    style={{ color: "#D4C4B0" }}
                  />
                  <div>
                    <p
                      className="mb-1 font-['Noto_Sans_JP'] text-sm font-normal"
                      style={{ color: "#8B7355" }}
                    >
                      メール
                    </p>
                    <p
                      className="font-['Noto_Sans_JP'] font-light"
                      style={{ color: "#7A6B5A" }}
                    >
                      info@dmc-studio.jp
                    </p>
                  </div>
                </div>

                {/* 営業時間 */}
                <div className="flex items-start">
                  <Clock
                    className="mr-4 mt-1 h-5 w-5 flex-shrink-0"
                    style={{ color: "#D4C4B0" }}
                  />
                  <div>
                    <p
                      className="mb-1 font-['Noto_Sans_JP'] text-sm font-normal"
                      style={{ color: "#8B7355" }}
                    >
                      営業時間
                    </p>
                    <p
                      className="font-['Noto_Sans_JP'] font-light"
                      style={{ color: "#7A6B5A" }}
                    >
                      平日: 10:00 - 18:00
                      <br />
                      土日祝: 10:00 - 19:00
                      <br />
                      定休日: 火曜日
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* アクセス方法 */}
            <div
              className="rounded-lg border p-8"
              style={{
                borderColor: "#D4C4B0",
                backgroundColor: "#FFFFFF",
              }}
            >
              <h3
                className="mb-6 font-['Noto_Sans_JP'] text-2xl font-normal"
                style={{ color: "#8B7355" }}
              >
                アクセス方法
              </h3>

              <div className="space-y-4">
                {/* 電車 */}
                <div className="flex items-start">
                  <Train
                    className="mr-4 mt-1 h-5 w-5 flex-shrink-0"
                    style={{ color: "#D4C4B0" }}
                  />
                  <div>
                    <p
                      className="mb-1 font-['Noto_Sans_JP'] text-sm font-normal"
                      style={{ color: "#8B7355" }}
                    >
                      電車でお越しの方
                    </p>
                    <p
                      className="font-['Noto_Sans_JP'] font-light"
                      style={{ color: "#7A6B5A" }}
                    >
                      ○○線「○○駅」徒歩5分
                      <br />
                      △△線「△△駅」徒歩8分
                    </p>
                  </div>
                </div>

                {/* 車 */}
                <div className="flex items-start">
                  <Car
                    className="mr-4 mt-1 h-5 w-5 flex-shrink-0"
                    style={{ color: "#D4C4B0" }}
                  />
                  <div>
                    <p
                      className="mb-1 font-['Noto_Sans_JP'] text-sm font-normal"
                      style={{ color: "#8B7355" }}
                    >
                      お車でお越しの方
                    </p>
                    <p
                      className="font-['Noto_Sans_JP'] font-light"
                      style={{ color: "#7A6B5A" }}
                    >
                      専用駐車場2台完備
                      <br />
                      満車の場合は近隣のコインパーキングをご利用ください
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 地図 */}
          <div
            className={`transition-all delay-300 duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}
          >
            <div
              className="overflow-hidden rounded-lg border shadow-lg"
              style={{ borderColor: "#D4C4B0" }}
            >
              {/* Google Maps埋め込み(実際の地図に置き換えてください) */}
              <div
                className="relative w-full"
                style={{ paddingBottom: "100%" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747550138772!2d139.76493931525887!3d35.681236780193826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DMC Photo Studio 地図"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
