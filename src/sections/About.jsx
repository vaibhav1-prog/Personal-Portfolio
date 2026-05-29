import { GraduationCap, Code2, Rocket, Users, Lightbulb } from "lucide-react";

const stats = [
  { value: "10+", label: "PROJECTS BUILT" },
  { value: "MERN", label: "STACK FOCUS" },
  { value: "B.Tech", label: "CSE STUDENT" },
  { value: "2026", label: "GRADUATING" },
];

const highlights = [
  { icon: Code2, title: "Clean Code", description: "Maintainable, scalable architecture with clear structure." },
  { icon: Lightbulb, title: "Problem Solver", description: "Consistent DSA practice on LeetCode & GeeksforGeeks." },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-14 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-3 text-secondary-foreground">
            Building the future,
            <span className="font-serif italic font-normal text-white"> one commit at a time.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio + Education */}
          <div className="space-y-7">
            <p className="text-muted-foreground text-base leading-relaxed animate-fade-in animation-delay-100">
              I'm a Full Stack Developer specializing in the MERN Stack — building scalable,
              production-ready web applications with clean architecture and smooth user experiences.
              I care about performance, security, and code that's easy to maintain and extend.
            </p>

            {/* Education Card */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Education</div>
                  <div className="font-semibold text-sm">B.Tech — Computer Science & Engineering</div>
                </div>
              </div>
              <p className="text-sm font-medium text-foreground">Guru Gobind Singh Indraprastha University, New Delhi</p>
              <p className="text-sm text-muted-foreground mt-1">Nov 2022 – Jun 2026</p>
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                CGPA: 8.49 — Top 10% of batch
              </span>
            </div>

            {/* Quote */}
            <div className="glass rounded-2xl p-5 border border-primary/20 animate-fade-in animation-delay-300">
              <p className="text-sm font-medium italic text-foreground/80">
                "I build digital products that are not just functional, but impactful —
                solving real problems with clean code and thoughtful design."
              </p>
            </div>
          </div>

          {/* Right — Stats + Highlight Cards */}
          <div className="space-y-5">
            {/* Stats Grid — like friend's portfolio */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in animation-delay-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all group">
                  <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform">{stat.value}</div>
                  <div className="text-xs text-muted-foreground tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="glass p-5 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 2) * 100}ms` }}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
