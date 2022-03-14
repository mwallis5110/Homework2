import React from "react";
import {
  JSArray,
  ReactArray,
  RelationalArray,
  NonRelationalArray,
  JavaArray,
} from "../../projectData/projectData";

import "./card.css";

//Each separate array is imported from projectData.js, and the data is rendered as individual cards
export function JSCard() {
  return JSArray.map((JSProject) => {
    return (
      <div className="card">
        <img className="cardImg" src={JSProject.cardImg} alt="Project" />
        <div className="cardBody">
          <h2 className="cardTitle">{JSProject.cardTitle}</h2>
          <p className="cardDescription">{JSProject.cardDescription}</p>
        </div>
        <div className="cardButtons">
          <a href={JSProject.link} className="projectLink">
            Deployed Project
          </a>
          <a href={JSProject.repo} className="repo">Code Repository</a>
        </div>
      </div>
    );
  });
}

export function ReactCard() {
  return ReactArray.map((ReactProject) => {
    return (
      <div className="card">
        <img className="cardImg" src={ReactProject.cardImg} alt="Project" />
        <div className="cardBody">
          <h2 className="cardTitle">{ReactProject.cardTitle}</h2>
          <p className="cardDescription">{ReactProject.cardDescription}</p>
        </div>
        <div className="cardButtons">
          <a
            href={ReactProject.link}
            target="_blank"
            rel="noreferrer noopener"
            className="projectLink"
          >
            Deployed Project
          </a>

          <a
            href={ReactProject.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="repo"
          >
            Code Repository
          </a>
        </div>
      </div>
    );
  });
}

export function RelationalCard() {
  return RelationalArray.map((RelationalProject) => {
    return (
      <div className="card">
        <img
          className="cardImg"
          src={RelationalProject.cardImg}
          alt="Project"
        />
        <div className="cardBody">
          <h2 className="cardTitle">{RelationalProject.cardTitle}</h2>
          <p className="cardDescription">{RelationalProject.cardDescription}</p>
        </div>
        <div className="cardButtons">
          <a
            href={RelationalProject.link}
            target="_blank"
            rel="noreferrer noopener"
            className="projectLink"
          >
            Deployed Project
          </a>
          <a
            href={RelationalProject.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="repo"
          >
            Code Repository
          </a>
        </div>
      </div>
    );
  });
}

export function NonRelationalCard() {
  return NonRelationalArray.map((NonRelationalProject) => {
    return (
      <div className="card">
        <img
          className="cardImg"
          src={NonRelationalProject.cardImg}
          alt="Project"
        />
        <div className="cardBody">
          <h2 className="cardTitle">{NonRelationalProject.cardTitle}</h2>
          <p className="cardDescription">
            {NonRelationalProject.cardDescription}
          </p>
        </div>
        <div className="cardButtons">
          <a
            href={NonRelationalProject.link}
            target="_blank"
            rel="noreferrer noopener"
            className="projectLink"
          >
            Deployed Project
          </a>
          <a
            href={NonRelationalProject.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="repo"
          >
            Code Repository
          </a>
        </div>
      </div>
    );
  });
}

export function JavaCard() {
  return JavaArray.map((JavaProject) => {
    return (
      <div className="card">
        <img className="cardImg" src={JavaProject.cardImg} alt="Project" />
        <div className="cardBody">
          <h2 className="cardTitle">{JavaProject.cardTitle}</h2>
          <p className="cardDescription">{JavaProject.cardDescription}</p>
        </div>
        <div className="cardButtons">
          <a
            href={JavaProject.link}
            target="_blank"
            rel="noreferrer noopener"
            className="projectLink"
          >
            Deployed Project
          </a>
          <a
            href={JavaProject.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="repo"
          >
            Code Repository
          </a>
        </div>
      </div>
    );
  });
}
