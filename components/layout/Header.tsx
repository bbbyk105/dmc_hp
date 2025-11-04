// /components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

const navigation = [
  { name: "ホーム", href: "/" },
  { name: "店舗紹介", href: "/about" },
  { name: "サービス", href: "/services" },
  { name: "ギャラリー", href: "/gallery" },
  { name: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // モバイルメニューが開いているときはスクロールを無効化
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-6">
            {/* ロゴ */}
            <Link
              href="/"
              className="group relative z-50 transition-transform duration-300 hover:scale-105"
            >
              <h1
                className={`font-['Crimson_Text'] text-3xl font-normal transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen
                    ? "text-[#8B7355]"
                    : "text-white drop-shadow-lg"
                }`}
              >
                DMC
              </h1>
              <div
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "#D4C4B0" }}
              ></div>
            </Link>

            {/* デスクトップナビゲーション */}
            <nav className="hidden items-center space-x-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative font-['Noto_Sans_JP'] text-sm font-light tracking-wider transition-all duration-300 hover:font-normal ${
                    isScrolled ? "text-[#7A6B5A]" : "text-white drop-shadow-md"
                  }`}
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "#D4C4B0" }}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* 連絡先情報（デスクトップ） */}
            <div className="hidden items-center space-x-4 lg:flex">
              <a
                href="tel:03-XXXX-XXXX"
                className={`flex items-center font-['Noto_Sans_JP'] text-sm font-light transition-colors duration-300 hover:font-normal ${
                  isScrolled ? "text-[#7A6B5A]" : "text-white drop-shadow-md"
                }`}
              >
                <Phone className="mr-2 h-4 w-4" style={{ color: "#D4C4B0" }} />
                03-XXXX-XXXX
              </a>
            </div>

            {/* モバイルメニューボタン */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`relative z-50 rounded-lg p-2 transition-colors duration-300 lg:hidden ${
                isScrolled || isMobileMenuOpen
                  ? "text-[#8B7355] hover:bg-[#FEFCFA]"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="メニュー"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* オーバーレイ */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* メニューコンテンツ */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "#FEFCFA" }}
        >
          <nav className="flex h-full flex-col px-6 pt-24">
            {/* ナビゲーションリンク */}
            <div className="space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative block rounded-lg px-4 py-4 font-['Noto_Sans_JP'] text-lg font-light transition-all duration-300 hover:bg-white hover:font-normal"
                  style={{
                    color: "#7A6B5A",
                    animation: isMobileMenuOpen
                      ? `slideIn 0.5s ease-out ${index * 0.1}s forwards`
                      : "none",
                    opacity: 0,
                  }}
                >
                  {item.name}
                  <span
                    className="absolute bottom-3 left-4 h-px w-0 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
                    style={{ backgroundColor: "#D4C4B0" }}
                  ></span>
                </Link>
              ))}
            </div>

            {/* 連絡先情報 */}
            <div
              className="mt-auto space-y-4 border-t py-6"
              style={{ borderColor: "#D4C4B0" }}
            >
              <a
                href="tel:03-XXXX-XXXX"
                className="flex items-center font-['Noto_Sans_JP'] text-sm font-light transition-colors duration-300 hover:font-normal"
                style={{ color: "#7A6B5A" }}
              >
                <Phone className="mr-3 h-5 w-5" style={{ color: "#D4C4B0" }} />
                03-XXXX-XXXX
              </a>
              <a
                href="mailto:info@dmc-studio.jp"
                className="flex items-center font-['Noto_Sans_JP'] text-sm font-light transition-colors duration-300 hover:font-normal"
                style={{ color: "#7A6B5A" }}
              >
                <Mail className="mr-3 h-5 w-5" style={{ color: "#D4C4B0" }} />
                info@dmc-studio.jp
              </a>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
