import "./Projects.css";
export default function Project() {
  const project = {
    name: "Sample",
    tech: "React, Recoil",
  };
  return (
    <div className="project-details">
      <div></div>
      <div>
        <h3>{project.name}</h3>
      </div>
    </div>
  );
}
