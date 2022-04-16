import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode/index";

function Navbar() {
  const navStyle = {
    color: "white",
  };

  return (
    <div>
      <nav variant="pills" activeKey="/home" className="flex-column">
        <ul className="nav-links">
          <Link style={navStyle} to="/home">
            <li>HOME</li>
          </Link>
          <Link style={navStyle} to="/about">
            <li>ABOUT</li>
          </Link>
          {/* <Link style={navStyle} to="/resume">
          <li>RESUME</li>
        </Link> */}
          <Link style={navStyle} to="/projects">
            <li>PROJECTS</li>
          </Link>
          <Link style={navStyle} to="/blog">
            <li>BLOG</li>
          </Link>
          <Link style={navStyle} to="/connect">
            <li>CONNECT</li>
          </Link>
          <Link style={navStyle} to="/music">
            <li>MUSIC</li>
          </Link>
          <Link style={navStyle} to="/photos">
            <li>PHOTOS</li>
          </Link>
          <Link style={navStyle} to="/extras">
            <li>EXTRRRAASSSS</li>
          </Link>
          <Link style={navStyle} to="/statistics">
            <li>STATISTICS</li>
          </Link>
          <Link style={navStyle} to="/courses">
            <li>COURSES</li>
          </Link>

          {/* <Link style={navStyle} to="/calculator">
          <li>CALCULATOR</li>
        </Link>
        <Link style={navStyle} to="/metronome">
          <li>METRONOME</li>
        </Link> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
