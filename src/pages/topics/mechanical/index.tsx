import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, AirVent, Fuel } from "lucide-react";

export default function MechanicalTopics() {
  const topics = [
    {
      name: "Gears",
      path: "gears",
      description: "Learn about different types of gears, their applications, and mechanical advantages",
      icon: <Cog className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
      count: "8+ Types"
    },
    {
      name: "Pneumatics",
      path: "pneumatics",
      description: "Explore pneumatic systems, components, and industrial applications",
      icon: <AirVent className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
      count: "12+ Components"
    },
    {
      name: "Pumps",
      path: "pumps",
      description: "Understand various pump types, working principles, and selection criteria",
      icon: <Fuel className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
      count: "6+ Categories"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Cog className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Mechanical Engineering
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore fundamental mechanical systems and components that power modern technology
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-blue-600">{topics.length}</div>
            <div className="text-sm text-gray-600">Main Topics</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-green-600">26+</div>
            <div className="text-sm text-gray-600">Components</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-purple-600">50+</div>
            <div className="text-sm text-gray-600">Applications</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-orange-600">Advanced</div>
            <div className="text-sm text-gray-600">Complexity Level</div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {topics.map((topic, index) => (
            <Card
              key={topic.path}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-white"
            >
              {/* Card Header with Gradient */}
              <CardHeader className="p-0">
                <div className={`bg-gradient-to-r ${topic.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                        {topic.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{topic.name}</h3>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {topic.count}
                    </span>
                  </div>
                  <div className="w-12 h-1 bg-white/30 rounded-full mt-3"></div>
                </div>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {topic.description}
                </p>

                {/* Features Preview */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Areas:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {topic.name === "Gears" && (
                      <>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          Spur, Helical, Bevel Gears
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          Gear Ratios & Efficiency
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          Material Selection
                        </li>
                      </>
                    )}
                    {topic.name === "Pneumatics" && (
                      <>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          Cylinders & Actuators
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          Valves & Control Systems
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          Circuit Design
                        </li>
                      </>
                    )}
                    {topic.name === "Pumps" && (
                      <>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          Centrifugal & Positive Displacement
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          Pump Curves & Performance
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          Maintenance & Troubleshooting
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Explore Button */}
                <Link to={topic.path} className="block w-full">
                  <Button
                    className="w-full group-hover:bg-gray-900 group-hover:text-white transition-all duration-300"
                    variant="outline"
                  >
                    Explore {topic.name}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>💡 <strong>Tip:</strong> Click on any topic to explore detailed tutorials, projects, and applications</p>
        </div>
      </div>
    </div>
  );
}