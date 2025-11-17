import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);

  const topics = [
    { name: "Mechanical Engineering", path: "mechanical" },
    { name: "Electrical Engineering", path: "electrical" },
    { name: "Arduino", path: "arduino" },
    { name: "Automation", path: "automation" },
    { name: "Embedded Systems", path: "embedded" },
    { name: "Software / AI / ML", path: "software-ai" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-hero p-2 rounded-lg shadow-medium group-hover:shadow-glow transition-all duration-300">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Davion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 relative">
            <Link to="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Home
            </Link>

            {/* Topics dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTopicsOpen(true)}
              onMouseLeave={() => setTopicsOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-300 font-medium">
                Topics <ChevronDown className="h-4 w-4" />
              </button>

              {topicsOpen && (
                <div
                  className="absolute top-full mt-2 bg-background border border-border shadow-lg rounded-lg py-2 min-w-[200px]"
                  onMouseEnter={() => setTopicsOpen(true)} // <-- keep open when hovering dropdown
                  onMouseLeave={() => setTopicsOpen(false)}
                >
                  {topics.map((t) => (
                    <Link
                      key={t.path}
                      to={`/topics/${t.path}`}
                      className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                    >
                      {t.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>


            <Link to="/projects" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Projects
            </Link>
            <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Marketplace
            </Link>
            <Link to="/internships" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Internships
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <div className="flex flex-col gap-1">
                <span className="px-4 py-2 font-medium text-foreground">Topics</span>
                {topics.map((t) => (
                  <Link
                    key={t.path}
                    to={`/topics/${t.path}`}
                    className="pl-8 py-2 text-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.name}
                  </Link>
                ))}
              </div>

              <Link to="/projects" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2" onClick={() => setIsOpen(false)}>
                Marketplace
              </Link>
              <Link to="/internships" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2" onClick={() => setIsOpen(false)}>
                Internships
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2" onClick={() => setIsOpen(false)}>
                About
              </Link>

              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" className="w-full">Login</Button>
                <Button variant="hero" className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
