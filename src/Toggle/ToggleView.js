import React from "react";
import { Switch } from "@blueprintjs/core";
import "./toggle.styles.css";

const ToggleView = ({ handleClick, on }) => {
  return (
    <div className="toggle-view-container">
      <div onClick={handleClick} />
      <Switch checked={on} label="Toggle Me" onChange={handleClick} />

      <div className={`special-text ${on ? "on" : "off"}`}>
        {on ? "I am stupid" : "No I am not"}
      </div>
    </div>
  );
};

export default ToggleView;
