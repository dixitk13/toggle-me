const express = require("express");
var sslRedirect = require("heroku-ssl-redirect");

const http = require("http");
const path = require("path");
const os = require("os");

let app = express(sslRedirect());

app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || "8080";
app.set("port", port);

const hostname = os.hostname();

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on ${hostname} @ port ${port}`));
