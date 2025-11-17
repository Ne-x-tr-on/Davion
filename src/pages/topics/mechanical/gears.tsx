import React, { useState } from "react";

const gearsDetails = [
  {
    name: "Spur Gear",
    description:
      "Spur gears are the most common type of gears. They have straight teeth and are used to transmit motion between parallel shafts.",
    features: ["Straight teeth", "Parallel shafts", "Simple design", "High efficiency"],
    applications: ["Clocks", "Washing machines", "Conveyor systems", "Manual transmissions"],
    complexity: "Low",
    efficiency: "High"
  },
  {
    name: "Helical Gear",
    description:
      "Helical gears have angled teeth, which makes them run smoother and quieter than spur gears. Suitable for high-speed applications.",
    features: ["Angled teeth", "Smooth operation", "High load capacity", "Quieter than spur gears"],
    applications: ["Automotive transmissions", "Industrial machinery", "High-speed applications"],
    complexity: "Medium",
    efficiency: "High"
  },
  {
    name: "Bevel Gear",
    description:
      "Bevel gears are conical in shape and are used to transmit motion between intersecting shafts, usually at 90 degrees.",
    features: ["Conical shape", "Intersecting shafts", "Right angle transmission", "Various tooth types"],
    applications: ["Differentials", "Hand drills", "Printing presses", "Marine applications"],
    complexity: "Medium",
    efficiency: "Medium"
  },
  {
    name: "Worm Gear",
    description:
      "Worm gears consist of a screw (worm) and a gear (worm wheel). They can achieve high reduction ratios and transmit torque at right angles.",
    features: ["High reduction ratios", "Self-locking capability", "Right angle drive", "Compact design"],
    applications: ["Elevators", "Conveyor systems", "Tuning instruments", "Packaging machinery"],
    complexity: "High",
    efficiency: "Low"
  },
];

const Gears: React.FC = () => {
  const [selectedGear, setSelectedGear] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Gear Types
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different types of mechanical gears, their features, applications, and characteristics
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-blue-600">{gearsDetails.length}</div>
            <div className="text-sm text-gray-600">Gear Types</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-green-600">4</div>
            <div className="text-sm text-gray-600">Complexity Levels</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-purple-600">15+</div>
            <div className="text-sm text-gray-600">Applications</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <div className="text-2xl font-bold text-orange-600">High</div>
            <div className="text-sm text-gray-600">Efficiency Range</div>
          </div>
        </div>

        {/* Gears Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
          {gearsDetails.map((gear, index) => (
            <div
              key={gear.name}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden ${
                selectedGear === gear.name ? 'ring-2 ring-blue-500' : ''
              }`}
              onMouseEnter={() => setSelectedGear(gear.name)}
              onMouseLeave={() => setSelectedGear(null)}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl font-bold">{gear.name}</h2>
                  <div className="flex items-center space-x-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {gear.complexity} Complexity
                    </span>
                  </div>
                </div>
                <div className="w-12 h-1 bg-blue-300 rounded-full mt-3"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {gear.description}
                </p>

                {/* Features & Applications */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {gear.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Common Applications
                    </h3>
                    <ul className="space-y-2">
                      {gear.applications.map((application, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Efficiency Bar */}
                <div className="bg-gray-50 rounded-lg p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Efficiency:</span>
                    <span className="font-semibold text-blue-600">{gear.efficiency}</span>
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
              </div>

              {/* Card Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Mechanical Engineering</span>
                  <span>Gear #{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500">
          <p>Hover over cards to see interactive effects • Click to learn more about each gear type</p>
        </div>
      </div>
    </div>
  );
};

export default Gears;