import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

const ResumeSection = () => {
  const [downloadStatus, setDownloadStatus] = useState('');

  const handleDownload = async () => {
    try {
      setDownloadStatus('Downloading...');
      
      // Try direct download first (simpler approach)
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Rishav_Raj_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadStatus('Download initiated successfully!');
      setTimeout(() => setDownloadStatus(''), 3000);
    } catch (error) {
      setDownloadStatus('Error: Unable to download resume. Please try the View Online option or contact support.');
      setTimeout(() => setDownloadStatus(''), 5000);
    }
  };

  const handlePreview = async () => {
    try {
      setDownloadStatus('Opening preview...');
      
      // Try to open in new window
      const newWindow = window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
      
      if (!newWindow) {
        throw new Error('Pop-up blocked');
      }
      
      setDownloadStatus('');
    } catch (error) {
      setDownloadStatus('Error: Pop-up blocked or file unavailable. Please check your browser settings or try downloading instead.');
      setTimeout(() => setDownloadStatus(''), 5000);
    }
  };
  const experiences = [
    {
      title: "Summer Internship - Web Developer Intern",
      company: "C-DAC CINE Silchar",
      location: "Silchar, India",
      period: "Jun 2024 - Jul 2024",
      achievements: [
        "Developed a University Website Using Django CMS: Designed and deployed a structured, user-friendly platform",
        "Managed 200+ faculty profiles and university events, improving content accessibility by 40%",
        "Integrated Role-Based Access Control: Implemented secure authentication for 1,000+ students, faculty, and admins",
        "Enhanced User Experience & Performance: Improved page load speed by 50% through caching and SEO optimizations, resulting in a 30% increase in user engagement across devices"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      school: "Assam University, Silchar",
      period: "Dec 2021 - May 2025",
      details: "CGPA: 7.47 (Till 7th sem)"
    }
  ];

  const certifications = [
    "Completed a 6-week certified training, mastering Python basics, OOP, SQLite, and GUI development with PyQT",
    "Achieved 98% in the final assessment and ranked as a top performer",
    "Machine Learning & Data Analysis fundamentals",
    "Web Development with Django framework"
  ];

  const skillsInfo = {
    languages: "C, C++, Python, SQL, Node.JS, TypeScript",
    dsa: "Problem solving, Optimization",
    ml: "Supervised & Unsupervised Learning, Model Evaluation, PyTorch, Tensor",
    dataAnalysis: "Numpy, Pandas, Matplotlib, Seaborn, Data Cleaning, Exploratory Data Analysis (EDA)",
    webDev: "HTML, CSS, JavaScript"
  };

  return (
    <section id="resume" className="section-container bg-subtle-gradient">
      <div className="text-center mb-16">
        <h2 className="text-section-title text-foreground mb-4">Resume</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          My academic journey and professional experience in computer science 
          and web development, with a focus on creating impactful solutions.
        </p>
        
        {/* Download Resume Button */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center gap-4">
            <Button 
              className="google-btn-primary" 
              onClick={handleDownload}
              disabled={downloadStatus.includes('Downloading') || downloadStatus.includes('Opening')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button 
              variant="outline" 
              className="google-btn"
              onClick={handlePreview}
              disabled={downloadStatus.includes('Downloading') || downloadStatus.includes('Opening')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Online
            </Button>
          </div>
          
          {/* Fallback direct link */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-2">
              If the buttons above don't work, try this direct link:
            </p>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Direct PDF Link
            </a>
          </div>
          
          {/* Status message */}
          {downloadStatus && (
            <div className={`text-sm px-4 py-2 rounded-lg max-w-md text-center ${
              downloadStatus.includes('Error') 
                ? 'text-red-600 bg-red-50 border border-red-200' 
                : downloadStatus.includes('success')
                ? 'text-green-600 bg-green-50 border border-green-200'
                : 'text-blue-600 bg-blue-50 border border-blue-200'
            }`}>
              {downloadStatus}
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Experience */}
        <div className="lg:col-span-2">
          <Card className="floating-card p-8">
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-0 top-8 w-px h-full bg-border"></div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-muted-foreground text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Education */}
          <Card className="floating-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-medium text-foreground text-sm mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{edu.school}</p>
                  <p className="text-muted-foreground text-xs mb-1">{edu.period}</p>
                  <p className="text-muted-foreground text-xs mt-2">{edu.details}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="floating-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Certifications & Training</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Skills Summary */}
          <Card className="floating-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Key Skills</h3>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-foreground">Languages:</span>
                <p className="text-sm text-muted-foreground mt-1">{skillsInfo.languages}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Data Structures and Algorithm:</span>
                <p className="text-sm text-muted-foreground mt-1">{skillsInfo.dsa}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Machine Learning:</span>
                <p className="text-sm text-muted-foreground mt-1">{skillsInfo.ml}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Data Analysis:</span>
                <p className="text-sm text-muted-foreground mt-1">{skillsInfo.dataAnalysis}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Web development:</span>
                <p className="text-sm text-muted-foreground mt-1">{skillsInfo.webDev}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;