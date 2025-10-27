"use client";

import { useState, useEffect, useRef } from "react";

export default function Team() {
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

  const teamMembers = [
    {
      name: "Isabella Martinez",
      role: "Creative Director",
      bio: "Award-winning photographer with 15 years in fashion editorial",
      image:
        "Professional fashion photographer portrait, female creative director, vintage inspired styling, cream and brick red tones, editorial magazine style portrait, sophisticated professional headshot",
      icon: "ri-camera-3-fill",
    },
    {
      name: "James Chen",
      role: "Lead Photographer",
      bio: "Specializes in editorial and commercial fashion photography",
      image:
        "Professional male photographer portrait, fashion industry creative, vintage inspired styling, cream background, editorial magazine style headshot, sophisticated professional photography",
      icon: "ri-focus-3-fill",
    },
    {
      name: "Sofia Rodriguez",
      role: "Fashion Stylist",
      bio: "Former Vogue stylist with an eye for timeless elegance",
      image:
        "Professional fashion stylist portrait, female creative professional, vintage inspired look, cream and brick red color palette, editorial magazine style headshot, sophisticated styling",
      icon: "ri-handbag-fill",
    },
    {
      name: "Marcus Thompson",
      role: "Art Director",
      bio: "Visual storyteller passionate about brand narratives",
      image:
        "Professional art director portrait, male creative professional, vintage inspired styling, cream background, editorial magazine style headshot, sophisticated professional photography",
      icon: "ri-palette-fill",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-red-50 to-amber-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`duration-1200 mb-20 text-center transition-all ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <h2 className="mb-8 text-8xl font-bold leading-none tracking-tight text-red-900 md:text-9xl">
            MEET
            <span className="block text-6xl font-light italic text-amber-700 md:text-7xl">
              the team
            </span>
          </h2>

          <div className="mb-8 flex items-center justify-center">
            <div className="h-0.5 w-20 bg-red-800"></div>
            <div className="mx-6 h-3 w-3 rotate-45 border-2 border-red-800"></div>
            <div className="h-0.5 w-20 bg-red-800"></div>
          </div>

          <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-red-800">
            The creative minds behind every editorial masterpiece
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group overflow-hidden border border-red-200/30 bg-white/80 backdrop-blur-sm transition-all duration-700 hover:shadow-2xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://readdy.ai/api/search-image?query=$%7Bmember.image%7D&width=400&height=500&seq=team-${index}&orientation=portrait`}
                  alt={member.name}
                  className="h-80 w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute right-4 top-4 flex h-12 w-12 rotate-12 transform items-center justify-center rounded-full bg-red-900/90 text-amber-50 transition-transform duration-500 group-hover:rotate-0">
                  <i className={`${member.icon} text-xl`}></i>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold tracking-wide text-red-900">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-medium uppercase tracking-wider text-amber-700">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-red-700">
                  {member.bio}
                </p>

                <div className="mt-6 flex items-center space-x-4">
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-100 transition-colors duration-300 hover:bg-red-200">
                    <i className="ri-linkedin-fill text-red-800"></i>
                  </div>
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-100 transition-colors duration-300 hover:bg-red-200">
                    <i className="ri-instagram-fill text-red-800"></i>
                  </div>
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-100 transition-colors duration-300 hover:bg-red-200">
                    <i className="ri-behance-fill text-red-800"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block border border-red-200/30 bg-white/60 p-8 backdrop-blur-sm">
            <p className="mb-4 text-lg font-light text-red-800">
              Ready to work with us?
            </p>
            <button className="cursor-pointer whitespace-nowrap border-2 border-red-800 px-8 py-3 text-lg font-medium uppercase tracking-wide text-red-800 transition-all duration-300 hover:bg-red-800 hover:text-amber-50">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
