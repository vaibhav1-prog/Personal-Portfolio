import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin, FolderOpen } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useEffect, useState } from "react";

const dots = [...Array(30)].map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${15 + Math.random() * 20}s`,
  delay: `${Math.random() * 5}s`,
}));

const skills = [
  "React.js","Node.js","Express.js","MongoDB","JavaScript",
  "REST APIs","JWT Auth","Tailwind CSS","MySQL","Git",
  "GitHub","Postman","Vercel","Railway","C++","Java","HTML5","MERN Stack",
];

// Typing animation hook
const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(isDeleting
          ? current.substring(0, displayed.length - 1)
          : current.substring(0, displayed.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayed;
};

export const Hero = () => {
  const typedText = useTypingEffect([
    "MERN Full Stack Developer",
    "Software Engineer",
    "Open to Opportunities",
  ]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hero background" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{ backgroundColor: "#20B2A6", left: dot.left, top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`, animationDelay: dot.delay }} />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                OPEN TO WORK
              </span>
            </div>

            <div className="animate-fade-in animation-delay-100">
              <h1 className="font-extrabold leading-none tracking-tight" style={{ fontSize: "clamp(3.8rem, 10vw, 7.5rem)", lineHeight: 1.0 }}>
                <span className="block text-white">Vaibhav</span>
                <span className="block text-primary glow-text">Baishkhiyar</span>
              </h1>

              <div className="mt-4 flex items-center gap-1">
                <span className="text-lg md:text-xl font-medium text-primary/90 tracking-wide min-h-7">
                  {typedText}
                </span>
                <span className="inline-block w-0.5 h-6 bg-primary animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Recruiter-friendly description */}
            <p className="text-base text-muted-foreground max-w-lg animate-fade-in animation-delay-200 leading-relaxed">
              Full Stack Developer with expertise in MERN stack development, scalable API design,
              and performance-optimized web applications. Experienced in building and deploying
              production-ready apps with a focus on clean architecture, security, and seamless UX.
              Passionate about solving real problems through impactful tech solutions.
            </p>

            {/* CTAs — View Projects + Contact Me */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}>
                <FolderOpen className="w-5 h-5" />
                View Projects
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Find me on:</span>
              {[
                { icon: Github, href: "https://github.com/vaibhav1-prog" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhav-baishkhiyar108/" },
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/profile-photo.jpg" alt="Vaibhav Baishkhiyar"
                  className="w-full aspect-[4/5] object-cover rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Open to Work</span>
                  </div>
                </div>
                {/* Updated: 10+ Projects */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
