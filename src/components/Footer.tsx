import { Link } from "react-router-dom";
import { Zap, Github, Linkedin, Twitter, Mail, ExternalLink, Code } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-hero p-2 rounded-lg shadow-medium">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Davion
                </span>
                <span className="text-xs text-muted-foreground">by Neza</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering creators, innovators, and students to build the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/amsr"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  AMSR Robot
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/internships"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Internships
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://nezaspace.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1"
                >
                  Neza <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-medium hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-medium hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Ne-x-tr-on"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-medium hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:26nextron.dev@gmail.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-medium hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Developer Credit */}
            <div className="mt-4 pt-4 border-t border-border">
              <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                <Code className="h-4 w-4" /> Developer
              </h4>
              <a
                href="https://engnewtonkamau.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                Newton Kamau <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Davion by{" "}
            <a
              href="https://nezaspace.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Neza
            </a>
            . All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Developed by{" "}
            <a
              href="https://engnewtonkamau.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Newton Manyeki Kamau
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
