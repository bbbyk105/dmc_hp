"use client";

import { useState, useEffect, useRef } from "react";

export default function Press() {
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

  const pressLogos = [
    {
      name: "Vogue",
      logo: "Vogue magazine logo, fashion publication branding, elegant typography, professional magazine logo, cream background, editorial style",
    },
    {
      name: "Harper's Bazaar",
      logo: "Harper's Bazaar magazine logo, luxury fashion publication, sophisticated branding, professional magazine logo, cream background, editorial style",
    },
    {
      name: "Elle",
      logo: "Elle magazine logo, fashion publication branding, modern typography, professional magazine logo, cream background, editorial style",
    },
    {
      name: "Marie Claire",
      logo: "Marie Claire magazine logo, fashion publication branding, elegant typography, professional magazine logo, cream background, editorial style",
    },
    {
      name: "W Magazine",
      logo: "W Magazine logo, high fashion publication, luxury branding, professional magazine logo, cream background, editorial style",
    },
    {
      name: "Interview",
      logo: "Interview magazine logo, art and fashion publication, creative branding, professional magazine logo, cream background, editorial style",
    },
  ];

  const features = [
    {
      title: "Best Fashion Photography 2024",
      publication: "Vogue",
      description:
        "Recognized for innovative editorial approach combining vintage aesthetics with contemporary fashion storytelling.",
    },
    {
      title: "Rising Creative Directors",
      publication: "Harper's Bazaar",
      description:
        "Featured as one of the industry's most promising creative collectives reshaping fashion photography.",
    },
    {
      title: "Editorial Excellence Award",
      publication: "Fashion Photography Awards",
      description:
        "Honored for outstanding contribution to fashion editorial photography and creative direction.",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div
          className={`duration-1200 mb-20 text-center transition-all ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-8 text-8xl font-bold leading-none tracking-tight text-red-900 md:text-9xl">
            PRESS
            <span className="block text-6xl font-light italic text-amber-700 md:text-7xl">
              & features
            </span>
          </h2>

          <div className="mb-8 flex items-center justify-center">
            <div className="h-0.5 w-20 bg-red-800"></div>
            <div className="mx-6 h-3 w-3 rotate-45 border-2 border-red-800"></div>
            <div className="h-0.5 w-20 bg-red-800"></div>
          </div>

          <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-red-800">
            Our work has been recognized by leading fashion publications
            worldwide
          </p>
        </div>

        <div
          className={`duration-1200 mb-20 transition-all delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h3 className="mb-12 text-center text-3xl font-bold uppercase tracking-wide text-red-900">
            Featured In
          </h3>
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
            {pressLogos.map((press, index) => (
              <div
                key={press.name}
                className="group flex cursor-pointer items-center justify-center border border-red-100 bg-amber-50/50 p-6 transition-all duration-500 hover:bg-white hover:shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={`https://readdy.ai/api/search-image?query=$%7Bpress.logo%7D&width=200&height=100&seq=press-${index}&orientation=landscape`}
                  alt={`${press.name} logo`}
                  className="max-h-12 w-auto object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`duration-1200 grid gap-8 transition-all delay-500 md:grid-cols-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group border border-red-200/30 bg-gradient-to-br from-amber-50 to-red-50 p-8 transition-all duration-500 hover:shadow-xl"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-900 transition-transform duration-300 group-hover:scale-110">
                  <i className="ri-award-fill text-xl text-amber-50"></i>
                </div>
                <span className="text-sm font-medium uppercase tracking-wider text-amber-700">
                  {feature.publication}
                </span>
              </div>

              <h4 className="mb-4 text-xl font-bold leading-tight text-red-900">
                {feature.title}
              </h4>
              <p className="leading-relaxed text-red-700">
                {feature.description}
              </p>

              <div className="mt-6 border-t border-red-200 pt-6">
                <button className="flex cursor-pointer items-center font-medium text-red-800 transition-colors duration-300 hover:text-red-900 group-hover:translate-x-2">
                  Read More
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-red-900 to-red-800 p-12 text-center">
            <h3 className="mb-4 text-3xl font-bold tracking-wide text-amber-50">
              Press Inquiries
            </h3>
            <p className="mb-6 text-lg text-amber-100">
              Interested in featuring our work?
            </p>
            <button className="cursor-pointer whitespace-nowrap border-2 border-amber-100 px-8 py-3 text-lg font-medium uppercase tracking-wide text-amber-100 transition-all duration-300 hover:bg-amber-100 hover:text-red-900">
              Contact Press Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
