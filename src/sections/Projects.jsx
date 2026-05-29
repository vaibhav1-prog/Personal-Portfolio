import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "TeamSync",
    description:
      "A MERN stack team collaboration platform with JWT Auth and Role-Based Access Control (Admin & Member). Features task assignment, priority tracking, deadline management, real-time activity logs, and responsive productivity dashboards.",
    image: "/projects/teamsync.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    link: "https://teamsync-production-5eec.up.railway.app",
    github: "https://github.com/vaibhav1-prog/TeamSync",
  },
  {
    title: "CineBook",
    description:
      "A MERN full-stack movie ticket booking platform with Clerk Authentication and protected routes. Includes real-time seat selection, booking confirmation, and an Admin Panel with full CRUD for movies, showtimes, and theatres.",
    image: "/projects/cinebook.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Clerk"],
    link: "https://cine-book-teal.vercel.app",
    github: "https://github.com/vaibhav1-prog/CineBook",
  },
  {
    title: "HireIQ",
    description:
      "A full-stack job portal with RBAC for Employer and Job Seeker portals. Features JWT auth with 7-day sessions via httpOnly cookies, job search/filter, application status tracking (Pending/Accepted/Rejected), and resume uploads via Cloudinary.",
    image: "/projects/hireiq.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    link: "https://hire-iq-livid.vercel.app",
    github: "https://github.com/vaibhav1-prog/HireIQ",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent full-stack projects — from real-time
            collaboration tools to job portals and booking systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder if image missing */}
                <div
                  className="w-full h-full bg-linear-to-br from-primary/20 to-surface items-center justify-center text-primary font-bold text-2xl"
                  style={{ display: 'none' }}
                >
                  {project.title[0]}
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/vaibhav1-prog" target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              View All on GitHub
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
