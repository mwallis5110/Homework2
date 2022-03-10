import React from "react";
import TopNavbar from "../Navbar/Navbar";
import "./Header.css";

export default function Header() {
  
  return (
    <div className="header">
      <div className="leftSide">
        <h1>Mason Wallis</h1>
        <h3 className="subheader">&lt;Full Stack Developer | Austin, TX&gt;</h3>
      </div>
      <div className="rightSide">
        <TopNavbar />
      </div>
    </div>
  );
}
