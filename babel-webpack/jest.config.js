module.exports = {
  verbose: true,
  testMatch: ["**/src/**/(*.)test.js"], // test 케이스
  moduleFileExtensions: ["js"], // 테스트 대상
  collectCoverageFrom: [
    // code coverage 대상
    "**/src/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageDirectory: "<rootDir>/test/coverage" // code coverage 결과 파일 생성 폴더
};
