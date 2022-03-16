import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

import "./ProjectsNav.css";

export default function ProjectsNav() {
  return (
    <ul className="scrollToProject">
      <li
        className="cardsRow"
        onClick={() => {
          const anchor = document.querySelector("#jsId");
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Javascript
        <AiFillCaretDown />
      </li>
      <li
        className="cardsRow"
        onClick={() => {
          const anchor = document.querySelector("#reactId");
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        React
        <AiFillCaretDown />
      </li>
      <li
        className="cardsRow"
        onClick={() => {
          const anchor = document.querySelector("#relationalId");
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Relational DB Projects
        <AiFillCaretDown />
      </li>
      <li
        className="cardsRow"
        onClick={() => {
          const anchor = document.querySelector("#nonrelationalId");
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Nonrelational DB Projects
        <AiFillCaretDown />
      </li>
      {/* <li
        className="cardsRow"
        onClick={() => {
          const anchor = document.querySelector("#javaId");
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Java
        <AiFillCaretDown />
      </li> */}
    </ul>
  );
}
