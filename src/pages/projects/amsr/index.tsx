import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bot,
  Users,
  Cpu,
  Download,
  FileText,
  Code,
  ChevronRight,
  Github,
  ArrowRight,
  Layers,
  CheckCircle,
  Clock
} from "lucide-react";

const AMSRProject = () => {
  const trainers = [
    { name: "Faustine Murunga", role: "Lead Trainer", avatar: "" },
    { name: "Josline Atieno", role: "Technical Advisor", avatar: "" },
    { name: "Nancy Mwangi", role: "Project Coordinator", avatar: "" },
    { name: "Isaac Mwondi", role: "Mechatronics Specialist", avatar: "" },
  ];

  const trainees = [
    { name: "Peter", role: "Hardware Engineer", avatar: "" },
    { name: "Hans", role: "Software Developer", avatar: "" },
    { name: "Enoch Githu", role: "Control Systems", avatar: "" },
    { name: "Antonia", role: "CAD Designer", avatar: "" },
    { name: "Newton", role: "Full-Stack Developer", avatar: "" },
    { name: "Jimmi Martin", role: "Electronics", avatar: "" },
  ];

  const stats = [
    { label: "Components", value: "30+", icon: Layers },
    { label: "Software Modules", value: "5", icon: Code },
    { label: "Team Members", value: "10", icon: Users },
    { label: "Milestones Completed", value: "3", icon: CheckCircle },
  ];

  const downloads = [
    { name: "AMSR Project Documentation", file: "AMSR_Project_Documentation.pdf", size: "2.4 MB" },
    { name: "Component Datasheets", file: "AMSR_Component_Datasheets.pdf", size: "5.1 MB" },
    { name: "Wiring Diagrams", file: "AMSR_Wiring.pdf", size: "1.8 MB" },
  ];

  const tags = ["Robotics", "AMSR", "Mechatronics", "KiambuPolytechnic", "StudentProject", "ROS2", "Arduino"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground/30 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary-foreground/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-40 right-40 w-16 h-16 bg-primary-foreground/10 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-2xl">
                <Bot className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground drop-shadow-lg">
              Autonomous Mobile Service Robot
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Innovative Mechatronics Project for Autonomous Deliveries & Service Tasks
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              AMSR is a modular autonomous mobile robot capable of deliveries, patrols, and service tasks within Kiambu National Polytechnic.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30 transition-colors">
                  #{tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/projects/amsr/docs">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  View Full Documentation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://github.com/Ne-x-tr-on/Davion" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Repository
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Hero Image Placeholder */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="bg-gradient-hero w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-medium">
                    <stat.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Project Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the talented trainers and trainees bringing AMSR to life
            </p>
          </div>

          {/* Trainers */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Trainers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainers.map((trainer, index) => (
                <Card key={index} className="hover:shadow-large transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-6 text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                      <AvatarImage src={trainer.avatar} />
                      <AvatarFallback className="bg-gradient-hero text-primary-foreground text-xl font-semibold">
                        {trainer.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold text-foreground">{trainer.name}</h4>
                    <p className="text-sm text-muted-foreground">{trainer.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trainees */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Cpu className="h-6 w-6 text-accent" />
              Trainees
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainees.map((trainee, index) => (
                <Card key={index} className="hover:shadow-large transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <Avatar className="w-14 h-14 ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all">
                      <AvatarImage src={trainee.avatar} />
                      <AvatarFallback className="bg-gradient-accent text-accent-foreground font-semibold">
                        {trainee.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground">{trainee.name}</h4>
                      <p className="text-sm text-muted-foreground">{trainee.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Project Milestones</h2>
            <p className="text-lg text-muted-foreground">Our journey building the AMSR</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { title: "Prototype Assembly", status: "completed", date: "January 2024", description: "Initial hardware assembly and chassis construction completed" },
              { title: "Navigation Tests", status: "completed", date: "February 2024", description: "Successful indoor navigation tests with ROS 2" },
              { title: "SLAM Integration", status: "in-progress", date: "March 2024", description: "Implementing simultaneous localization and mapping" },
              { title: "Field Deployment", status: "upcoming", date: "Q2 2024", description: "Real-world testing at Kiambu National Polytechnic" },
            ].map((milestone, index) => (
              <Card key={index} className={`overflow-hidden ${milestone.status === "in-progress" ? "ring-2 ring-primary" : ""}`}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    milestone.status === "completed" 
                      ? "bg-green-500/20 text-green-600" 
                      : milestone.status === "in-progress"
                      ? "bg-primary/20 text-primary animate-pulse"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {milestone.status === "completed" ? <CheckCircle className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                      <Badge variant={milestone.status === "completed" ? "default" : milestone.status === "in-progress" ? "secondary" : "outline"}>
                        {milestone.status === "in-progress" ? "In Progress" : milestone.status === "completed" ? "Completed" : "Upcoming"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{milestone.date}</p>
                    <p className="text-sm text-foreground/80">{milestone.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Project Downloads</h2>
            <p className="text-lg text-muted-foreground">Access documentation and resources</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {downloads.map((download, index) => (
              <Card key={index} className="hover:shadow-large transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-hero p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{download.name}</h4>
                      <p className="text-sm text-muted-foreground">{download.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Download className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-primary-foreground">Interested in Contributing?</h2>
            <p className="text-lg text-primary-foreground/90">
              Join the AMSR team and help build the future of autonomous robotics
            </p>
            <Link to="/projects/amsr/docs">
              <Button variant="accent" size="lg">
                Access Full Documentation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AMSRProject;
