import React, { Component } from "react";
import SwitchView from "./SwitchView.js";
import "./switch.styles.css";

class Switch extends Component {
  state = {
    on: false
  };

  handleClick = () => this.setState({ on: !this.state.on });

  render() {
    return <SwitchView on={this.state.on} handleClick={this.handleClick} />;
  }
}
export default Switch;
