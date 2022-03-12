import React from "react";
import Headshot from "../../../src/images/Headshot2.png";

import "./about.css";

export default function About() {
  return (
    <div className="aboutWrapper">
      <h1 className="aboutMe">&lt;Hey There, I'm Mason&gt;</h1>
      <div>
        <img src={Headshot} className="headshot" alt="A pic of me" rounded />
        <h5 className="aboutText">
          I'm a full-stack web developer with a background in marketing and
          digital advertising.
        </h5>
        <p>
          My goal is to help you refine your vision and website idea, then craft
          it to your specifications.
        </p>
        <h5>
          I'm currently searching for an entry-level role within an established
          company.
        </h5>
        <p>
          As a recent coding bootcamp graduate, I'm excited to make meaningful
          contributions to my team starting on day one.
        </p>
        <p>
          I'm also taking on entry-level projects to build up my resumé. I'm
          well-versed in the MERN stack, and fluent in HTML5, CSS3, Javascript,
          React, Bootstrap, Express.js, NodeJS, MongoDB, SQL, MySQL, NoSQL and
          GraphQL.
        </p>
      </div>
    </div>
  );
}
