const express = require("express");
var enforce = require("express-sslify");

const http = require("http");
const path = require("path");
const os = require("os");

let app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

const port = process.env.PORT || "8080";
app.set("port", port);

const hostname = os.hostname();

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on ${hostname} @ port ${port}`));
