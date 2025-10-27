"use client";

import { useState, useEffect, useRef } from "react";

export default function Speakers() {
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

  const speakers = [
    {
      name: "Sarah Chen",
      title: "Creative Director at Spotify",
      bio: "Leading innovative design solutions for millions of users worldwide",
      image:
        "Professional Asian woman creative director in modern office, minimalist portrait, soft lighting, contemporary business attire, confident expression, clean background, professional headshot style",
      social: { twitter: "@sarahchen", linkedin: "sarahchen" },
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder of DesignFlow Studio",
      bio: "Pioneer in sustainable design practices and circular economy solutions",
      image:
        "Professional Hispanic male design entrepreneur, modern business portrait, minimalist background, confident creative professional, contemporary styling, soft natural lighting",
      social: { twitter: "@marcusrod", linkedin: "marcusrodriguez" },
    },
    {
      name: "Elena Kowalski",
      title: "UX Research Lead at Adobe",
      bio: "Expert in human-centered design and accessibility innovation",
      image:
        "Professional European woman UX researcher, modern business portrait, minimalist office setting, professional attire, approachable expression, clean contemporary background",
      social: { twitter: "@elenakowalski", linkedin: "elenakowalski" },
    },
    {
      name: "Jordan Kim",
      title: "Digital Artist & NFT Creator",
      bio: "Bridging traditional art with cutting-edge digital technologies",
      image:
        "Professional Asian digital artist, creative professional portrait, modern studio background, artistic yet professional styling, contemporary aesthetic, soft lighting",
      social: { twitter: "@jordankim", linkedin: "jordankim" },
    },
    {
      name: "Amara Okafor",
      title: "Brand Strategy Director",
      bio: "Crafting authentic brand narratives for global companies",
      image:
        "Professional African woman brand strategist, modern business portrait, confident expression, minimalist office background, contemporary professional attire, soft natural lighting",
      social: { twitter: "@amaraokafor", linkedin: "amaraokafor" },
    },
    {
      name: "David Thompson",
      title: "Motion Graphics Specialist",
      bio: "Creating immersive visual experiences for film and digital media",
      image:
        "Professional Caucasian male motion graphics artist, creative professional portrait, modern studio setting, approachable demeanor, contemporary styling, clean background",
      social: { twitter: "@davidthompson", linkedin: "davidthompson" },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="from-pink-25 bg-gradient-to-b to-white px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <h2 className="mb-6 text-4xl font-light text-gray-800 md:text-5xl">
            Featured Speakers
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-pink-300 to-purple-300"></div>
          <p className="mx-auto max-w-2xl text-xl font-light text-gray-600">
            Learn from industry leaders and visionaries who are shaping the
            future of creativity
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className={`cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={`https://readdy.ai/api/search-image?query=$%7Bspeaker.image%7D&width=400&height=400&seq=speaker-${index}&orientation=squarish`}
                  alt={speaker.name}
                  className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-medium text-gray-800">
                  {speaker.name}
                </h3>
                <p className="mb-3 font-medium text-pink-500">
                  {speaker.title}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {speaker.bio}
                </p>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <i className="ri-twitter-line cursor-pointer text-gray-400 transition-colors hover:text-blue-400"></i>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center">
                    <i className="ri-linkedin-line cursor-pointer text-gray-400 transition-colors hover:text-blue-600"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="cursor-pointer whitespace-nowrap rounded-full border-2 border-pink-300 px-8 py-3 text-lg font-medium text-pink-600 transition-all duration-300 hover:bg-pink-50">
            View All Speakers
          </button>
        </div>
      </div>
    </section>
  );
}
