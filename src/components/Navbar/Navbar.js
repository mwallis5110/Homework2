import React, { useState } from "react";

import { Link } from "react-router-dom";

import Dropdown from "../Dropdown/Dropdown";

import "./Navbar.css";

export default function TopNavbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div className="navWrapper">
      <Link to="/">
        <button className="navLink" onClick={closeMobileMenu}>
          About Me
        </button>
      </Link>
      <Link to="/projects">
        <button className="navLink" onClick={closeMobileMenu}>
          My Work
        </button>
      </Link>
      <button className="navLink" onClick={closeMobileMenu}>
        <Dropdown className={click ? "contactMenu active" : "contactMenu"} />
      </button>
    </div>
  );
}
