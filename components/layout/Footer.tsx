// /components/layout/Footer.tsx
"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const navigation = {
  main: [
    { name: "ホーム", href: "/" },
    { name: "店舗紹介", href: "/about" },
    { name: "サービス", href: "/services" },
    { name: "ギャラリー", href: "/gallery" },
    { name: "お問い合わせ", href: "/contact" },
  ],
  services: [
    { name: "アニバーサリー撮影", href: "/services/hanayume" },
    { name: "ウェディングプラン", href: "/services/wedding" },
    { name: "七五三・成人式", href: "/services/kirakira753" },
    { name: "1/2成人式", href: "/services/half-coming-of-age" },
    { name: "成人式レンタル", href: "/services/coming-of-age" },
    { name: "終活カフェ", href: "/services/shukatsu-cafe" },
  ],
  social: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#8B7355" }}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* 会社情報 */}
          <div>
            <h3 className="mb-6 font-['Crimson_Text'] text-3xl font-normal text-white">
              DMC
            </h3>
            <p className="mb-4 font-['Noto_Sans_JP'] text-sm font-light leading-relaxed text-white/80">
              人生の大切な瞬間を、美しく記録する写真スタジオ
            </p>
            <div className="space-y-3">
              <a
                href="tel:03-XXXX-XXXX"
                className="flex items-center font-['Noto_Sans_JP'] text-sm font-light text-white/80 transition-colors duration-300 hover:text-white"
              >
                <Phone className="mr-2 h-4 w-4" />
                03-XXXX-XXXX
              </a>
              <a
                href="mailto:info@dmc-studio.jp"
                className="flex items-center font-['Noto_Sans_JP'] text-sm font-light text-white/80 transition-colors duration-300 hover:text-white"
              >
                <Mail className="mr-2 h-4 w-4" />
                info@dmc-studio.jp
              </a>
              <div className="flex items-start font-['Noto_Sans_JP'] text-sm font-light text-white/80">
                <MapPin className="mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>
                  〒XXX-XXXX
                  <br />
                  東京都○○区○○ X-X-X
                </span>
              </div>
            </div>
          </div>

          {/* メインナビゲーション */}
          <div>
            <h4 className="mb-6 font-['Noto_Sans_JP'] text-lg font-normal text-white">
              メニュー
            </h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-['Noto_Sans_JP'] text-sm font-light text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サービス */}
          <div>
            <h4 className="mb-6 font-['Noto_Sans_JP'] text-lg font-normal text-white">
              サービス
            </h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-['Noto_Sans_JP'] text-sm font-light text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 営業時間・SNS */}
          <div>
            <h4 className="mb-6 font-['Noto_Sans_JP'] text-lg font-normal text-white">
              営業時間
            </h4>
            <div className="mb-6 space-y-2 font-['Noto_Sans_JP'] text-sm font-light text-white/80">
              <p>平日: 10:00 - 18:00</p>
              <p>土日祝: 10:00 - 19:00</p>
              <p>定休日: 火曜日</p>
            </div>

            <h4 className="mb-4 font-['Noto_Sans_JP'] text-lg font-normal text-white">
              SNS
            </h4>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-full p-2 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* 下部 */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="font-['Noto_Sans_JP'] text-sm font-light text-white/60">
              © {new Date().getFullYear()} DMC Photo Studio. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="font-['Noto_Sans_JP'] text-sm font-light text-white/60 transition-colors duration-300 hover:text-white"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="font-['Noto_Sans_JP'] text-sm font-light text-white/60 transition-colors duration-300 hover:text-white"
              >
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
