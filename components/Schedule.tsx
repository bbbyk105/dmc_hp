"use client";

import { useState, useEffect, useRef } from "react";

export default function Schedule() {
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

  const scheduleData = [
    {
      day: "Day 1",
      date: "March 15",
      color: "from-pink-300 to-rose-300",
      events: [
        {
          time: "9:00 AM",
          title: "Registration & Welcome Coffee",
          type: "General",
        },
        {
          time: "10:00 AM",
          title: "Opening Keynote: The Future of Design",
          type: "Keynote",
        },
        {
          time: "11:30 AM",
          title: "Workshop: Design Thinking Fundamentals",
          type: "Workshop",
        },
        { time: "1:00 PM", title: "Networking Lunch", type: "Break" },
        {
          time: "2:30 PM",
          title: "Panel: Sustainable Design Practices",
          type: "Panel",
        },
        { time: "4:00 PM", title: "Creative Showcase", type: "Showcase" },
      ],
    },
    {
      day: "Day 2",
      date: "March 16",
      color: "from-purple-300 to-indigo-300",
      events: [
        {
          time: "9:00 AM",
          title: "Morning Meditation & Networking",
          type: "General",
        },
        {
          time: "10:00 AM",
          title: "AI in Creative Industries",
          type: "Keynote",
        },
        {
          time: "11:30 AM",
          title: "Workshop: Digital Art Mastery",
          type: "Workshop",
        },
        { time: "1:00 PM", title: "Creative Lunch & Expo", type: "Break" },
        {
          time: "2:30 PM",
          title: "Branding in the Digital Age",
          type: "Panel",
        },
        {
          time: "4:00 PM",
          title: "Portfolio Review Sessions",
          type: "Workshop",
        },
      ],
    },
    {
      day: "Day 3",
      date: "March 17",
      color: "from-teal-300 to-cyan-300",
      events: [
        {
          time: "9:00 AM",
          title: "Creative Breakfast Meetup",
          type: "General",
        },
        { time: "10:00 AM", title: "Innovation Spotlight", type: "Keynote" },
        {
          time: "11:30 AM",
          title: "Workshop: Future Technologies",
          type: "Workshop",
        },
        { time: "1:00 PM", title: "Final Networking Lunch", type: "Break" },
        {
          time: "2:30 PM",
          title: "Closing Ceremony & Awards",
          type: "General",
        },
        { time: "4:00 PM", title: "After Party Celebration", type: "Social" },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <h2 className="mb-6 text-4xl font-light text-gray-800 md:text-5xl">
            Event Schedule
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-pink-300 to-purple-300"></div>
          <p className="mx-auto max-w-2xl text-xl font-light text-gray-600">
            Three days packed with inspiring talks, hands-on workshops, and
            meaningful connections
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {scheduleData.map((day, index) => (
            <div
              key={day.day}
              className={`overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`bg-gradient-to-r ${day.color} p-6 text-center text-white`}
              >
                <h3 className="mb-2 text-2xl font-light">{day.day}</h3>
                <p className="text-lg opacity-90">{day.date}</p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="flex items-start gap-4 rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50"
                    >
                      <div className="min-w-20 text-sm font-medium text-gray-500">
                        {event.time}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 font-medium text-gray-800">
                          {event.title}
                        </h4>
                        <span
                          className={`inline-block rounded-full px-2 py-1 text-xs ${
                            event.type === "Keynote"
                              ? "bg-pink-100 text-pink-600"
                              : event.type === "Workshop"
                                ? "bg-purple-100 text-purple-600"
                                : event.type === "Panel"
                                  ? "bg-blue-100 text-blue-600"
                                  : event.type === "Break"
                                    ? "bg-green-100 text-green-600"
                                    : event.type === "Social"
                                      ? "bg-yellow-100 text-yellow-600"
                                      : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
