import React from "react";
import EmailButton from "../EmailButton/EmailButton";

import Resume from "../../images/Mason_Wallis_Resume.pdf"

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <h2 className="contactMe">Contact Me</h2>
      <div className="contactLinks">
        <div className="linkedInLink">
          <button>
            <a id="linkedin" href="https://www.linkedin.com/in/masonwallis/">
              LinkedIn
            </a>
          </button>
        </div>
        <div>
          <button>
            <a id="github" href="https://github.com/mwallis5110">
              Github
            </a>
          </button>
        </div>
        <div>
          <button>
            <a id="resume" href={Resume} download>
              My Resumé
            </a>
          </button>
        </div>
        <div><EmailButton /></div>
      </div>
    </footer>
  );
}
