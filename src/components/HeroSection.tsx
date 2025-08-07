import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const HeroSection = () => {
  const [searchValue, setSearchValue] = useState("");

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = () => {
    const searchTerm = searchValue.toLowerCase().trim();
    
    if (searchTerm === "" || searchTerm.includes("project")) {
      scrollToProjects();
    } else if (searchTerm.includes("contact") || searchTerm.includes("email") || searchTerm.includes("touch")) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (searchTerm.includes("about") || searchTerm.includes("me") || searchTerm.includes("bio")) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (searchTerm.includes("resume") || searchTerm.includes("cv") || searchTerm.includes("experience")) {
      document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Default to projects for any other search
      scrollToProjects();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="hero-section">
      {/* Floating background elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      
      <div className="text-center space-y-8 max-w-4xl mx-auto px-6 relative z-10">
        {/* Main heading */}
        <div className="fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 tracking-tight">
            Rishav Raj
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
            Computer Science Student & Web Developer
          </p>
        </div>

        {/* Enhanced Google-style search bar */}
        <div className="slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center bg-background/80 backdrop-blur-lg border-2 border-primary/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary hover:shadow-primary/25 group">
              {/* Search Icon */}
              <div className="flex items-center justify-center pl-6 pr-3">
                <Search className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              
              {/* Input Field */}
              <Input 
                placeholder="Explore my work and projects..."
                className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground/70 
                           focus:outline-none focus:ring-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 
                           text-base py-4 px-2 rounded-none shadow-none focus:shadow-none"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              
              {/* Search Button */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="mr-2 p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 
                           transition-all duration-300 hover:scale-110 group/btn"
                onClick={handleSearch}
              >
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/30 via-accent-blue/30 to-accent-cyan/30 
                           rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="scale-in flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="outline" 
            className="google-btn"
            onClick={scrollToProjects}
          >
            View Projects
          </Button>
          <Button 
            className="google-btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;