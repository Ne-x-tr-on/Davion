import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Mechanical topics
const mechanicalTopics = [
  {
    name: "Gears",
    description:
      "Explore different types of gears and their applications in machines.",
    image: "/images/mechanical/gears.jpg",
    path: "gears",
  },
  {
    name: "Levers",
    description:
      "Understand the types of levers and their mechanical advantage.",
    image: "/images/mechanical/levers.jpg",
    path: "levers",
  },
  {
    name: "Pulleys",
    description:
      "Learn about pulleys, including fixed, movable, and compound systems.",
    image: "/images/mechanical/pulleys.jpg",
    path: "pulleys",
  },
  {
    name: "Cams & Followers",
    description:
      "Discover how cams convert rotary motion into linear motion.",
    image: "/images/mechanical/cams.jpg",
    path: "cams-followers",
  },
];

const Mechanical: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Mechanical Engineering</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Choose a topic below to dive deeper into mechanical concepts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mechanicalTopics.map((topic) => (
          <Card
            key={topic.name}
            className="group overflow-hidden border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader className="p-0">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={topic.image}
                  alt={topic.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-secondary text-secondary-foreground shadow-md">
                    {topic.name}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {topic.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-4">{topic.description}</p>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Link to={`/topics/mechanical/${topic.path}`}>
                <Button variant="accent" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default mechanical;
