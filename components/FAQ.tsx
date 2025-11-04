// /components/FAQ.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "予約はどのように行えますか?",
    answer:
      "お電話、メール、または公式LINEからご予約いただけます。各サービスページの「予約する」ボタンからも予約フォームにアクセスできます。撮影希望日の1週間前までのご予約をお勧めしております。",
  },
  {
    question: "撮影当日の持ち物は何が必要ですか?",
    answer:
      "基本的な撮影小物やドレスはスタジオでご用意しておりますので、手ぶらでお越しいただけます。ただし、特別な思い入れのあるアイテムをお持ちいただくことも可能です。詳細は予約時にご案内いたします。",
  },
  {
    question: "撮影データはいつ受け取れますか?",
    answer:
      "撮影後、約2週間でデータをお渡しいたします。お急ぎの場合は別途ご相談ください。データはオンラインでのダウンロード、またはUSBメモリでのお渡しが可能です。",
  },
  {
    question: "キャンセルや日程変更は可能ですか?",
    answer:
      "撮影日の3日前までであれば無料でキャンセル・変更が可能です。それ以降のキャンセルの場合、キャンセル料が発生する場合がございますので、予めご了承ください。",
  },
  {
    question: "駐車場はありますか?",
    answer:
      "スタジオ専用の駐車場を2台分ご用意しております。満車の場合は近隣のコインパーキングをご利用ください。駐車券をお持ちいただければ一部補助させていただきます。",
  },
  {
    question: "衣装のサイズが心配です",
    answer:
      "お子様から大人の方まで、幅広いサイズをご用意しております。事前にサイズをお伺いし、最適な衣装をご提案いたします。試着も可能ですので、お気軽にご相談ください。",
  },
];

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="px-6 py-32"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      <div className="mx-auto max-w-4xl">
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
            FAQ
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
              よくあるご質問
            </span>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>
          </div>
        </div>

        {/* FAQ リスト */}
        <div
          className={`duration-2000 space-y-4 transition-all delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: "#D4C4B0",
                backgroundColor: "#FFFFFF",
                animation: isVisible
                  ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                  : "none",
                opacity: 0,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-opacity-50"
                style={{
                  backgroundColor:
                    openIndex === index ? "#FEFCFA" : "transparent",
                }}
              >
                <h3
                  className="flex-1 pr-4 font-['Noto_Sans_JP'] text-lg font-normal"
                  style={{ color: "#8B7355" }}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ color: "#D4C4B0" }}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div
                  className="border-t p-6"
                  style={{ borderColor: "#F0EBE3" }}
                >
                  <p
                    className="font-['Noto_Sans_JP'] font-light leading-relaxed"
                    style={{ color: "#7A6B5A" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* お問い合わせCTA */}
        <div
          className={`duration-2000 mt-12 text-center transition-all delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <p
            className="mb-4 font-['Noto_Sans_JP'] text-sm font-light"
            style={{ color: "#9B8C7A" }}
          >
            その他のご質問がございましたら、お気軽にお問い合わせください。
          </p>
          <div
            className="mx-auto h-px w-16"
            style={{ backgroundColor: "#D4C4B0" }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
