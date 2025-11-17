// src/pages/topics/mechanical/gears/index.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const gearTypes = [
  {
    id: "spur-gear",
    name: "Spur Gear",
    description: "Straight teeth gears for parallel shaft transmission",
    image: "/images/gears/spur-gear.jpg",
    category: "Basic Gears"
  },
  {
    id: "helical-gear",
    name: "Helical Gear",
    description: "Angled teeth for smoother and quieter operation",
    image: "/images/gears/helical-gear.jpg",
    category: "Basic Gears"
  },
  {
    id: "bevel-gear",
    name: "Bevel Gear",
    description: "Conical gears for intersecting shafts",
    image: "/images/gears/bevel-gear.jpg",
    category: "Angle Gears"
  },
  {
    id: "worm-gear",
    name: "Worm Gear",
    description: "Screw-like gears for high reduction ratios",
    image: "/images/gears/worm-gear.jpg",
    category: "Special Gears"
  }
];

const GearsOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gear Types</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore different types of mechanical gears and their applications
          </p>
        </div>

        {/* Gears Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearTypes.map((gear) => (
            <Card key={gear.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  {/* Placeholder for gear image */}
                  <div className="text-gray-400 text-sm">Gear Image</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">{gear.name}</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {gear.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {gear.description}
                  </p>

                  <Link to={`/topics/mechanical/gears/${gear.id}`} className="block">
                    <Button className="w-full group-hover:bg-blue-600 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GearsOverview;