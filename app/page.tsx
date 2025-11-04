// /app/page.tsx
"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F5" }}>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <FAQ />
      <Contact />
    </div>
  );
}
