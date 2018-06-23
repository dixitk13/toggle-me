import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { unregister } from "./registerServiceWorker";
import serviceWorker from "./service-worker.js";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker();
// registerServiceWorker();
// unregister();
