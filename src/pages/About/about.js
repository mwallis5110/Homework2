import React from "react";
import Headshot from "../../../src/images/Headshot2.png";

import "./about.css";

export default function About() {
  return (
    <div className="aboutWrapper">
      <h1 className="aboutMe">&lt;Hey There, I'm Mason&gt;</h1>
      <div className="mainContents">
        <img src={Headshot} className="headshot" alt="A pic of me" rounded />
        <div className="aboutText">
          <h4>
            I'm a full-stack web developer with a background in marketing and
            digital advertising.
          </h4>
          <br />
          <br />
          <h4>
            I'm currently searching for a full-stack or software engineering
            role within an established company. As a recent programming bootcamp
            graduate, I'm excited to make meaningful contributions to my team
            starting on day one.
          </h4>
          <br />
          <br />
          <h4>
            I'm also taking on interesting side projects of all sizes. My goal
            is to help you refine your vision and website idea, then craft it to
            your specifications.
          </h4>
        </div>
      </div>
    </div>
  );
}
