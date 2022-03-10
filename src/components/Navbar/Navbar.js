import React from "react";

import { Link } from "react-router-dom";

import Dropdown from "../Dropdown/Dropdown";

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
        <Dropdown />
    </div>
  );
}
