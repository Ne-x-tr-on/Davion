import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { MarketplaceCard } from "@/components/MarketplaceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, Briefcase, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  // Mock data for projects
  const projects = [
    {
      title: "Smart Home Automation System",
      description: "IoT-based home automation with voice control and mobile app integration",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop",
      category: "IoT",
      views: 1234,
      likes: 89,
      author: "Sarah Chen",
    },
    {
      title: "AI-Powered Learning Platform",
      description: "Machine learning platform for personalized education experiences",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      category: "AI/ML",
      views: 2156,
      likes: 143,
      author: "James Wilson",
    },
    {
      title: "Sustainable Energy Monitor",
      description: "Real-time energy consumption tracking and optimization system",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
      category: "Green Tech",
      views: 987,
      likes: 67,
      author: "Maria Garcia",
    },
  ];

  // Mock data for marketplace
  const marketplace = [
    {
      name: "Arduino Mega 2560",
      description: "High-performance microcontroller board for complex projects",
      image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=800&auto=format&fit=crop",
      price: 45.99,
      rating: 4.8,
      category: "Hardware",
    },
    {
      name: "Raspberry Pi 4 Kit",
      description: "Complete starter kit with all essential components",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&auto=format&fit=crop",
      price: 89.99,
      rating: 4.9,
      category: "Hardware",
    },
    {
      name: "IoT Sensor Bundle",
      description: "Collection of sensors for environmental monitoring",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      price: 34.99,
      rating: 4.6,
      category: "Components",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Creators collaborating"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-lg">
              Empowering Creators, Innovators & Students
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join Davion – where creativity meets opportunity. Showcase your projects, discover
              cutting-edge hardware, and launch your career.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="accent" size="lg" className="text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-background/20"
              >
                Explore Projects
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="bg-gradient-hero w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-large">
                <Rocket className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-gradient-accent w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-large">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="text-3xl font-bold text-accent">10K+</div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-large">
                <Briefcase className="h-8 w-8 text-secondary-foreground" />
              </div>
              <div className="text-3xl font-bold text-secondary">200+</div>
              <div className="text-sm text-muted-foreground">Internship Opportunities</div>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-gradient-hero w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-large">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover innovative projects from our talented community of creators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="default" size="lg">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Hardware Marketplace
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the best components and tools for your next project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplace.map((item, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <MarketplaceCard {...item} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              Browse Marketplace <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-hero rounded-3xl p-12 shadow-large text-center space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                  Launch Your Career
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Connect with top companies, showcase your projects, and land your dream internship
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="accent"
                    size="lg"
                    className="text-lg"
                  >
                    Browse Internships
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-background/20"
                  >
                    Submit Your Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
