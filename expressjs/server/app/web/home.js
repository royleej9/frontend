var express = require("express");
var router = express.Router();

module.exports.requestURI = "/";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports.router = router;
