import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rishavraj.work19@gmail.com",
      href: "mailto:rishavraj.work19@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8847710888",
      href: "tel:+918847710888"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sector 56, Gurgaon, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-section-title text-foreground mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. 
          Let's discuss how we can work together!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <Card className="floating-card">
          <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                required
              />
            </div>
            
            <Button type="submit" className="google-btn-primary w-full">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="floating-card">
            <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    {info.href === "#" ? (
                      <p className="text-muted-foreground">{info.value}</p>
                    ) : (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="floating-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Let's Connect</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Whether you're looking for a web developer, need help with a project, 
              or want to collaborate on something exciting, I'd love to hear from you.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I typically respond within 24 hours and am always open to discussing 
              new opportunities, internships, and interesting projects.
            </p>
          </Card>

          <Card className="floating-card bg-primary/5 border-primary/20">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Available for Opportunities</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Currently seeking internships and entry-level positions in web development
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Available now</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;