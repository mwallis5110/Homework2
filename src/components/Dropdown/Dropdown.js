import React, { useState } from "react";

import EmailButton from "../EmailButton/EmailButton";
import Resume from "../../images/Mason_Wallis_Resume.pdf";

import "./Dropdown.css";

export default function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick= () => setClick(!click)

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div className="dropdownWrapper">
      <div className="contactButton">
        <button id="contactLink" onClick={handleClick}>
          Contact Me
        </button>
      </div>
      <div className={click ? "dropMenu-clicked" : "dropMenu"}>
        <ul>
          <li className="contactItem" onClick={closeMobileMenu}>
            <button>
              <a id="linkedin" href="https://www.linkedin.com/in/masonwallis/">
                LinkedIn
              </a>
            </button>
          </li>
          <li className="contactItem" onClick={closeMobileMenu}>
            <button>
              <a id="github" href="https://github.com/mwallis5110">
                Github
              </a>
            </button>
          </li>
          <li className="contactItem" onClick={closeMobileMenu}>
            <button>
              <a id="resume" href={Resume} download>
                My Resumé
              </a>
            </button>
          </li>
          <li className="contactItem" onClick={closeMobileMenu}>
            <EmailButton />
          </li>
        </ul>
      </div>
    </div>
  );
}
