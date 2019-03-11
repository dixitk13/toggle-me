const express = require("express");

const http = require("http");
const path = require("path");
const os = require("os");

let app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use((req, res, next) => {
  if (req.header("x-forwarded-proto") !== "https") {
    res.redirect(`https://${req.header("host")}${req.url}`);
  } else {
    next();
  }
});
const port = process.env.PORT || "8080";
app.set("port", port);

const hostname = os.hostname();

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on ${hostname} @ port ${port}`));
