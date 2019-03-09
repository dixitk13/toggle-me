import React, { Component } from "react";
import "./App.css";

import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

import "../node_modules/normalize.css/normalize.css";

import Toggle from "./Toggle";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">Welcome to the Toggle Me App</div>
        <div className="container">
          <Toggle />
        </div>
      </div>
    );
  }
}

export default App;
