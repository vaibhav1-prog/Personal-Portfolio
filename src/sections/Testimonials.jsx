import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    quote:
      "Ranked in the Top 10% of the batch with a CGPA of 8.49 — one of the highest academic performers in the Computer Science & Engineering program.",
    author: "GGSIPU, New Delhi",
    role: "Academic Achievement",
    initials: "GG",
  },
  {
    quote:
      "Consistently solving Data Structures & Algorithms problems on LeetCode and GeeksforGeeks, strengthening algorithmic thinking and competitive programming skills.",
    author: "LeetCode & GeeksforGeeks",
    role: "Problem Solving",
    initials: "LC",
  },
  {
    quote:
      "Participated in multiple college hackathons and tech events — enhancing teamwork, rapid prototyping, and end-to-end project implementation under time constraints.",
    author: "College Hackathons",
    role: "Competitions & Events",
    initials: "HC",
  },
  {
    quote:
      "Completed Introduction to Cybersecurity by Cisco Networking Academy, covering network security fundamentals and cybersecurity best practices.",
    author: "Cisco Networking Academy",
    role: "Certification",
    initials: "CS",
  },
  {
    quote:
      "Completed Mastering HTML5 and CSS3 by Udemy — covering modern web development, responsive design, and UI fundamentals.",
    author: "Udemy",
    role: "Certification",
    initials: "UD",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % achievements.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + achievements.length) % achievements.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Achievements
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Milestones &amp;{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              certifications.
            </span>
          </h2>
        </div>

        {/* Achievement Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{achievements[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-primary/20">
                  <span className="text-sm font-bold text-primary">
                    {achievements[activeIdx].initials}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">
                    {achievements[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievements[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {achievements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
