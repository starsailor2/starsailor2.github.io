import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/starsailor2", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rishav-raj-95a68719a/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rishavraj.work19@gmail.com", label: "Email" },
    { icon: Download, href: "/resume.pdf", label: "Preview Resume", download: false },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-foreground hover:text-primary transition-all duration-300 
                       hover:scale-105 bg-gradient-to-r from-primary/10 to-accent-blue/10 
                       px-4 py-2 rounded-xl border border-transparent hover:border-primary/20"
          >
            RR
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 
                           text-sm font-medium relative group px-3 py-2 rounded-lg hover:bg-muted/50"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 
                               group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="sm"
                className="w-11 h-11 p-0 relative group transition-all duration-300 hover:scale-110 
                           hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 rounded-xl
                           border border-transparent hover:border-primary/30 hover:bg-primary/5"
                asChild
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  download={link.download}
                  aria-label={link.label}
                  className="flex items-center justify-center w-full h-full rounded-xl transition-all duration-300"
                >
                  <link.icon className="w-5 h-5 transition-all duration-300 group-hover:text-primary 
                                       group-hover:scale-125 group-hover:drop-shadow-md" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-6 flex justify-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 
                         text-sm font-medium px-3 py-2 rounded-lg hover:bg-muted/50 relative group"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 
                             group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;