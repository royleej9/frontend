# aliases

- 설정 파일: aliases.config.js
- 축약어를 사용하여 import 구문에 대한 패스 경로를 줄일 수 있음
- jsconfig.json 을 자동 생성하여 vscode에서 자동 완성 기능을 사용 가능

## 사용 예

```js
// before
import HelloWorld from '@/libs/components/HelloWorld.vue';

// after
import HelloWorld from '@components/HelloWorld.vue';
```

## 명령어

- 다음 명령어를 사용하여 jsconfig.json 파일을 생성하거나, 빌드 또는 테스트 서버를 실행하여도 자동으로 생성됨
- 자동 완성 기능이 되지 않을 경우 vscode 재시작이 필요함

```bash
// jsconfig.json 파일 생성
npm run aliases
```

## 설정

```js
// aliases.config.js
const aliases = {
  '@': 'src',
  '@libs': 'src/libs',
  '@components': 'src/libs/components',
  '@directives': 'src/libs/directives',
  '@mixins': 'src/libs/mixins',
  '@utils': 'src/libs/utils',
  '@router': 'src/router',
  '@store': 'src/store',
  '@views': 'src/views',
};
```
