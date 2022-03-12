import React from "react";

import ProjectsNav from "../../components/ProjectsNav/ProjectsNav";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import {
  JSCard,
  ReactCard,
  RelationalCard,
  NonRelationalCard,
  JavaCard,
} from "../../components/Card/cards";

import "./projects.css";

export default function Projects() {
  return (
    <div className="projectsWrapper">
      <h1 className="myWork">My Work</h1>
      <p className="topText">
        These are just a few of the many projects I've had the pleasure of
        working on
      </p>
      <div className="cardWrapper">
        <ScrollButton />
        <div className="JSSection">
          <div className="line"></div>
          <ProjectsNav />
          <h2 className="rowTitle" id="jsId">
            Javascript
          </h2>
          <div className="Row">
            <JSCard />
          </div>
        </div>
        <div className="ReactSection">
          <div className="line"></div>
          <h2 className="rowTitle" id="reactId">
            ReactJS
          </h2>
          <div className="Row">
            <ReactCard />
          </div>
        </div>
        <div className="RelationalSection">
          <div className="line"></div>
          <h2 className="rowTitle" id="relationalId">
            Relational Database Projects
          </h2>
          <div className="Row">
            <RelationalCard />
          </div>
        </div>
        <div className="NonRelationalSection">
          <div className="line"></div>
          <h2 className="rowTitle" id="nonrelationalId">
            Non-Relational Database Projects
          </h2>
          <div className="Row">
            <NonRelationalCard />
          </div>
        </div>
        <div className="JavaSection">
          <div className="line"></div>
          <h2 className="rowTitle" id="javaId">Java</h2>
          <div className="Row">
            <JavaCard />
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}
