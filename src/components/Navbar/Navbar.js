import React, { useState } from "react";

import { Link } from "react-router-dom";

import Dropdown from "../Dropdown/Dropdown";

import "./Navbar.css";

export default function TopNavbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };

  // const onMouseEnter = () => {
  //   if(window.innerWidth < 960) {
  //     setDropdown(false)
  //   } else {
  //     setDropdown(true)
  //   }
  // }

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <div className="navWrapper">
      <Link to="/">
        <button id="link" onClick={closeMobileMenu}>
          About Me
        </button>
      </Link>
      <Link to="/projects">
        <button id="link" onClick={closeMobileMenu}>
          My Work
        </button>
      </Link>
      <button id="link" onClick={closeMobileMenu}>
        <Dropdown className={click ? "contactMenu active" : "contactMenu"} />
      </button>
      {dropdown && <Dropdown />}
    </div>
  );
}
