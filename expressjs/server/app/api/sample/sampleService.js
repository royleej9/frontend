const fileReader = require("@utils/fileReader");

const sampleService = {
  getSampleDatas() {
    return fileReader.readJsonFile(__dirname, "table-datas.json");
  }
};

module.exports = sampleService;
