const express = require("express");

const http = require("http");
const path = require("path");
var bodyParser = require("body-parser");
const os = require("os");
const CountRoute = require("./counter");

let app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

app.use("/api/count", CountRoute);

const port = "4000";
app.set("port", port);

const hostname = os.hostname();

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on ${hostname} @ port ${port}`));
