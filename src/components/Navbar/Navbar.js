import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Navbar.css";

export default function TopNavbar() {
  return (
    <div className="navBar">
        <Link to="/">
          <button id="link1">About Me</button>
        </Link>
        <Link to="/projects">
          <button id="link2">My Work</button>
        </Link>
    </div>
  );
}
