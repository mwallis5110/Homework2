import React from "react";
import Chef from "../../../src/images/sous-chef.PNG";
import Fitness from "../../../src/images/fitness_tracker.PNG";
import Employee from "../../../src/images/employee_tracker.gif";
import Note from "../../../src/images/note_taker.gif";
import Nphase from "../../../src/images/nphase3.png";
import Pet from "../../../src/images/pet-seeker.PNG";
import PortfolioGen from "../../../src/images/portfolioGenerator.PNG";

import "./projects.css";

export default function Projects(props) {
  return (
    <div className="projectsWrapper">
      <h1 className="myWork">My Work</h1>
      <p className="topText">
        These are just a few of the many projects I've had the pleasure of
        working on:
      </p>
      <div className="cardWRapper">
        <div className="card">
          <img className="cardImg" src="" alt=""/>
          <div className="cardBody">
            <h2 className="cardTitle"></h2>
            <p className="cardDescription"></p>
            <button className="link"></button>
            <button className="repo"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
