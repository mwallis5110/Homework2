import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiClipboard } from "react-icons/bi";

export default function EmailButton() {
  //State for Tippy tooltip
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div>
      <Tippy
        content={<h4>mwallis5110@gmail.com</h4>}
        visible={visible}
        onClickOutside={hide}
      >
        <button onMouseEnter={visible ? hide : show}>
          <a id="emailAddress" href="mailto: mwallis5110@gmail.com">
            Email Me
          </a>
        </button>
      </Tippy>
    </div>
  );
}
