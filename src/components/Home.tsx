// import "./Home.css";
import "./../App.css";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="round-div">
        <img
          src="src/assets/profile.jpg"
          alt="Image description"
          // height={"10px"}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <h2>Hello, I am Sachin Sharma</h2>
      <p>Based in Toronto. I develop MEAN, MERN stack applications.</p>
    </div>
  );
}
