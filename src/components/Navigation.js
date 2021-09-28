import React from "react";
import About from '../../src/components/pages/About/about';
import Projects from '../../src/components/pages/Projects/projects';

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
