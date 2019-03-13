const express = require("express");
const router = express.Router();

let count = 0;

router
  .post("/", function(req, res) {
    const { count: newCount } = req.body;
    count = newCount + 1;
    console.log("POST", count, req.body);
    try {
      res.json({
        data: newCount
      });
    } catch (err) {
      res.status(400).send("unable to save!");
    }
  })
  .get("/", function(req, res) {
    count++;
    console.log("GET", count);
    res.json({ data: count });
  });

module.exports = router;
