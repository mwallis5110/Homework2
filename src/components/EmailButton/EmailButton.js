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
        <div className="emailButton">
          <CopyToClipboard
            text={value}
            onCopy={() => setCopied(true)}
           
          >
            <AiOutlineCopy />
          </CopyToClipboard>
        </div>

        <a href="mailto:mwallis5110@gmail.com" className="emailButton">
          <AiOutlineSend />
        </a>
      </div>
    </div>
  );
}
