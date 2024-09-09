// import "./Home.css";
import "./../App.css";
import Icons from "./Icons";
// import About from "./About";
// import Resume from "./Resume";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="round-div">
          <img
            src="public/home-profile.jpg"
            alt="Image description"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <h2>Hello, I am Sachin Sharma</h2>
        <p>Based in Toronto. I develop MEAN, MERN stack applications.</p>
        <Icons />
      </div>
      {/* <About />
      <Resume /> */}
    </>
  );
}
