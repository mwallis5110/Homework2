import React from "react";
import About from "../pages/About/about.js";
import Projects from "../pages/Projects/projects.js";

export default function Navigation(props) {
  function displayCurrentPage() {
    if (props.currentPage === 1) {
      return <About />;
    } else if (props.currentPage === 2) {
      return <Projects />;
    }
  }

  return <div>{displayCurrentPage()}</div>;
}
