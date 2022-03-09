import React from "react";

import {
  JSCard,
  ReactCard,
  RelationalCard,
  NonRelationalCard,
  JavaCard,
} from "../../components/Card/cards";

import "./projects.css";

export default function Projects(props) {
  return (
    <div className="projectsWrapper">
      <h1 className="myWork">My Work</h1>
      <p className="topText">
        These are just a few of the many projects I've had the pleasure of
        working on:
      </p>
      <div className="cardWrapper">
        <div className="JSSection">
          <div className="line"></div>
          <h2 className="rowTitle">Javascript</h2>
          <div className="Row">
            <JSCard />
          </div>
        </div>
        <div className="ReactSection">
          <div className="line"></div>
          <h2 className="rowTitle">ReactJS</h2>
          <div className="Row">
            <ReactCard />
          </div>
        </div>
        <div className="RelationalSection">
          <div className="line"></div>

          <h2 className="rowTitle">Relational Database Projects</h2>
          <div className="Row">
            <RelationalCard />
          </div>
        </div>
        <div className="NonRelationalSection">
          <div className="line"></div>

          <h2 className="rowTitle">Non-Relational Database Projects</h2>
          <div className="Row">
            <NonRelationalCard />
          </div>
        </div>
        {/* <div className="JavaSection">
                  <div className="line"></div>

          <h2>Java</h2>
          <div className="Row">
            <JavaCard />
          </div>
        </div> */}
      </div>
    </div>
  );
}
