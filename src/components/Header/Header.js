import React, { useState } from "react";
import TopNavbar from "../Navbar/Navbar";
// import Navigation from "./components/Navigation";
import "./Header.css";

export default function Header() {
  
  return (
    <div className="header">
      <div className="leftSide">
        <h1>Mason Wallis</h1>
        <h3>&lt;Full Stack Developer | Austin, TX&gt;</h3>
      </div>
      <div className="rightSide">
        <TopNavbar />
      </div>
    </div>
  );
}
