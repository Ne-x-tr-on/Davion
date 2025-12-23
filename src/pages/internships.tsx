import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Clock, Briefcase } from "lucide-react";

const Internships = () => {
  const opportunities = [
    {
      company: "Tech Innovators Inc.",
      role: "Hardware Engineering Intern",
      location: "San Francisco, CA",
      type: "Full-time",
      duration: "3 months",
      description: "Work on cutting-edge IoT devices and robotics projects",
      tags: ["Hardware", "IoT", "Robotics"],
    },
    {
      company: "Green Energy Solutions",
      role: "Embedded Systems Intern",
      location: "Remote",
      type: "Part-time",
      duration: "6 months",
      description: "Develop sustainable energy monitoring systems",
      tags: ["Embedded", "Green Tech", "Arduino"],
    },
    {
      company: "AI Labs Corp",
      role: "Machine Learning Intern",
      location: "New York, NY",
      type: "Full-time",
      duration: "4 months",
      description: "Build AI-powered solutions for real-world problems",
      tags: ["AI/ML", "Python", "TensorFlow"],
    },
    {
      company: "Robotics Future",
      role: "Robotics Software Intern",
      location: "Boston, MA",
      type: "Full-time",
      duration: "3 months",
      description: "Program autonomous systems and robotic controllers",
      tags: ["Robotics", "ROS", "C++"],
    },
    {
      company: "Smart Home Tech",
      role: "IoT Developer Intern",
      location: "Remote",
      type: "Part-time",
      duration: "5 months",
      description: "Create connected home automation solutions",
      tags: ["IoT", "Cloud", "Mobile"],
    },
    {
      company: "Maker Space Studios",
      role: "Product Design Intern",
      location: "Austin, TX",
      type: "Full-time",
      duration: "3 months",
      description: "Design innovative hardware products from concept to prototype",
      tags: ["Design", "CAD", "3D Printing"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header */}
        <section className="bg-gradient-hero py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground">
                Launch Your Career
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Connect with top companies and land your dream internship
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="accent" size="lg">
                  Submit Your Portfolio
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-background/20"
                >
                  View All Opportunities
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-gradient-hero w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-large">
                  <span className="text-3xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Showcase your projects, skills, and achievements
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-gradient-accent w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-large">
                  <span className="text-3xl font-bold text-accent-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Apply to Opportunities</h3>
                <p className="text-muted-foreground">
                  Browse and apply to internships that match your interests
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-large">
                  <span className="text-3xl font-bold text-secondary-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Start Your Journey</h3>
                <p className="text-muted-foreground">
                  Get hired and gain real-world experience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              Current Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {opportunities.map((opp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-border"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-foreground">{opp.role}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                          <span className="text-sm">{opp.company}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {opp.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">{opp.description}</p>
                    <div className="grid grid-cols-3 gap-4 pt-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        {opp.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4 text-primary" />
                        {opp.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        {opp.duration}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="w-full">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Internships;
