"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus(
        "Thank you for your message. I will get back to you soon."
      );
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="px-6 py-32"
      style={{ backgroundColor: "#F5F3F0" }}
    >
      <div className="mx-auto max-w-4xl">
        <div
          className={`duration-2000 mb-20 text-center transition-all ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div
            className="mx-auto mb-8 h-16 w-px"
            style={{ backgroundColor: "#D4C4B0" }}
          ></div>

          <h2
            className="mb-8 font-['Crimson_Text'] text-5xl font-normal leading-tight md:text-6xl"
            style={{ color: "#8B7355" }}
          >
            Contact
          </h2>

          <div className="mb-8 flex items-center justify-center">
            <div
              className="h-px w-16"
              style={{ backgroundColor: "#D4C4B0" }}
            ></div>
            <span
              className="mx-8 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.3em]"
              style={{ color: "#A0937D" }}
            >
              Let's Collaborate
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
            Available for editorial shoots, commercial campaigns, and creative
            collaborations.
          </p>
        </div>

        <div
          className={`duration-2000 transition-all delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <div className="mx-auto max-w-2xl">
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
              style={{ backgroundColor: "#FEFCFA" }}
              data-readdy-form
            >
              <div className="p-12 shadow-sm">
                <div className="mb-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <label
                      className="mb-4 block font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.1em]"
                      style={{ color: "#8B7355" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 font-['Noto_Sans_JP'] text-sm font-light transition-all duration-300 focus:outline-none"
                      style={{
                        backgroundColor: "transparent",
                        borderBottom: "1px solid #D4C4B0",
                        color: "#7A6B5A",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#8B7355")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = "#D4C4B0")
                      }
                    />
                  </div>

                  <div>
                    <label
                      className="mb-4 block font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.1em]"
                      style={{ color: "#8B7355" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 font-['Noto_Sans_JP'] text-sm font-light transition-all duration-300 focus:outline-none"
                      style={{
                        backgroundColor: "transparent",
                        borderBottom: "1px solid #D4C4B0",
                        color: "#7A6B5A",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#8B7355")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = "#D4C4B0")
                      }
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    className="mb-4 block font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.1em]"
                    style={{ color: "#8B7355" }}
                  >
                    Company / Publication
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-4 font-['Noto_Sans_JP'] text-sm font-light transition-all duration-300 focus:outline-none"
                    style={{
                      backgroundColor: "transparent",
                      borderBottom: "1px solid #D4C4B0",
                      color: "#7A6B5A",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "#8B7355")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "#D4C4B0")
                    }
                  />
                </div>

                <div className="mb-8">
                  <label
                    className="mb-4 block font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.1em]"
                    style={{ color: "#8B7355" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={500}
                    required
                    className="w-full resize-none p-4 font-['Noto_Sans_JP'] text-sm font-light transition-all duration-300 focus:outline-none"
                    style={{
                      backgroundColor: "transparent",
                      borderBottom: "1px solid #D4C4B0",
                      color: "#7A6B5A",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "#8B7355")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "#D4C4B0")
                    }
                  />
                  <p
                    className="mt-2 font-['Noto_Sans_JP'] text-xs"
                    style={{ color: "#A0937D" }}
                  >
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="transform cursor-pointer whitespace-nowrap border px-12 py-4 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.2em] transition-all duration-700 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
                    style={{
                      backgroundColor: "transparent",
                      color: "#8B7355",
                      borderColor: "#D4C4B0",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = "#8B7355";
                        e.currentTarget.style.color = "#FAF8F5";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#8B7355";
                      }
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {submitStatus && (
                  <div className="mt-6 text-center">
                    <p
                      className="font-['Noto_Sans_JP'] text-sm font-light"
                      style={{ color: "#8B7355" }}
                    >
                      {submitStatus}
                    </p>
                  </div>
                )}
              </div>
            </form>

            <div className="mt-16 space-y-6 text-center">
              <div>
                <p
                  className="mb-2 font-['Noto_Sans_JP'] text-sm font-light uppercase tracking-[0.2em]"
                  style={{ color: "#A0937D" }}
                >
                  Email
                </p>
                <a
                  href="mailto:yuki@example.com"
                  className="font-['Crimson_Text'] text-lg transition-opacity duration-300 hover:opacity-70"
                  style={{ color: "#8B7355" }}
                >
                  yuki@example.com
                </a>
              </div>

              <div className="flex justify-center space-x-8">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center transition-transform duration-300 hover:scale-110"
                  style={{ color: "#A0937D" }}
                >
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center transition-transform duration-300 hover:scale-110"
                  style={{ color: "#A0937D" }}
                >
                  <i className="ri-linkedin-line text-xl"></i>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center transition-transform duration-300 hover:scale-110"
                  style={{ color: "#A0937D" }}
                >
                  <i className="ri-twitter-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
