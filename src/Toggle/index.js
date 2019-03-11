import React, { Component } from "react";
import ToggleView from "./ToggleView.js";
import "./toggle.styles.css";

class Toggle extends Component {
  constructor(props) {
    super(props);
    let storeCount = 0;

    if (this.valid()) {
      storeCount = parseInt(localStorage.getItem("count"));
    }

    this.state = {
      count: storeCount
    };
  }

  valid = () =>
    localStorage.getItem("count") &&
    localStorage.getItem("count") !== undefined &&
    !Number.isNaN(Number(localStorage.getItem("count")));

  updateCount = () => {
    let count = 0;
    if (this.valid()) {
      count = parseInt(localStorage.getItem("count"));
    }
    count = count + 1;
    console.log("update count", typeof count, count, this.state);

    this.setState({ count: count }, () => localStorage.setItem("count", count));
  };

  render() {
    const { count } = this.state;
    return <ToggleView count={count} updateCount={this.updateCount} />;
  }
}

export default Toggle;
