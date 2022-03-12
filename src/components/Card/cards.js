import React from "react";
import {
  JSArray,
  ReactArray,
  RelationalArray,
  NonRelationalArray,
  JavaArray,
} from "../../projectData/projectData";

import "./card.css";

export function JSCard() {
  return JSArray.map((JSProject) => {
    return (
      <div className="card">
        <img className="cardImg" src={JSProject.cardImg} alt="Project" />
        <div className="cardBody">
          <h2 className="cardTitle">{JSProject.cardTitle}</h2>
          <p className="cardDescription">{JSProject.cardDescription}</p>
        </div>
        <div className="linkButtons">
          <p className="projectLink">{JSProject.link}</p>
          <p className="repo">{JSProject.repo}</p>
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
        <div className="linkButtons">
          <button className="projectLink">{ReactProject.link}</button>
          <button className="repo">{ReactProject.repo}</button>
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
        <div className="linkButtons">
          <button className="projectLink">{RelationalProject.link}</button>
          <button className="repo">{RelationalProject.repo}</button>
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
        <div className="linkButtons">
          <button className="projectLink">{NonRelationalProject.link}</button>
          <button className="repo">{NonRelationalProject.repo}</button>
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
        <div className="linkButtons">
          <button className="projectLink">{JavaProject.link}</button>
          <button className="repo">{JavaProject.repo}</button>
        </div>
      </div>
    );
  });
}
