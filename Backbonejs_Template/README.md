Backbonejs_Template
===================

 http://momoyaya.tistory.com/18

####Backbonejs 기본 템플릿 
	Backbonejs 기본 라이브러리와 build.js 파일 추가

####참고 사이트 
 Backbonejs : http://backbonejs.org/
 jQuery : http://jquery.com/
 underscorejs : http://underscorejs.org/
 testjs : https://github.com/requirejs/text
 json2 : https://github.com/douglascrockford/JSON-js/blob/master/json2.js

build 생성 : http://tech.pro/blog/1639/using-rjs-to-optimize-your-requirejs-project

####기본 환경
1. eclipse 툴에서 Dynamic Web Project를 사용하여 생성함
2. 서로 다른 개발 환경에서 사용 할 때는 WebContent 폴더의 js 폴더와 index.html 파일만 각자의 개발 서버 루트 폴더에 복사 후 사용

####빌드 옵션
  1. backbonejs, jquery, text, underscore 파일을 libs.js 파일 하나에 최적화 
  2. css 파일 최적화 

####사용 라이브러리

  Backbonejs 관련
```
    - Backbone 1.1.0
    - jquery 1.10.2
    - text 2.0.10
    - underscore 1.5.2
    - json2   2013-05-26
```

   빌드 관련
```
	- r.js 2.1.9
```

####빌드 방법
  1. node.js 설치
  2. require.js 설치
  	```
     - npm install -g requirejs
	```
  3. nodejs 도스창 실행
  4. /Backbonejs_Template/WebContent/js/build 폴더로 이동
  5. node r.js -o build.js  실행
  
####문제점
  최적화된 main 파일에 html 템플릿 내용이 포함되지만
  build 결과 dist 폴더에 html 템플릿 파일이 삭제되지 않고 존재함.
  설정 옵션 찾는 중...;;;
