"use client";

import { useState, useEffect, useRef } from "react";

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
                    Born in Tokyo, Yuki Tanaka embodies the aesthetics of
                    contemporary Japan through fashion modeling. Her work merges
                    traditional elegance with modern minimalism.
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
                    With over 6 years of experience, she has collaborated with
                    renowned Japanese fashion houses and international
                    magazines, bringing a unique perspective to editorial and
                    commercial photography.
                  </p>
                </div>

                <div className="pt-8">
                  <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3
                        className="font-['Crimson_Text'] text-xl font-normal tracking-wide"
                        style={{ color: "#8B7355" }}
                      >
                        Experience
                      </h3>
                      <div
                        className="h-px w-8"
                        style={{ backgroundColor: "#D4C4B0" }}
                      ></div>
                      <p
                        className="font-['Noto_Sans_JP'] font-light"
                        style={{ color: "#9B8C7A" }}
                      >
                        6+ Years Professional
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3
                        className="font-['Crimson_Text'] text-xl font-normal tracking-wide"
                        style={{ color: "#8B7355" }}
                      >
                        Based
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
                  </div>
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
                  src="https://readdy.ai/api/search-image?query=Japanese%20fashion%20model%20portrait%20photography%2C%20soft%20natural%20lighting%20with%20warm%20beige%20tones%2C%20minimalist%20aesthetic%2C%20elegant%20model%20in%20neutral%20colors%2C%20serene%20expression%2C%20contemporary%20Japanese%20photography%20style%2C%20clean%20composition%20with%20natural%20textures%20and%20gentle%20warm%20lighting&width=500&height=700&seq=japanese-about-1&orientation=portrait"
                  alt="Yuki Tanaka Portrait"
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
                  Portrait Session
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
