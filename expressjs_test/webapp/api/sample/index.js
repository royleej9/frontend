const express = require("express");
const router = express.Router();
const sampleService = require("@api/sample/sampleService");
const logger = require("@/logger")("app");

// function init(app) {
//   app.use("/api/sample", router);
// }
module.exports.requestURI = "/api/sample";

router.get("/datas", (req, res, next) => {
  logger.info("/sample/datas");
  const data = sampleService.getSampleDatas();
  res.json(data);
});

// module.exports.init = init;
module.exports.router = router;
// module.exports.init = init;
// module.exports.router = router;
