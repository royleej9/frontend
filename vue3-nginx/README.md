# nginx + https + vue3 + Docker

## 작업 순서

- 1. 인증서 생성
- 2. nginx 설정
- 3. dockerfile (nginx + vue3)

---

### 1. 인증서 생성
- openssl 의 genrsa 명령어를 사용하여 비공개 키를 생성한다.
- 생성된 비공개 키를 사용하여 X.509형식의 공개 키 인증서를 생성한다.

#### 1. 비공개 키 생성
``` bash
openssl genrsa -out test-key.pem 4096
```

- rsa 알고리즘을 사용하여 키 생성

-  4096 비트 길이의 RSA 개인 키를 생성

- 2048 / 4096 길이를 사용


#### 2. 공개 키 인증서 생성
``` bash
openssl req -new -x509 -nodes -days 3600 -key test-key.pem -out test-cert.pem
```

- X.509형식의 서명 인증서 생성
- nodes: 인증서에 암호를 추가하지 않을 때 / 보안 취약/ 비추천
- days 3600 : 인증서 유효 기간 3600일 
- key : 생성된 키를 사용하여 인증서를 생성

- X509

  - 공개키 기반의 표준
  - X.509 형식의 인증서 / 공개 키 기반의 인증 시스템에서 사용되는 형식
  - 개인 키에 해당하는 X.509 인증서를 생성

#### 3. 키-인증서 생성

- 비밀키/공개 키 인증서 생성을 함께 실행

``` bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout test-key.pem -out test-cert.pem
```

---

### 2. nginx 설정
- nginx.conf 설정의 http 설정 부분에 80/443 포트 접속에 대한 설정을 추가한다.

- 80번 포트 설정에는 80/http로 접속시 443/https으로 접속되도록 설정한다.

- 443 포트에는 개인키/인증서 경로를 설정한다.

``` conf
http {
    
    ...
    ...

     # 443/https
    server {
      listen 443 ssl;
      server_name localhost;
      root /usr/share/nginx/html;
      index index.html; 

      # 인증서/key 경로
      ssl_certificate /usr/share/nginx/ssl/test-cert.pem;
      ssl_certificate_key /usr/share/nginx/ssl/test-key.pem;
      
      location / {
        # SPA 방식의 사이트에서 화면 새로 고침 할경우 
        try_files $uri $uri/ /index.html;
      }
    }

    # 80
    server {
      listen 80;
      server_name localhost;
      
      location / {
        # 443/https 로 연결
        return 301 https://$host$request_uri;
      }
    }
}
```

---

### 3. dockerfile (nginx + vue3)

- docker의 Multi-stage builds 기능을 사용
  - https://docs.docker.com/build/building/multi-stage/
  - 한개의 Dockerfile에 여러개의 From을 사용하여 이미지를 빌드
  - build stage : vue 빌드
  - production stage : build stage에서 빌드된 vue 결과 파일을 nginx 이미지로 복사하여 이미지 생성

``` bash
# 이미지 생성
docker build -t test/vue-nginx .

# 이미지 실행
docker run -it -p 80:80 -p 443:443 --rm --name app test/vue-nginx

```

- Dockerfile 

``` dockerfile
# build stage
FROM node:lts-alpine as build-stage
# workdir 지정
WORKDIR /app
# 빌드 대상 복사을 workdir로 지정된 위치로 복사
COPY ./app .
# 빌드
RUN npm install & npm run build

#---------------------------------------------------------
# production stage
FROM nginx:stable-alpine as production-stage
# vue3 빌드 결과 폴더 복사
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 기본 인증서 - 변경시 볼륨 마운트
COPY /build_assets/nginx/ssl /usr/share/nginx/ssl
# 기본 설정파일 - 변경시 볼륨 마운트
COPY /build_assets/nginx/nginx.conf /etc/nginx

# 사용 포트
EXPOSE 80 443

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]
```