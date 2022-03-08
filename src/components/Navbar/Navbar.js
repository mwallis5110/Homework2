import React from "react";
import "./Navbar.css";

export default function TopNavbar(props) {
  return (
    <div className="navBar">
      <button href="/about" id="link1" onClick={() => props.setCurrentPage(1)}>
        About Me
      </button>
      <button
        href="/projects"
        id="link2"
        onClick={() => props.setCurrentPage(2)}
      >
        My Work
      </button>
    </div>
  );
}
