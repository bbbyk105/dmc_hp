// /lib/services-data.ts

export interface ServiceData {
  slug: string;
  title: string;
  titleJa: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
  schedule?: {
    days?: string;
    times?: string[];
  };
  includes: string[];
  image: string;
  galleryImages?: string[];
  metaDescription: string;
  keywords: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "hanayume",
    title: "Anniversary Photography",
    titleJa: "アニバーサリー撮影「はなゆめ」",
    subtitle: "ドレス・公園・富士山 ドレス貸出撮影",
    description:
      "特別な記念日を美しく残すアニバーサリー撮影。ドレスレンタル付きで、公園や富士山を背景に素敵な思い出を形にします。",
    price: "¥3,000（税込）",
    features: [
      "ドレス貸出込み",
      "自慢のコーヒーまたは紅茶付き",
      "フォトフレームに入れて写真1枚プレゼント",
    ],
    schedule: {
      days: "毎週月・木曜日",
      times: ["11:00", "13:30"],
    },
    includes: [
      "ドレスレンタル",
      "撮影(公園または富士山背景)",
      "コーヒーまたは紅茶",
      "フォトフレーム付き写真1枚",
    ],
    image:
      "https://readdy.ai/api/search-image?query=Anniversary%20dress%20photography%20Japan&width=800&height=600",
    metaDescription:
      "DMCのアニバーサリー撮影「はなゆめ」。ドレス貸出、コーヒー付きで特別な記念日を撮影。毎週月・木曜日開催、要予約。",
    keywords: [
      "アニバーサリー撮影",
      "ドレスレンタル",
      "記念撮影",
      "富士山",
      "はなゆめ",
      "DMC",
    ],
  },
  {
    slug: "wedding",
    title: "Family Wedding Plan",
    titleJa: "家族ウェディングプラン",
    subtitle: "DMC × L'A VANT SCÉNES",
    description:
      "親しい人だけの特別なウェディングプラン。6名から20名まで対応可能な、アットホームなウェディングを実現します。",
    price: "¥315,000〜（税込）",
    features: [
      "6名〜20名まで対応可能",
      "親しい人だけのプライベートウェディング",
      "DMC × L'A VANT SCÉNESコラボレーション",
    ],
    includes: [
      "会場使用料",
      "基本的な装飾",
      "撮影サービス",
      "ウェルカムドリンク",
    ],
    image:
      "https://readdy.ai/api/search-image?query=intimate%20wedding%20ceremony%20Japan&width=800&height=600",
    metaDescription:
      "DMCの家族ウェディングプラン。6〜20名の少人数ウェディング。親しい方だけの温かい式を315,000円から。",
    keywords: [
      "少人数ウェディング",
      "家族婚",
      "ウェディングプラン",
      "DMC",
      "結婚式",
    ],
  },
  {
    slug: "kirakira753",
    title: "KiraKira753",
    titleJa: "KiraKira753",
    subtitle: "お宮参り・七五三・成人式",
    description:
      "お子様の大切な節目を記録に残します。お宮参り、七五三、1/2成人式、卒業袴、成人式など、あらゆるシーンに対応。衣装で変身、なりきり撮影も可能です。",
    price: "プランにより異なります",
    features: [
      "お宮参り・七五三対応",
      "1/2成人式・卒業袴",
      "成人式撮影",
      "なりきり撮影も可能",
    ],
    includes: ["衣装レンタル", "着付け", "ヘアメイク", "撮影"],
    image:
      "https://readdy.ai/api/search-image?query=753%20shichigosan%20children%20kimono%20Japan&width=800&height=600",
    metaDescription:
      "DMCのKiraKira753。お宮参り、七五三、成人式など、お子様の成長を記録。なりきり撮影も対応。",
    keywords: [
      "七五三",
      "お宮参り",
      "成人式",
      "1/2成人式",
      "卒業袴",
      "記念撮影",
      "DMC",
    ],
  },
  {
    slug: "half-coming-of-age",
    title: "Half Coming-of-Age Ceremony",
    titleJa: "1/2成人式",
    subtitle: "10歳の節目を記録に残す",
    description:
      "10歳の節目を記録に残しませんか？ちょっと大人になったお子様、お孫さんを写真で感動の記録として残します。",
    price: "¥38,500（税込）",
    features: [
      "10歳の記念撮影",
      "衣装レンタル込み",
      "プロの撮影技術",
      "感動の記録を形に",
    ],
    includes: ["衣装一式", "着付け", "ヘアメイク", "撮影", "写真データ"],
    image:
      "https://readdy.ai/api/search-image?query=10%20year%20old%20ceremony%20photography%20Japan&width=800&height=600",
    metaDescription:
      "DMCの1/2成人式撮影。10歳の節目を記録に。衣装レンタル、着付け、撮影込みで38,500円。",
    keywords: ["1/2成人式", "10歳", "記念撮影", "成長記録", "子供写真", "DMC"],
  },
  {
    slug: "coming-of-age",
    title: "Coming-of-Age Rental Package",
    titleJa: "成人式レンタルパック",
    subtitle: "ふぁんふぁん成人式",
    description:
      "成人式の晴れ舞台を完全サポート。振袖一式レンタルから当日の着付け・ヘアメイク、前撮りまで全てが含まれたお得なパッケージです。",
    price: "¥132,000（税込）",
    features: [
      "振袖一式レンタル",
      "当日着付・ヘアメイク",
      "前撮り着付・ヘアメイク",
      "前撮り写真付き",
    ],
    includes: [
      "振袖一式(草履・バッグ含む)",
      "当日着付・ヘアメイク",
      "前撮り着付・ヘアメイク",
      "前撮り写真四切レザー2P",
      "データ2カット",
    ],
    image:
      "https://readdy.ai/api/search-image?query=coming%20of%20age%20ceremony%20furisode%20kimono%20Japan&width=800&height=600",
    metaDescription:
      "DMCの成人式レンタルパック。振袖レンタル、着付け、前撮り全て込みで132,000円。ふぁんふぁん成人式。",
    keywords: [
      "成人式",
      "振袖レンタル",
      "前撮り",
      "着付け",
      "ヘアメイク",
      "DMC",
    ],
  },
  {
    slug: "shukatsu-cafe",
    title: "Life Planning Cafe",
    titleJa: "終活カフェ",
    subtitle: "人生を楽しむためのお手伝い",
    description:
      "「終活」は単なるお葬儀の準備ではありません。将来かかるお金のこと、人生を1分1秒楽しむためのお手伝いをさせてください。あたたかいコーヒーや紅茶と一緒に、ホッとするお話をしましょう。",
    price: "¥500（税込）",
    features: [
      "終活の正しい知識",
      "将来のマネープラン相談",
      "リラックスした雰囲気",
      "素敵なプレゼント付き",
    ],
    schedule: {
      days: "毎週火曜日",
      times: ["13:00〜"],
    },
    includes: [
      "スペシャルコーヒーまたはteaふくろうの紅茶",
      "終活相談",
      "帰りのプレゼント",
    ],
    image:
      "https://readdy.ai/api/search-image?query=cozy%20cafe%20elderly%20consultation%20Japan&width=800&height=600",
    metaDescription:
      "DMCの終活カフェ。将来のお金のこと、人生を楽しむ相談を。毎週火曜13時、コーヒー付き500円。",
    keywords: [
      "終活",
      "終活カフェ",
      "ライフプラン",
      "マネープラン",
      "DMC",
      "相談",
    ],
  },
];

// ユーティリティ関数
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
