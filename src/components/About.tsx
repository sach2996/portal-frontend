// import "./About.css";
import "./../App.css";

function About() {
  return (
    <section className="about-section">
      <div className="profile-picture">
        <img src="src/assets/profile.jpg" alt="Your Profile Picture" />
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi there! I am Sachin Sharma. I am results-oriented Full Stack
            Developer with 7+ years of experience building scalable web
            applications using MEAN and MERN stacks. Proven track record of
            successfully collaborating with large corporations to achieve their
            business objectives. Skilled in JavaScript, Node.js, React, Angular,
            MongoDB, and Express. Possess a strong ability to design, develop,
            and maintain robust software solutions.
          </p>
        </div>
        <div className="contact-details">
          <h2>Contact Details</h2>
          {/* <div style={{ display: "block", width: "70%" }}> */}
          <p>Sachin Sharma</p>
          <p>Toronto, Ontario</p>
          <p>Canada</p>
          <p>+1 1234567899</p>
          <p>sach@gmail.com</p>
          {/* </div>
          <div style={{ display: "flex", width: "50%" }}> */}
          <a href="your-resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="button">Download Resume</button>
          </a>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
