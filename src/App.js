import React, { Component, Fragment } from "react";
import "./App.css";

import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

import "../node_modules/normalize.css/normalize.css";

import Toggle from "./Toggle";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="app">
          <button className="my-prompt">Add to Home Screen</button>
          <div className="app-header">Welcome to the Toggle Me App</div>
          <div className="app-container">
            <Toggle />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
