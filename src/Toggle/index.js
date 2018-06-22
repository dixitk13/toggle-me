import React, { Component } from "react";
import ToggleView from "./ToggleView.js";
import "./Toggle.styles.css";

class Toggle extends Component {
  state = {
    on: false
  };

  handleClick = () => this.setState({ on: !this.state.on });

  render() {
    return <ToggleView on={this.state.on} handleClick={this.handleClick} />;
  }
}
export default Toggle;
