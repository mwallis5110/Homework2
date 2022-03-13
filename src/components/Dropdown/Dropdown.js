import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

import EmailButton from "../EmailButton/EmailButton";
import Resume from "../../images/Mason_Wallis_Resume.pdf";

import "./Dropdown.css";

export default function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    // setTimeout(3300);
    setClick(false);
  };

  const [visible, setVisible] = useState(false);

  return (
    <div className="dropdownWrapper">
      <div className="contactButton" onClick={handleClick}>
        Contact Me <AiFillCaretDown />
      </div>
      <div
        className={click ? "dropMenu-clicked" : "dropMenu"}
        onMouseLeave={closeMobileMenu}
      >
        <ul>
          <li className="contactItem" onClick={closeMobileMenu}>
            <a
              className="dropdownButton"
              href="https://www.linkedin.com/in/masonwallis/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
          <li className="contactItem" onClick={closeMobileMenu}>
            <a
              className="dropdownButton"
              href="https://github.com/mwallis5110"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
          </li>
          <li className="contactItem" onClick={closeMobileMenu}>
            <a className="dropdownButton" href={Resume} download>
              My Resumé
            </a>
          </li>
          <li className="contactItem" onClick={closeMobileMenu}>
            
            <div
              className="emailText"
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
            >
              {visible ? (
                <div className="dropdownButton"><EmailButton /></div>
              ) : (
                <span className="dropdownButton">Email Me</span>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
