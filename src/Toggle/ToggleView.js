import React, { useState } from "react";
import { Switch } from "@blueprintjs/core";
import "./toggle.styles.css";

const ToggleView = ({ updateCount, count }) => {
  const [on, setOn] = useState(true);
  const toggleOn = () => {
    updateCount();
    setOn(!on);
  };

  return (
    <div className="toggle-view-container">
      <div className="toggle-count">{count}</div>
      <Switch checked={on} label="Toggle Me" onChange={toggleOn} />
      <div className={`special-text ${on ? "on" : "off"}`}>
        {on ? "I am stupid" : "No I am not"}
      </div>
    </div>
  );
};

export default ToggleView;
