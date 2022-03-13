import React, { useState } from "react";

import { AiFillCaretUp } from "react-icons/ai";

import "./ScrollButton.css";

export default function ScrollButton() {
  //"Scroll to top" button for Projects page
  const [visible, setVisible] = useState(false);

  //Makes button visible after scrolling down 300px
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="scrollButtonWrapper">
      <button
        className="icon"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <AiFillCaretUp className="upArrow" />
      </button>
    </div>
  );
}
