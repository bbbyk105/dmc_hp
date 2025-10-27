"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioImages = [
    {
      id: 1,
      title: "Editorial Serenity",
      category: "Editorial",
      height: "h-96",
      image:
        "https://readdy.ai/api/search-image?query=Japanese%20female%20fashion%20model%20in%20elegant%20flowing%20white%20silk%20dress%20with%20delicate%20draping%2C%20soft%20diffused%20studio%20lighting%20creating%20gentle%20shadows%20on%20fabric%2C%20minimalist%20editorial%20photography%20with%20clean%20composition%2C%20serene%20peaceful%20expression%20with%20eyes%20closed%2C%20warm%20cream%20and%20beige%20color%20palette%2C%20simple%20neutral%20background%20with%20subtle%20natural%20textures%2C%20sophisticated%20contemporary%20styling%20with%20minimal%20jewelry%2C%20ethereal%20and%20tranquil%20atmosphere%2C%20beautiful%20Asian%20woman&width=600&height=800&seq=yuki-gallery-v3-01&orientation=portrait",
    },
    {
      id: 2,
      title: "Natural Grace",
      category: "Portrait",
      height: "h-80",
      image:
        "https://readdy.ai/api/search-image?query=Close-up%20Japanese%20female%20model%20portrait%20with%20natural%20glowing%20dewy%20skin%2C%20soft%20golden%20morning%20sunlight%20streaming%20from%20side%20window%2C%20warm%20honey%20beige%20and%20cream%20tones%20throughout%2C%20minimalist%20contemporary%20aesthetic%2C%20elegant%20gentle%20smile%20with%20natural%20expression%2C%20clean%20simple%20composition%20with%20atmospheric%20warmth%2C%20sophisticated%20natural%20makeup%20highlighting%20cheekbones%2C%20long%20hair%20gently%20flowing%20in%20breeze%2C%20beautiful%20Asian%20woman&width=600&height=700&seq=yuki-gallery-v3-02&orientation=portrait",
    },
    {
      id: 3,
      title: "Timeless Beauty",
      category: "Beauty",
      height: "h-[28rem]",
      image:
        "https://readdy.ai/api/search-image?query=Japanese%20female%20beauty%20editorial%20featuring%20luminous%20flawless%20porcelain%20complexion%2C%20soft%20halo%20lighting%20creating%20ethereal%20angelic%20glow%20around%20face%2C%20minimalist%20natural%20makeup%20with%20subtle%20peach%20rose%20tones%20on%20lips%20and%20cheeks%2C%20elegant%20female%20model%20with%20graceful%20neck%20positioning%20and%20shoulders%20visible%2C%20clean%20neutral%20warm%20beige%20background%2C%20sophisticated%20beauty%20photography%20with%20timeless%20appeal%20and%20gentle%20atmospheric%20lighting%2C%20delicate%20feminine%20features%20emphasized%2C%20beautiful%20Asian%20woman&width=600&height=900&seq=yuki-gallery-v3-03&orientation=portrait",
    },
    {
      id: 4,
      title: "Modern Elegance",
      category: "Fashion",
      height: "h-72",
      image:
        "https://readdy.ai/api/search-image?query=Contemporary%20Japanese%20female%20fashion%20model%20wearing%20minimalist%20beige%20linen%20oversized%20blazer%20with%20clean%20architectural%20lines%2C%20soft%20natural%20daylight%20from%20large%20windows%2C%20elegant%20standing%20pose%20with%20relaxed%20confident%20posture%20and%20hands%20in%20pockets%2C%20modern%20aesthetic%20with%20warm%20neutral%20color%20palette%2C%20sophisticated%20simple%20styling%20with%20natural%20long%20hair%2C%20plain%20cream%20background%20with%20natural%20light%20and%20shadow%20interplay%20creating%20depth%2C%20beautiful%20Asian%20woman&width=600&height=600&seq=yuki-gallery-v3-04&orientation=squarish",
    },
    {
      id: 5,
      title: "Gentle Light",
      category: "Editorial",
      height: "h-[26rem]",
      image:
        "https://readdy.ai/api/search-image?query=Japanese%20female%20editorial%20fashion%20photography%20with%20model%20in%20flowing%20cream%20chiffon%20fabric%20billowing%20in%20wind%2C%20soft%20backlit%20golden%20hour%20lighting%20creating%20luminous%20glowing%20edges%2C%20minimalist%20elegant%20composition%20with%20female%20model%20in%20graceful%20dance-like%20pose%2C%20graceful%20fabric%20movement%20captured%20mid-motion%20with%20dynamic%20flow%2C%20warm%20beige%20and%20ivory%20tones%2C%20serene%20peaceful%20atmosphere%20with%20gentle%20highlights%20and%20soft%20shadows%2C%20outdoor%20natural%20setting%2C%20beautiful%20Asian%20woman&width=600&height=850&seq=yuki-gallery-v3-05&orientation=portrait",
    },
    {
      id: 6,
      title: "Pure Form",
      category: "Artistic",
      height: "h-88",
      image:
        "https://readdy.ai/api/search-image?query=Artistic%20Japanese%20female%20fashion%20photography%20featuring%20model%20silhouette%20with%20dramatic%20side%20lighting%20from%20single%20source%2C%20elegant%20shadow%20play%20on%20face%20and%20body%20creating%20geometric%20patterns%2C%20minimalist%20beige%20gray%20and%20white%20tones%20with%20high%20contrast%2C%20contemporary%20geometric%20aesthetic%20with%20clean%20lines%2C%20clean%20architectural%20composition%20with%20natural%20textures%20and%20sophisticated%20directional%20lighting%2C%20abstract%20artistic%20feel%2C%20beautiful%20Asian%20woman%20with%20long%20hair&width=600&height=750&seq=yuki-gallery-v3-06&orientation=portrait",
    },
    {
      id: 7,
      title: "Soft Harmony",
      category: "Portrait",
      height: "h-80",
      image:
        "https://readdy.ai/api/search-image?query=Japanese%20female%20model%20portrait%20with%20soft%20contemplative%20expression%20looking%20down%20gently%2C%20warm%20natural%20window%20light%20creating%20gentle%20face%20illumination%20from%20side%2C%20cream%20and%20beige%20color%20scheme%20with%20soft%20tones%2C%20minimalist%20styling%20with%20elegant%20loose%20flowing%20hair%2C%20contemporary%20fashion%20portrait%20photography%2C%20clean%20simple%20background%20with%20peaceful%20atmospheric%20mood%2C%20delicate%20hand%20touching%20face%20naturally%2C%20beautiful%20Asian%20woman&width=600&height=700&seq=yuki-gallery-v3-07&orientation=portrait",
    },
    {
      id: 8,
      title: "Ethereal Moment",
      category: "Fashion",
      height: "h-96",
      image:
        "https://readdy.ai/api/search-image?query=Ethereal%20dreamy%20Japanese%20female%20fashion%20photography%20with%20model%20in%20flowing%20beige%20organza%20layered%20dress%20with%20multiple%20sheer%20layers%2C%20soft%20diffused%20lighting%20creating%20magical%20atmosphere%20with%20lens%20flare%2C%20minimalist%20elegant%20styling%20with%20delicate%20fabric%20layers%20floating%2C%20gentle%20wind-blown%20fabric%20movement%20with%20dynamic%20motion%2C%20warm%20cream%20and%20pearl%20tones%2C%20serene%20otherworldly%20atmosphere%20with%20clean%20composition%2C%20female%20model%20twirling%20gracefully%2C%20beautiful%20Asian%20woman&width=600&height=800&seq=yuki-gallery-v3-08&orientation=portrait",
    },
    {
      id: 9,
      title: "Silent Poetry",
      category: "Artistic",
      height: "h-[22rem]",
      image:
        "https://readdy.ai/api/search-image?query=Zen-inspired%20Japanese%20female%20artistic%20photography%2C%20model%20in%20simple%20natural%20linen%20garments%20with%20minimalist%20design%20sitting%20in%20meditation%20pose%2C%20soft%20natural%20lighting%20with%20warm%20cream%20and%20beige%20palette%2C%20peaceful%20meditative%20composition%20with%20centered%20framing%2C%20serene%20expression%20with%20closed%20eyes%20and%20hands%20in%20prayer%20position%2C%20clean%20background%20with%20subtle%20organic%20elements%20like%20dried%20branches%2C%20sophisticated%20gentle%20atmospheric%20lighting%20creating%20calm%20mood%2C%20beautiful%20Asian%20woman&width=600&height=650&seq=yuki-gallery-v3-09&orientation=portrait",
    },
    {
      id: 10,
      title: "Morning Light",
      category: "Editorial",
      height: "h-[30rem]",
      image:
        "https://readdy.ai/api/search-image?query=Japanese%20female%20morning%20light%20editorial%20photography%2C%20model%20in%20flowing%20white%20cotton%20dress%20with%20natural%20draping%20and%20movement%2C%20soft%20golden%20sunrise%20lighting%20from%20behind%20creating%20rim%20light%20effect%2C%20minimalist%20styling%20with%20natural%20loose%20long%20hair%20flowing%2C%20elegant%20graceful%20pose%20with%20fabric%20flowing%20in%20morning%20breeze%2C%20warm%20cream%20beige%20and%20soft%20yellow%20tones%2C%20serene%20peaceful%20atmosphere%20with%20ethereal%20glow%2C%20outdoor%20natural%20setting%20with%20soft%20focus%20background%2C%20beautiful%20Asian%20woman&width=600&height=900&seq=yuki-gallery-v3-10&orientation=portrait",
    },
    {
      id: 11,
      title: "Quiet Strength",
      category: "Portrait",
      height: "h-84",
      image:
        "https://readdy.ai/api/search-image?query=Japanese%20female%20portrait%20photography%20showing%20confident%20powerful%20expression%20with%20direct%20eye%20contact%2C%20soft%20natural%20lighting%20with%20neutral%20warm%20tones%2C%20minimalist%20clean%20composition%20with%20centered%20framing%2C%20elegant%20female%20model%20with%20strong%20eye%20contact%20and%20commanding%20presence%2C%20contemporary%20fashion%20style%20with%20structured%20beige%20clothing%2C%20clean%20beige%20background%20with%20sophisticated%20lighting%2C%20strong%20jawline%20and%20confident%20posture%20emphasized%2C%20beautiful%20Asian%20woman&width=600&height=750&seq=yuki-gallery-v3-11&orientation=portrait",
    },
    {
      id: 12,
      title: "Autumn Whisper",
      category: "Fashion",
      height: "h-[26rem]",
      image:
        "https://readdy.ai/api/search-image?query=Japanese%20female%20autumn%20fashion%20photography%2C%20model%20in%20warm%20camel%20and%20light%20brown%20tones%20with%20layered%20clothing%20including%20knit%20sweater%20and%20flowing%20scarf%2C%20soft%20natural%20outdoor%20lighting%20with%20golden%20hour%20glow%2C%20minimalist%20seasonal%20styling%20with%20earth%20colors%2C%20elegant%20relaxed%20pose%20leaning%20against%20wall%2C%20contemporary%20aesthetic%20with%20clean%20composition%20and%20warm%20atmospheric%20lighting%2C%20subtle%20autumn%20leaves%20in%20background%2C%20beautiful%20Asian%20woman%20with%20long%20hair&width=600&height=850&seq=yuki-gallery-v3-12&orientation=portrait",
    },
    {
      id: 13,
      title: "Minimalist Dream",
      category: "Artistic",
      height: "h-80",
      image:
        "https://readdy.ai/api/search-image?query=Japanese%20female%20minimalist%20dream%20photography%2C%20model%20in%20simple%20pure%20white%20clothing%20with%20clean%20lines%20and%20geometric%20shapes%2C%20soft%20ethereal%20lighting%20with%20cream%20and%20ivory%20tones%2C%20artistic%20composition%20with%20floating%20fabric%20elements%20suspended%20in%20air%2C%20elegant%20modern%20styling%20with%20abstract%20feel%2C%20clean%20background%20with%20gentle%20atmospheric%20effects%20and%20soft%20focus%2C%20surreal%20dreamlike%20quality%20with%20minimal%20elements%2C%20beautiful%20Asian%20woman&width=600&height=700&seq=yuki-gallery-v3-13&orientation=portrait",
    },
    {
      id: 14,
      title: "Urban Zen",
      category: "Editorial",
      height: "h-[28rem]",
      image:
        "https://readdy.ai/api/search-image?query=Japanese%20female%20urban%20zen%20fashion%20photography%2C%20model%20in%20contemporary%20minimalist%20beige%20outfit%20with%20modern%20architectural%20cut%20and%20clean%20lines%2C%20soft%20natural%20lighting%20with%20warm%20neutral%20tones%2C%20editorial%20composition%20with%20architectural%20elements%20like%20concrete%20walls%2C%20elegant%20standing%20pose%20with%20calm%20presence%20and%20centered%20posture%2C%20serene%20aesthetic%20with%20clean%20modern%20background%20and%20sophisticated%20styling%2C%20urban%20minimalist%20environment%2C%20beautiful%20Asian%20woman&width=600&height=900&seq=yuki-gallery-v3-14&orientation=portrait",
    },
    {
      id: 15,
      title: "Gentle Elegance",
      category: "Beauty",
      height: "h-[24rem]",
      image:
        "https://readdy.ai/api/search-image?query=Japanese%20female%20beauty%20portrait%20with%20delicate%20refined%20features%20and%20graceful%20elegant%20expression%20with%20slight%20smile%2C%20soft%20diffused%20lighting%20creating%20luminous%20radiant%20glow%20on%20skin%20from%20multiple%20angles%2C%20warm%20ivory%20pearl%20and%20champagne%20tones%2C%20minimalist%20natural%20makeup%20highlighting%20bone%20structure%20and%20eyes%20with%20subtle%20shimmer%2C%20contemporary%20beauty%20photography%20with%20sophisticated%20gentle%20atmospheric%20lighting%20and%20refined%20artistic%20composition%2C%20hair%20styled%20in%20elegant%20updo%2C%20beautiful%20Asian%20woman&width=600&height=800&seq=yuki-gallery-v3-15&orientation=portrait",
    },
  ];

  const categories = [
    "All",
    "Editorial",
    "Portrait",
    "Beauty",
    "Fashion",
    "Artistic",
  ];

  const filteredImages =
    filter === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F5" }}>
      {/* Header */}
      <header className="px-6 py-8" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="transition-opacity duration-300 hover:opacity-70"
          >
            <span
              className="font-['Pacifico'] text-2xl"
              style={{ color: "#8B7355" }}
            >
              Yuki Tanaka
            </span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className="font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.1em] transition-opacity duration-300 hover:opacity-70"
              style={{ color: "#A0937D" }}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.1em]"
              style={{ color: "#8B7355" }}
            >
              Gallery
            </Link>
          </nav>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Title Section */}
          <div
            className={`duration-2000 mb-16 text-center transition-all ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <div
              className="mx-auto mb-8 h-16 w-px"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>

            <h1
              className="mb-8 font-['Crimson_Text'] text-5xl font-normal leading-tight md:text-7xl"
              style={{ color: "#8B7355" }}
            >
              Complete Collection
            </h1>

            <div className="mb-8 flex items-center justify-center">
              <div
                className="h-px w-16"
                style={{ backgroundColor: "#D4C4B0" }}
              ></div>
              <span
                className="mx-8 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.3em]"
                style={{ color: "#A0937D" }}
              >
                Full Portfolio
              </span>
              <div
                className="h-px w-16"
                style={{ backgroundColor: "#D4C4B0" }}
              ></div>
            </div>

            <p
              className="mx-auto max-w-2xl font-['Noto_Sans_JP'] text-lg font-light"
              style={{ color: "#7A6B5A" }}
            >
              Explore the complete collection of photographic works spanning
              editorial, portrait, beauty, fashion, and artistic projects.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            className={`duration-2000 mb-16 flex justify-center transition-all delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <div
              className="flex flex-wrap gap-4 rounded-full p-2"
              style={{ backgroundColor: "#F8F6F3" }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-6 py-2 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.1em] transition-all duration-500 ${
                    filter === category ? "shadow-sm" : "hover:scale-105"
                  }`}
                  style={{
                    backgroundColor:
                      filter === category ? "#8B7355" : "transparent",
                    color: filter === category ? "#FAF8F5" : "#A0937D",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div
            className={`duration-2000 transition-all delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3 xl:columns-4">
              {filteredImages.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer break-inside-avoid overflow-hidden shadow-sm transition-all duration-700 hover:shadow-xl"
                  style={{ backgroundColor: "#FEFCFA" }}
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full ${item.height} object-cover object-top transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-90`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 transition-all duration-700 group-hover:bg-black/10">
                      <div className="absolute bottom-0 left-0 right-0 translate-y-4 transform p-4 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                        <div
                          className="mb-2 h-px w-6"
                          style={{ backgroundColor: "#D4C4B0" }}
                        ></div>
                        <h3 className="mb-1 font-['Crimson_Text'] text-base font-normal tracking-wide text-white">
                          {item.title}
                        </h3>
                        <p className="font-['Noto_Sans_JP'] text-xs font-light uppercase tracking-[0.2em] text-white/80">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-20 text-center">
            <Link href="/">
              <button
                className="transform cursor-pointer whitespace-nowrap border px-12 py-4 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.2em] transition-all duration-700 hover:scale-105"
                style={{
                  backgroundColor: "transparent",
                  color: "#8B7355",
                  borderColor: "#D4C4B0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8B7355";
                  e.currentTarget.style.color = "#FAF8F5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#8B7355";
                }}
              >
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8 transition-all duration-500"
          style={{ backgroundColor: "rgba(245, 243, 240, 0.95)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-full max-w-5xl">
            <img
              src={
                portfolioImages.find((img) => img.id === selectedImage)?.image
              }
              alt="Portfolio Image"
              className="h-auto w-full object-contain shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 cursor-pointer items-center justify-center text-2xl transition-opacity duration-300 hover:opacity-70"
              style={{ color: "#8B7355" }}
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
