import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function EmailButton() {
  //State for Tippy tooltip
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const [showEmail,setShowEmail] = useState("");

  return (
    <div>
      {/* <Tippy
        content={
          <span className="toolTipContent">
            <h4>mwallis5110@gmail.com</h4>
          </span>
        }
        visible={visible}
        onMouseEnter={show}
      > */}
      <a href="mailto: mwallis5110@gmail.com">Email Me</a>
        {/* <div onMouseEnter={visible ? hide : show} onMouseLeave={hide}>
          
        </div> */}
      {/* </Tippy> */}
    </div>
  );
}
