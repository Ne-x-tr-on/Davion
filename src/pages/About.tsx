import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We believe in pushing boundaries and exploring new possibilities",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a supportive ecosystem where creators thrive together",
    },
    {
      icon: Lightbulb,
      title: "Learning Focused",
      description: "Continuous growth through hands-on experience and collaboration",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to quality in every project and partnership",
    },
  ];

  const team = [
    {
      name: "Newton Kamau",
      role: "Founder & CEO",
      // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    },
    {
      name: "Sarah Martinez",
      role: "Head of Community",
      // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      // image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    },
    {
      name: "Emily Davis",
      role: "Product Director",
      // image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
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
                About Davion
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Building the future of innovation, one creator at a time
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
                Davion, powered by Neza, is dedicated to empowering the next generation of creators,
                innovators, and students. We provide a comprehensive platform where talented individuals
                can showcase their projects, access quality hardware, and connect with career opportunities
                that matter.
              </p>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                Our vision is to create a vibrant ecosystem where innovation thrives, knowledge is shared
                freely, and every creator has the tools and support they need to succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-border"
                >
                  <CardContent className="pt-8 pb-6 space-y-4">
                    <div className="bg-gradient-hero w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-medium">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Passionate individuals dedicated to empowering creators
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-border"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      // src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-muted-foreground">
                Start your journey with Davion today and connect with thousands of creators worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
