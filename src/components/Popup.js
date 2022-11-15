import React from "react";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup-welcome">
      <div className="popup-inner-welcome">
        <button
          className="close-btn-welcome"
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
