import React from "react";
import { Switch } from "@blueprintjs/core";
import "./Toggle.styles.css";

const SwitchView = ({ handleClick, on }) => {
  return (
    <div className="Toggle-view-container">
      <div onClick={handleClick} />
      <Switch checked={on} label="Toggle Me" onChange={handleClick} />

      <div className={`special-text ${on ? "on" : "off"}`}>
        {on ? "I am stupid" : "No I am not"}
      </div>
    </div>
  );
};

export default SwitchView;
