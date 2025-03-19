## FSD

- FSD 참고 중 > 조금씩 달라짐......;;;
  https://feature-sliced.design/kr/docs/get-started/tutorial

## 파일 이름

- 전부 소문자로
- '-' 으로 구분
  user-box.ts

/shared/api

- api와 1:1 대응

effect js
https://effect.website/

##

## 디버깅 설정

### 브라우저에서 크롬 개발툴로 디버깅

- https://nextjs-ko.org/docs/pages/building-your-application/configuring/debugging#debugging-on-windows

```bash
# windows에서 'NODE_OPTIONS' is not recognized as an internal or external ... 메세지와 함께 NODE_OPTIONS이 안될때
# cross-env는 사용 중인 플랫폼(Mac, Linux, Windows 포함)에 관계없이 NODE_OPTIONS 환경 변수를 설정하고 장치와 운영 체제 전반에 걸쳐 일관되게 디버깅할 수 있도록 해줍니다.
npm i -D cross-env

# package.json 수정
"scripts": {
  "dev": "cross-env NODE_OPTIONS='--inspect' next dev --turbopack",
```
