# docker build -t test/vue-nginx .
# docker run -it -p 80:80 -p 443:443 --rm --name app test/vue-nginx

# build stage
FROM node:lts-alpine as build-stage
# workdir 지정
WORKDIR /app
# 빌드 대상 복사을 workdir로 지정된 위치로 복사
COPY ./app .
# 빌드
RUN npm install
RUN npm run build

#---------------------------------------------------------
# production stage
FROM nginx:stable-alpine as production-stage
# vue3 빌드 결과 폴더 복사
COPY --from=build-stage /app/dist /usr/share/nginx/ht

# 기본 인증서 - 변경시 볼륨 마운트
COPY /build_assets/nginx/ssl /usr/share/nginx/ssl
# 기본 설정파일 - 변경시 볼륨 마운트
COPY /build_assets/nginx/nginx.conf /etc/nginx

# 사용 포트
EXPOSE 80 443

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]
