import { Link } from "react-router-dom";

export default function MechanicalTopics() {
  const topics = [
    { name: "Gears", path: "gears" },
    { name: "Pneumatics", path: "pneumatics" },
    { name: "Pumps", path: "pumps" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Mechanical Engineering Topics</h1>

      <div style={{ display: "flex", gap: 20 }}>
        {topics.map((t) => (
          <Link key={t.path} to={t.path}>
            <div style={{
              width: 200,
              padding: 20,
              border: "1px solid #ccc",
              borderRadius: 10,
              cursor: "pointer"
            }}>
              {t.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
