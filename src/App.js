import React, { Component, Fragment } from "react";
import "./App.css";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import Toggle from "./Toggle";

class App extends Component {
  render() {
    return (
      <Fragment>
        <button className="my-prompt">Add to Home Screen</button>
        <div className="app">
          <div className="app-header">Welcome to the Toggle Me App</div>
          <div className="container">
            <Toggle />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
