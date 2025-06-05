import { delay, http, HttpResponse } from 'msw';
import AuthService from './auth-service';
import type { LoginUserDto } from './auth-types';
import { TEST_CONSTS } from '../../lib/mock';

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  // https://mswjs.io/docs/best-practices/typescript/
  http.post<never, LoginUserDto, never>(
    AuthService.PATH_LOGIN,
    async ({ request }) => {
      const { userId, password } = await request.json();

      await delay(500);

      if (
        userId === TEST_CONSTS.LOGIN_ID_OK &&
        password === TEST_CONSTS.PASSWORD_OK
      ) {
        console.log('인증 성공');
        const sessionId = 'test-mock-123abc';
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 30);

        // brower에서 호출하는 api HttpOnly 적용 안됨
        const sessionCookie = `session=${sessionId}; Expires=${expirationDate.toUTCString()}; Secure; SameSite=Strict HttpOnly`;

        return new HttpResponse(null, {
          status: 200,
          headers: { 'Set-Cookie': sessionCookie },
        });
      } else {
        return HttpResponse.json(
          { error_code: 'unauthorized' },
          { status: 401 }
        );
      }
    }
  ),
  // http.get('http://localhost:3000/auth/login', async () => {
  //   console.log('test get : http://localhost:3000/auth/login');
  //   return HttpResponse.json({ status: 200 });
  // }),
];
