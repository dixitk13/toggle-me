import React, { Component } from "react";
import "./App.css";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import Switch from "./Switch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Switch />
        </div>
      </div>
    );
  }
}

export default App;
