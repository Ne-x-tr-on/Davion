import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Cog } from "lucide-react";

const gearsDetails = [
  {
    id: "spur-gear",
    name: "Spur Gear",
    description:
      "Spur gears are the most common type of gears. They have straight teeth and are used to transmit motion between parallel shafts. They offer high efficiency and are simple to manufacture.",
    features: ["Straight teeth", "Parallel shafts", "Simple design", "High efficiency", "Easy to manufacture"],
    applications: ["Clocks", "Washing machines", "Conveyor systems", "Manual transmissions", "Printing presses"],
    complexity: "Low",
    efficiency: "High",
    image: "/images/gears/spur-gear.jpg"
  },
  {
    id: "helical-gear",
    name: "Helical Gear",
    description:
      "Helical gears have angled teeth, which makes them run smoother and quieter than spur gears. Suitable for high-speed applications and heavy load conditions.",
    features: ["Angled teeth", "Smooth operation", "High load capacity", "Quieter than spur gears", "Gradual engagement"],
    applications: ["Automotive transmissions", "Industrial machinery", "High-speed applications", "Marine propulsion"],
    complexity: "Medium",
    efficiency: "High",
    image: "/images/gears/helical-gear.jpg"
  },
  {
    id: "bevel-gear",
    name: "Bevel Gear",
    description:
      "Bevel gears are conical in shape and are used to transmit motion between intersecting shafts, usually at 90 degrees. Perfect for changing the direction of power transmission.",
    features: ["Conical shape", "Intersecting shafts", "Right angle transmission", "Various tooth types", "High precision"],
    applications: ["Differentials", "Hand drills", "Printing presses", "Marine applications", "Power tools"],
    complexity: "Medium",
    efficiency: "Medium",
    image: "/images/gears/bevel-gear.jpg"
  },
  {
    id: "worm-gear",
    name: "Worm Gear",
    description:
      "Worm gears consist of a screw (worm) and a gear (worm wheel). They can achieve high reduction ratios and transmit torque at right angles with self-locking capability.",
    features: ["High reduction ratios", "Self-locking capability", "Right angle drive", "Compact design", "Smooth operation"],
    applications: ["Elevators", "Conveyor systems", "Tuning instruments", "Packaging machinery", "Gate operators"],
    complexity: "High",
    efficiency: "Low",
    image: "/images/gears/worm-gear.jpg"
  },
];

const Gears: React.FC = () => {
  const [selectedGear, setSelectedGear] = useState<string | null>(null);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (gearName: string) => {
    setImageError(prev => ({ ...prev, [gearName]: true }));
  };

  // Fallback SVG icons for each gear type
  const getGearIcon = (gearName: string) => {
    switch (gearName) {
      case "Spur Gear":
        return (
          <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 4 L12 20 M4 12 L20 12 M6.34 6.34 L17.66 17.66 M17.66 6.34 L6.34 17.66" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        );
      case "Helical Gear":
        return (
          <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M5 12 A8 8 0 0 1 19 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M5 12 A8 8 0 0 0 19 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        );
      case "Bevel Gear":
        return (
          <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4 L20 12 L12 20 L4 12 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        );
      case "Worm Gear":
        return (
          <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 11 L12 16 M9 14 L15 14" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 18 L16 18 L16 20 L8 20 Z" fill="currentColor"/>
          </svg>
        );
      default:
        return (
          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Link
              to="/topics/mechanical"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mr-4"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Mechanical</span>
            </Link>
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full">
              <Cog className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Gear Types
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Explore different types of mechanical gears, their features, applications, and characteristics in mechanical systems
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">{gearsDetails.length}</div>
            <div className="text-xs sm:text-sm text-gray-600">Gear Types</div>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border">
            <div className="text-xl sm:text-2xl font-bold text-green-600">3</div>
            <div className="text-xs sm:text-sm text-gray-600">Complexity Levels</div>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border">
            <div className="text-xl sm:text-2xl font-bold text-purple-600">15+</div>
            <div className="text-xs sm:text-sm text-gray-600">Applications</div>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border">
            <div className="text-xl sm:text-2xl font-bold text-orange-600">High</div>
            <div className="text-xs sm:text-sm text-gray-600">Efficiency Range</div>
          </div>
        </div>

        {/* Gears Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {gearsDetails.map((gear, index) => (
            <Card
              key={gear.id}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 bg-white ${
                selectedGear === gear.name ? 'ring-2 ring-blue-500' : ''
              }`}
              onMouseEnter={() => setSelectedGear(gear.name)}
              onMouseLeave={() => setSelectedGear(null)}
            >
              {/* Card Header with Gradient */}
              <CardHeader className="p-0">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 sm:p-6 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                    <h2 className="text-xl sm:text-2xl font-bold">{gear.name}</h2>
                    <Badge
                      className={`w-fit ${
                        gear.complexity === "Low" ? "bg-green-500" :
                        gear.complexity === "Medium" ? "bg-yellow-500" :
                        "bg-red-500"
                      }`}
                    >
                      {gear.complexity} Complexity
                    </Badge>
                  </div>
                  <div className="w-12 h-1 bg-blue-300 rounded-full mt-2 sm:mt-3"></div>
                </div>
              </CardHeader>

              {/* Gear Image Section */}
              <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden">
                {gear.image && !imageError[gear.name] ? (
                  <img
                    src={gear.image}
                    alt={gear.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(gear.name)}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    {getGearIcon(gear.name)}
                  </div>
                )}

                {/* Efficiency badge on image */}
                <div className="absolute top-3 right-3">
                  <Badge
                    className={
                      gear.efficiency === "High" ? "bg-green-500" :
                      gear.efficiency === "Medium" ? "bg-yellow-500" :
                      "bg-red-500"
                    }
                  >
                    {gear.efficiency} Efficiency
                  </Badge>
                </div>
              </div>

              {/* Card Content */}
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  {gear.description}
                </p>

                {/* Features & Applications */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Key Features
                    </h3>
                    <ul className="space-y-1 sm:space-y-2">
                      {gear.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Applications
                    </h3>
                    <ul className="space-y-1 sm:space-y-2">
                      {gear.applications.map((application, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Efficiency Bar */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">Efficiency Rating:</span>
                    <span className="font-semibold text-blue-600 text-sm sm:text-base">{gear.efficiency}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        gear.efficiency === "High"
                          ? "bg-green-500 w-4/5"
                          : gear.efficiency === "Medium"
                          ? "bg-yellow-500 w-3/5"
                          : "bg-red-500 w-2/5"
                      }`}
                    ></div>
                  </div>
                </div>
              </CardContent>

              {/* Card Footer */}
              <CardFooter className="p-4 sm:p-6 pt-0">
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 w-full">
                  <span>Mechanical Engineering</span>
                  <Link
                    to={`/topics/mechanical/gears/${gear.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>💡 <strong>Did you know?</strong> Gears can achieve efficiency up to 98% in properly designed systems</p>
        </div>
      </div>
    </div>
  );
};

export default Gears;