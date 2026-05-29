import { Button } from "@/components/Button";
import { Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Achievements" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight hover:text-primary transition-colors">
            VB<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
          <a href="/Vaibhav_Baishkhiyar_Resume.pdf" download
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full glass border border-border hover:border-primary/50 hover:text-primary transition-all">
            <Download className="w-4 h-4" /> CV
          </a>
        </div>

        <button className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index} onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2">
                {link.label}
              </a>
            ))}
            <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
            <a href="/Vaibhav_Baishkhiyar_Resume.pdf" download
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl glass border border-border">
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
