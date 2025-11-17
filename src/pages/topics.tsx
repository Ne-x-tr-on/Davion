import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Topic {
  name: string;
  path: string;
  category: string;
  image: string;
}

const Topics: React.FC = () => {
  const topics: Topic[] = [
    { name: "Mechanical Engineering", path: "mechanical", category: "Mechanical", image: "/images/mechanical.jpg" },
    { name: "Electrical Engineering", path: "electrical", category: "Electrical", image: "/images/electrical.jpg" },
    { name: "Arduino", path: "arduino", category: "Arduino", image: "/images/arduino.jpg" },
    { name: "Automation", path: "automation", category: "Automation", image: "/images/automation.jpg" },
    { name: "Embedded Systems", path: "embedded", category: "Embedded", image: "/images/embedded.jpg" },
    { name: "Software / AI / ML", path: "software-ai", category: "Software/AI", image: "/images/software-ai.jpg" },
  ];

  return (
    <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
          Topics
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
          Explore various engineering disciplines and technologies through our comprehensive tutorials and resources
        </p>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {topics.map((topic) => (
          <Card
            key={topic.path}
            className="group overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-border h-full flex flex-col"
          >
            {/* Image area */}
            <CardHeader className="p-0 flex-shrink-0">
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-video">
                <img
                  src={topic.image}
                  alt={topic.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <Badge
                    className="bg-secondary text-secondary-foreground shadow-medium text-xs sm:text-sm px-2 py-1"
                    variant="secondary"
                  >
                    {topic.category}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            {/* Content area */}
            <CardContent className="p-3 sm:p-4 space-y-2 flex-grow">
              <h3 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                {topic.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3 leading-relaxed">
                Learn tutorials, projects, and resources about {topic.name}. Build practical skills with hands-on examples.
              </p>
            </CardContent>

            {/* Action area */}
            <CardFooter className="p-3 sm:p-4 pt-0 flex-shrink-0">
              <Link to={`/topics/${topic.path}`} className="w-full">
                <Button
                  variant="accent"
                  className="w-full text-sm sm:text-base py-2 sm:py-2.5 hover:scale-105 transition-transform duration-200"
                  size="sm"
                >
                  Explore
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty state for odd number of items in certain breakpoints */}
      <div className="xs:hidden sm:block lg:hidden xl:block">
        {/* This ensures proper alignment on medium screens */}
        <div className="hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
      </div>
    </div>
  );
};

export default Topics;