import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

const Projects = () => {
  // Mock data for projects
  const allProjects = [
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
    {
      title: "Robotic Arm Controller",
      description: "Precision control system for industrial and educational robotics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
      category: "Robotics",
      views: 1567,
      likes: 112,
      author: "Alex Kumar",
    },
    {
      title: "Weather Station Network",
      description: "Distributed weather monitoring with real-time data visualization",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop",
      category: "IoT",
      views: 845,
      likes: 54,
      author: "Emma Taylor",
    },
    {
      title: "3D Printer Upgrade Kit",
      description: "Enhanced precision and multi-material printing capabilities",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
      category: "Hardware",
      views: 1289,
      likes: 95,
      author: "David Lee",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header */}
        <section className="bg-gradient-subtle py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Explore Projects
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover innovative creations from our community of makers and innovators
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-background sticky top-16 z-40 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10 h-12"
                />
              </div>
              <Button variant="outline" className="h-12 px-6">
                <SlidersHorizontal className="mr-2 h-5 w-5" />
                Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
