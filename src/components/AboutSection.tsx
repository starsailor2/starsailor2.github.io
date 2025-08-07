import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-subtle-gradient">
      <div className="text-center mb-16">
        <h2 className="text-section-title text-foreground mb-4">About Me</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center fade-in">
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl p-1 glass-card">
              <div className="w-full h-full rounded-2xl overflow-hidden backdrop-blur-sm">
                <img 
                  src="/profile-picture.jpeg" 
                  alt="Rishav Raj - Computer Science Student & Web Developer"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder (hidden by default) */}
                <div className="w-full h-full bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 flex items-center justify-center backdrop-blur-sm rounded-2xl" style={{ display: 'none' }}>
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm border border-accent-blue/30 pulse-glow">
                      <span className="text-3xl font-semibold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">RR</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Add your profile picture as /profile-picture.jpg
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full opacity-60 float"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full opacity-40 float" style={{ animationDelay: '-2s' }}></div>
            </div>
          </div>
        </div>

        {/* Bio Content */}
        <div className="space-y-8">
          <Card className="glass-card slide-up p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Computer Science Student & Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              I'm currently pursuing a Bachelor of Technology in Computer Science & Engineering 
              at Assam University, Silchar, with a CGPA of 7.47. I have a passion for web development 
              and building innovative solutions using modern technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Through my internship experience and personal projects, I've developed strong skills 
              in full-stack development, specializing in creating user-friendly platforms and 
              implementing secure authentication systems.
            </p>
          </Card>

          <div className="grid grid-cols-2 gap-6">
            <Card className="glass-card text-center p-6 scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </Card>
            <Card className="glass-card text-center p-6 scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </Card>
          </div>

          {/* Skills */}
          <Card className="glass-card fade-in p-8" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold text-foreground mb-6">Core Skills</h4>
            <div className="flex flex-wrap gap-3">
              {['Python', 'JavaScript', 'TypeScript', 'Django', 'Node.js', 'HTML', 'CSS', 'SQL'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 text-accent-blue rounded-full text-sm font-medium backdrop-blur-sm border border-accent-blue/20 hover:scale-105 transition-transform duration-200"
                  style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;