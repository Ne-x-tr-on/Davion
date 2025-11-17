export default function BevelGear() {
  return (
    <div style={{ padding: "20px", lineHeight: 1.6 }}>
      <h1>Bevel Gears</h1>

      <p>
        Bevel gears are gears where the teeth are cut on a conical surface.
        They are used to transmit motion between intersecting shafts—most commonly at a 90° angle.
        This makes them essential in machinery that needs to change the direction of rotation.
      </p>

      <h2>Why Bevel Gears Are Important</h2>
      <p>
        Bevel gears allow the transfer of power between intersecting shafts while maintaining
        high efficiency, smooth operation, and customizable gear ratios.
        They are used in thousands of mechanical and automotive systems.
      </p>

      {/* Types of Bevel Gears */}
      <h2>Types of Bevel Gears</h2>
      <ul>
        <li>
          <strong>Straight Bevel Gears</strong> – Teeth are straight and taper toward the apex of the cone.
          Used for low to medium speed applications.
        </li>

        <li>
          <strong>Spiral Bevel Gears</strong> – Teeth are curved, offering smoother and quieter operation.
          Ideal for high-speed and high-load systems (e.g., automotive differentials).
        </li>

        <li>
          <strong>Zero Bevel Gears</strong> – Similar to straight bevel gears but with curved teeth that
          do not spiral. Provides smoother operation than straight bevel but simpler than spiral.
        </li>

        <li>
          <strong>Hypoid Gears</strong> – Similar to spiral bevel but the shafts do not intersect.
          Used in vehicles for greater torque transfer.
        </li>
      </ul>

      {/* Applications */}
      <h2>Applications of Bevel Gears</h2>
      <ul>
        <li>Automotive differential systems</li>
        <li>Hand drills and power tools</li>
        <li>Industrial gearboxes</li>
        <li>Printing press machines</li>
        <li>Conveyor systems</li>
        <li>Mechanical clocks and timing devices</li>
        <li>Marine propulsion systems</li>
        <li>Robotics arm joints requiring angular motion transfer</li>
      </ul>

      {/* Sample applications */}
      <h2>Sample Real-World Use Cases</h2>
      <ul>
        <li>
          <strong>Automotive Differential</strong><br />
          Bevel gears allow the wheels to rotate at different speeds during cornering.
        </li>

        <li>
          <strong>Hand Drill Mechanism</strong><br />
          The 90-degree direction change from handle to drill bit uses bevel gears.
        </li>

        <li>
          <strong>Conveyor Belt Direction Drive</strong><br />
          Changing shaft direction to fit machine layout.
        </li>

        <li>
          <strong>Robotic Rotation Joints</strong><br />
          Used in joints requiring angled torque transfer.
        </li>
      </ul>

      {/* Projects */}
      <h2>Mini Projects Using Bevel Gears</h2>
      <ol>
        <li>
          <strong>DIY Hand Drill</strong><br />
          Build a simple mechanical hand drill using two bevel gears at 90°.
        </li>

        <li>
          <strong>Mini Differential System</strong><br />
          Create a working differential for a small robot car or RC car.
        </li>

        <li>
          <strong>Robotic Arm Wrist Joint</strong><br />
          Use bevel gears to allow rotation of the gripper at right angles.
        </li>

        <li>
          <strong>Angle Drive Transmission</strong><br />
          A simple setup to transfer motion 90 degrees between shafts using bevel gears.
        </li>

        <li>
          <strong>Mechanical Clock Mechanism</strong><br />
          Integrate bevel gears to change rotational axis directions.
        </li>
      </ol>

      <p style={{ marginTop: "40px", fontStyle: "italic" }}>
        Bevel gears are essential in mechanical and mechatronic design—understanding their
        types and applications gives you strong foundational knowledge for robotics and
        power transmission systems.
      </p>
    </div>
  );
}
