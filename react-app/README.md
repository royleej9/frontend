1. 프로젝트 생성

```sh
npm create vite@latest react-app
```

2. eslint 설정
   vite를 통한 프로젝트 생성시 자동 생성되는 README 파일 참고고

```sh
npm i -D eslint-plugin-react-x
```

3. prettier 설정

```sh
npm i -D --save-exact prettier eslint-config-prettier
```

4. Cannot find name 'process'

```sh
npm i -D @types/node
```

5. locatorjs 설정-개발관련 유틸

- 브라우저에서 UI 클릭하여 해당 코드 열기
- https://www.locatorjs.com/install/react-data-id?stack=Vite
  - 2가지 방법 중 위의 방법으로 실행됨

```sh
npm i -D @locator/babel-jsx @locator/runtime
```

6. HMR 적용

- https://ko.vite.dev/config/server-options#server-watch

7. react router

- https://reactrouter.com/
- v6 > v7 :
  - -import { Routes } from "react-router-dom"
  - +import { Routes } from "react-router"

```sh
npm i react-router
```

8. vitest 추가

- https://testing-playground.com/

```sh
npm i -D vitest @vitest/coverage-v8 jsdom
npm i -D @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

9. i18next 추가

- 브라우저 언어 자동 선택, 로컬 스토리지 저장 (key: lang)
  - i18next-browser-languagedetector
  - https://github.com/i18next/i18next-browser-languageDetector?tab=readme-ov-file

```sh
npm i react-i18next i18next i18next-http-backend i18next-browser-languagedetector
```

10. axios

```sh
npm i -d axios
```

11. msw

- 타입스크립트를 사용하여 mock handler 작성시 참고
  - https://mswjs.io/docs/best-practices/typescript/

```sh
npm i -d msw
npx msw init ./public --save
```

12. 빌드 결과물 코드 / 라이브러리 사용량 분석 플러그인

- https://www.npmjs.com/package/rollup-plugin-visualizer

```sh
npm i -D rollup-plugin-visualizer
```

## 참고

- FSD 구조 샘플
  https://github.com/yurisldk/realworld-react-fsd

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
