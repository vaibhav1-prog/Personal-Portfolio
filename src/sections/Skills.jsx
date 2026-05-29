import { Code2, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-400",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "JWT Authentication", level: 82 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
    skills: [
      { name: "MongoDB", level: 83 },
      { name: "Mongoose ODM", level: 80 },
      { name: "MySQL", level: 72 },
      { name: "SQL Queries", level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Languages",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-400",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "C++ / DSA", level: 60 },
      { name: "Java", level: 70 },
      { name: "Postman / Vercel", level: 80 },
    ],
  },
];

const extraTags = [
  "RBAC", "Cloudinary", "Clerk Auth", "Railway", "httpOnly Cookies",
  "Responsive Design", "API Integration", "Role-Based Access", "Mongoose"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">TECHNICAL SKILLS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-secondary-foreground">
            My tech
            <span className="font-serif italic font-normal text-white"> arsenal.</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm">
            A full-stack skill set built through real projects, internships, and consistent practice.
          </p>
        </div>

        {/* 2x2 skill cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass rounded-2xl p-7 animate-fade-in hover:border-primary/20 border border-border/50 transition-all"
              style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                  <cat.icon className={`w-5 h-5 ${cat.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground/80">{skill.name}</span>
                      <span className={`text-xs font-semibold ${cat.iconColor}`}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, var(--color-primary, #20B2A6), var(--color-primary, #20B2A6)88)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra tags */}
        <div className="mt-12 text-center animate-fade-in animation-delay-400">
          <p className="text-sm text-muted-foreground mb-5">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {extraTags.map((tag) => (
              <span key={tag}
                className="px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
