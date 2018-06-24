import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import register from "./register-service-worker.js";
// import serviceWorker from "./service-worker.js";

import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();

// serviceWorker();
// registerServiceWorker();
// unregister();
// register();

// registerEvents(registration, {
//   onInstalled: () => {
//     console.log("onInstalled");
//   },
//   onUpdateReady: () => {
//     console.log("onUpdateReady");
//   },
//
//   onUpdating: () => {
//     console.log("onUpdating");
//   },
//   onUpdateFailed: () => {
//     console.log("onUpdateFailed");
//   },
//   onUpdated: () => {
//     console.log("onUpdated");
//   }
// });

ReactDOM.render(<App />, document.getElementById("root"));
