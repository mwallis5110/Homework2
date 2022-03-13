import React, { useState } from "react";
import { AiOutlineCopy, AiOutlineSend } from "react-icons/ai";

import { CopyToClipboard } from "react-copy-to-clipboard";

import "./EmailButton.css";

export default function EmailButton() {
  const value = "mwallis5110@gmail.com";
  const [copied, setCopied] = useState("");

  return (
    <div className="buttonWrapper">
      <span>mwallis5110@gmail.com</span>
      <div className="copyButton">
        <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
          <AiOutlineCopy />
        </CopyToClipboard>

        {copied ? <span>Copied!</span> : null}
      </div>
    </div>
  );
}
