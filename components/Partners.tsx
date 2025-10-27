"use client";

import { useState, useEffect, useRef } from "react";

export default function Partners() {
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

  const partners = [
    {
      name: "Adobe",
      logo: "Modern Adobe company logo, minimalist design, clean typography, professional brand identity, white background, contemporary style",
    },
    {
      name: "Figma",
      logo: "Modern Figma company logo, clean design tool branding, minimalist aesthetic, professional identity, white background, contemporary style",
    },
    {
      name: "Spotify",
      logo: "Modern Spotify company logo, music streaming brand, clean minimalist design, professional identity, white background, contemporary style",
    },
    {
      name: "Notion",
      logo: "Modern Notion company logo, productivity tool branding, clean minimalist design, professional identity, white background, contemporary style",
    },
    {
      name: "Dribbble",
      logo: "Modern Dribbble company logo, creative platform branding, clean minimalist design, professional identity, white background, contemporary style",
    },
    {
      name: "Behance",
      logo: "Modern Behance company logo, creative portfolio platform, clean minimalist design, professional identity, white background, contemporary style",
    },
    {
      name: "Slack",
      logo: "Modern Slack company logo, team communication branding, clean minimalist design, professional identity, white background, contemporary style",
    },
    {
      name: "Webflow",
      logo: "Modern Webflow company logo, web design platform branding, clean minimalist design, professional identity, white background, contemporary style",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <h2 className="mb-6 text-4xl font-light text-gray-800 md:text-5xl">
            Our Partners
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-pink-300 to-purple-300"></div>
          <p className="mx-auto max-w-2xl text-xl font-light text-gray-600">
            Supported by industry leaders who share our vision for creative
            excellence
          </p>
        </div>

        <div
          className={`grid grid-cols-2 items-center gap-8 transition-all delay-300 duration-1000 md:grid-cols-4 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group flex cursor-pointer items-center justify-center rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={`https://readdy.ai/api/search-image?query=$%7Bpartner.logo%7D&width=200&height=100&seq=partner-${index}&orientation=landscape`}
                alt={`${partner.name} logo`}
                className="max-h-12 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-gray-600">
            Interested in becoming a partner?
          </p>
          <button className="cursor-pointer whitespace-nowrap rounded-full border-2 border-pink-300 px-8 py-3 text-lg font-medium text-pink-600 transition-all duration-300 hover:bg-pink-50">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
