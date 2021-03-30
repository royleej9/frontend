const fs = require("fs");
const path = require("path");

exports.readJsonFile = function (dirPath, jsonFileName) {
  const rawdata = fs.readFileSync(path.join(dirPath, jsonFileName));
  return JSON.parse(rawdata);
};
