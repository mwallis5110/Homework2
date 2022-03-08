import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function EmailButton() {
  //State for Tippy tooltip
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div>
      <Tippy
        content={
          <span className="toolTipContent">
            <h4>mwallis5110@gmail.com</h4>
          </span>
        }
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
