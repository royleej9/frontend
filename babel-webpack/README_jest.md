## 설치

```bash
npm install --save-dev jest
```

# 설정

```bash
// file:  package.json
{
  "scripts": {
    "test": "jest"
  }
}
```

```js
// file: jest.config.js
module.exports = {
  // test 케이스
  testMatch: ["**/src/**/(*.)test.js"],
  // 테스트 대상
  moduleFileExtensions: ["js"],
  collectCoverageFrom: [
    // code coverage 대상
    "**/src/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  // code coverage 결과 파일 생성 폴더
  coverageDirectory: "<rootDir>/test/coverage"
};
```

## VSCode 플러그인

- Jest Runner
  - 테스트 개별 실행/디버깅 가능
  - Context-Menu 기능 제공
