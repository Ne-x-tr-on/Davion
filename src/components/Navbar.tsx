import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);

  const topics = [
    { name: "Mechanical Engineering", path: "mechanical" },
    { name: "Electrical Engineering", path: "electrical" },
    { name: "Arduino", path: "arduino" },
    { name: "Automation", path: "automation" },
    { name: "Embedded Systems", path: "embedded" },
    { name: "Software / AI / ML", path: "software-ai" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group flex-shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-gradient-hero p-1.5 sm:p-2 rounded-lg shadow-medium group-hover:shadow-glow transition-all duration-300">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
                Davion
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">
                Mechatronics Workshop
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 relative">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base"
            >
              Home
            </Link>

            {/* Topics dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTopicsOpen(true)}
              onMouseLeave={() => setTopicsOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base">
                Topics <ChevronDown className="h-4 w-4" />
              </button>

              {topicsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 bg-background border border-border shadow-xl rounded-lg py-2 min-w-[220px] z-50 animate-in fade-in duration-200"
                  onMouseEnter={() => setTopicsOpen(true)}
                  onMouseLeave={() => setTopicsOpen(false)}
                >
                  {topics.map((t) => (
                    <Link
                      key={t.path}
                      to={`/topics/${t.path}`}
                      className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors duration-200 text-sm border-b border-border last:border-b-0"
                    >
                      {t.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base"
            >
              Projects
            </Link>
            <Link
              to="/marketplace"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base"
            >
              Marketplace
            </Link>
            <Link
              to="/internships"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base"
            >
              Internships
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base"
            >
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          {/* <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-sm">
              Login
            </Button>
            <Button variant="hero" size="sm" className="text-sm">
              Get Started
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top duration-300 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Topics Accordion */}
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setMobileTopicsOpen(!mobileTopicsOpen)}
                  className="flex items-center justify-between text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-muted/50 w-full text-left"
                >
                  <span>Topics</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileTopicsOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {mobileTopicsOpen && (
                  <div className="pl-6 pr-4 space-y-1 animate-in fade-in duration-200">
                    {topics.map((t) => (
                      <Link
                        key={t.path}
                        to={`/topics/${t.path}`}
                        className="block py-2.5 px-4 text-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-muted/30 text-sm border-l-2 border-muted"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/projects"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/marketplace"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setIsOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                to="/internships"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setIsOpen(false)}
              >
                Internships
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              {/* Mobile Auth Buttons */}
              {/* <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-border">
                <Button
                  variant="ghost"
                  className="w-full justify-center py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Button>
                <Button
                  variant="hero"
                  className="w-full justify-center py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};