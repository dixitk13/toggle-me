import React, { Component } from "react";
import ToggleView from "./ToggleView.js";
import "./toggle.styles.css";

import { duration, getCounter, updateCounter } from "./actions";

class Toggle extends Component {
  interval;
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

  setCount = newCount => {
    console.log("update state via API", newCount);
    this.setState(({ count: oldCount }) => ({
      count: Math.max(newCount, oldCount)
    }));
  };

  setError = err => console.log("error", err);

  componentDidMount() {
    let stateRef = this;

    getCounter(this.setCount, this.setError);

    this.interval = setInterval(function() {
      updateCounter(stateRef.state.count);
    }, duration);
  }

  valid = () => {
    return (
      localStorage.getItem("count") &&
      localStorage.getItem("count") !== undefined &&
      !Number.isNaN(Number(localStorage.getItem("count")))
    );
  };

  updateCount = () => {
    let count = 0;
    let localCount = 0;
    if (this.valid()) {
      localCount = parseInt(localStorage.getItem("count"));
    }

    count = Math.max(localCount, count) + 1;

    console.log("update count via toggle ", typeof count, count, this.state);

    this.setState({ count: count }, () => localStorage.setItem("count", count));
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { count } = this.state;
    return <ToggleView count={count} updateCount={this.updateCount} />;
  }
}

export default Toggle;
