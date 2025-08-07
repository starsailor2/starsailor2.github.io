import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Neural Language Model with Interactive Text Generation",
      description: "Developed a character-level LSTM language model using PyTorch with embedding dimensions of 128 and hidden dimensions of 512, achieving 95%+ prediction accuracy with efficient training pipeline and performance monitoring.",
      techStack: ["Python", "PyTorch", "LSTM", "Natural Language Processing"],
      liveUrl: "https://github.com/starsailor2/nlp-text-generation",
      githubUrl: "https://github.com/starsailor2/nlp-text-generation",
      category: "Machine Learning"
    },
    {
      title: "Detection of PUEA in CRNs",
      description: "Implemented a clustering algorithm to detect Primary User Emulation Attacks (PUEA) in Cognitive Radio Networks (CRNs), achieving 92% attack detection accuracy and reducing false positives by 25%.",
      techStack: ["Python", "Data Analysis", "Machine Learning", "K-means Clustering"],
      liveUrl: "https://github.com/starsailor2/puea-detection",
      githubUrl: "https://github.com/starsailor2/puea-detection",
      category: "Data Analysis"
    },
    {
      title: "University Website Using Django CMS",
      description: "Designed and deployed a structured, user-friendly platform managing 200+ faculty profiles and university events, improving content accessibility by 40% with secure authentication for 1,000+ students, faculty, and admins.",
      techStack: ["Django", "Python", "HTML", "CSS", "JavaScript", "PostgreSQL"],
      liveUrl: "https://university-cms.herokuapp.com",
      githubUrl: "https://github.com/starsailor2/university-cms",
      category: "Web Development"
    },
    {
      title: "Role-Based Access Control System",
      description: "Integrated secure authentication control implementing role-based access for different user types, ensuring 100% page protection and real-time access control with enhanced user experience and performance optimization.",
      techStack: ["Node.js", "Express", "JWT", "MongoDB", "JavaScript"],
      liveUrl: "https://rbac-system.netlify.app",
      githubUrl: "https://github.com/starsailor2/rbac-system",
      category: "Backend Development"
    },
    {
      title: "Wireless Network Security Analysis",
      description: "Designed machine learning-based approach for spectrum anomaly detection using K-means clustering, achieving 95% accuracy and resulting in 10x faster wireless communication with refined unsupervised learning models.",
      techStack: ["Python", "Machine Learning", "K-means", "Signal Processing"],
      liveUrl: "https://github.com/starsailor2/wireless-security",
      githubUrl: "https://github.com/starsailor2/wireless-security",
      category: "Network Security"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and TypeScript, featuring Google-inspired design with smooth animations, glassmorphism effects, and optimal performance across all devices.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://rishav-portfolio.netlify.app",
      githubUrl: "https://github.com/starsailor2/google-inspired-portfolio",
      category: "Frontend Development"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-section-title text-foreground mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my software development projects, demonstrating 
          practical solutions across web development, machine learning, and data analysis.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="glass-card group h-full flex flex-col scale-in p-8" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Category badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 text-accent-blue rounded-full text-sm font-medium backdrop-blur-sm">
                {project.category}
              </span>
            </div>

            {/* Project content */}
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 pt-6 border-t border-border">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full google-btn py-2"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* View more projects */}
      <div className="text-center mt-12">
        <Button className="google-btn-primary" asChild>
          <a href="https://github.com/starsailor2" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            View All Projects
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;