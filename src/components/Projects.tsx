import Project from "./Project";
import "./Projects.css";
export default function Projects() {
  // const project = {
  //   name: "Netflix Clone",
  //   tech: "React, Recoil",
  // };
  return (
    <>
      <div className="projects-container">
        <div
          className="project-details"
          style={{
            backgroundImage: "url(public/netflix.jpg)",
          }}
        >
          <div style={{ borderRadius: "5px" }}>
            <a href="https://react-netflix-rho-drab.vercel.app/">
              <img
                src="public/netflix-favicon.png"
                width={"100px"}
                height={"100px"}
              />
            </a>
          </div>
          {/* <div>
            <h3>{project.name}</h3>
          </div> */}
          <div className="netflix-clone-link">
            <a href="https://react-netflix-rho-drab.vercel.app/">
              Netflix Clone
            </a>
          </div>
        </div>
        <div
          className="project-details"
          style={{
            background: "gray",
          }}
        >
          <div style={{ borderRadius: "5px" }}>
            <a href="https://react-examples-ruddy.vercel.app/">
              <img src="public/react.svg" width={"100px"} height={"100px"} />
            </a>
          </div>
          {/* <div>
            <h3>{project.name}</h3>
          </div> */}
          <div className="netflix-clone-link">
            <a href="https://react-examples-ruddy.vercel.app/">
              Split My Expenses
            </a>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <Project />
        <Project />
      </div>
    </>
  );
}
