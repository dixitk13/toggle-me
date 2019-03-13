const express = require("express");
const router = express.Router();

let count = 0;

router
  .post("/", function(req, res) {
    const { count: newCount } = req.body;

    count = !Number.isNaN(Number(newCount)) ? Math.max(newCount, count) + 1 : 0;

    console.log("POST", count);

    try {
      res.json({
        data: newCount
      });
    } catch (err) {
      res.status(400).send("unable to save!");
    }
  })
  .get("/", function(req, res) {
    count = !Number.isNaN(Number(count)) ? count + 1 : 0;
    console.log("GET", count);
    res.json({ data: count });
  });

module.exports = router;
