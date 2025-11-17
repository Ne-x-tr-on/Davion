import React from "react";

const gearsDetails = [
  {
    name: "Spur Gear",
    description:
      "Spur gears are the most common type of gears. They have straight teeth and are used to transmit motion between parallel shafts.",
  },
  {
    name: "Helical Gear",
    description:
      "Helical gears have angled teeth, which makes them run smoother and quieter than spur gears. Suitable for high-speed applications.",
  },
  {
    name: "Bevel Gear",
    description:
      "Bevel gears are conical in shape and are used to transmit motion between intersecting shafts, usually at 90 degrees.",
  },
  {
    name: "Worm Gear",
    description:
      "Worm gears consist of a screw (worm) and a gear (worm wheel). They can achieve high reduction ratios and transmit torque at right angles.",
  },
];

const Gears: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Gears Details</h1>
      {gearsDetails.map((gear) => (
        <div key={gear.name} className="mb-6 p-4 bg-card rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">{gear.name}</h2>
          <p className="text-muted-foreground">{gear.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gears;
