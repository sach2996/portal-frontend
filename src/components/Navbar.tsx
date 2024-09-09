import { Link } from "react-router-dom";
// import "./Navbar.css";
import "./../App.css";
export default function Navbar() {
  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <nav className="navbar">
      <ul className="list-container">
        {navigationItems.map((item) => (
          <li
            key={item.path}
            style={{ marginLeft: "2px", padding: "10px", color: "white" }}
          >
            <Link to={item.path} style={{ color: "white", fontSize: "larger" }}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
