const setup = require('./test/setup');
module.exports = {
  // globalSetup: setup,
  setupFiles: ['<rootDir>/test/setup'],
  testMatch: ["**/test/**/(*.)test.js"], // test 케이스
  moduleFileExtensions: ["js"], // 테스트 대상
  moduleNameMapper: require("./aliases.config").aliasJest,
  collectCoverageFrom: [
    // code coverage 대상
    "**/webapp/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageDirectory: "<rootDir>/test/coverage" // code coverage 결과 파일 생성 폴더
};
