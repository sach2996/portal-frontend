import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css";
import "./../App.css";
export default function Navbar() {
  const location = useLocation();
  const activeStyle = {
    color: "#F06000", // Change to your preferred color
    fontWeight: "bold",
  };
  const inActiveStyle = {
    color: "white", // Change to your preferred color
    fontWeight: "bold",
  };

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
            <Link
              to={item.path}
              style={
                location.pathname === item.path ? activeStyle : inActiveStyle
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
