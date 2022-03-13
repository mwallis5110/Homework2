import React, { useState } from "react";
import { AiOutlineCopy, AiOutlineSend } from "react-icons/ai";

import { CopyToClipboard } from "react-copy-to-clipboard";

import "./EmailButton.css";

export default function EmailButton() {
  const value = "mwallis5110@gmail.com";
  const [copied, setCopied] = useState("");

  return (
    <div className="buttonWrapper">
      <p className="emailAddress">mwallis5110@gmail.com</p>
      <div className="buttonsDiv">
        <CopyToClipboard
          text={value}
          onCopy={() => setCopied(true)}
          className="emailButton"
        >
          <AiOutlineCopy className="emailButton" />
        </CopyToClipboard>

        <a href="mailto:mwallis5110@gmail.com" className="emailButton">
          <AiOutlineSend />
        </a>
      </div>
    </div>
  );
}
