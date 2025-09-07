import { delay, http, HttpResponse } from 'msw';
import AuthService from './auth-service';
import type { LoginUserDto, LoginUserInfo } from './auth-types';
import { TEST } from '../../lib/mock';

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  // https://mswjs.io/docs/best-practices/typescript/
  http.post<never, LoginUserDto, never>(
    AuthService.PATH_LOGIN,
    async ({ request }) => {
      const { userId, password } = await request.json();

      await delay(500);

      if (userId === TEST.LOGIN_ID_OK && password === TEST.PASSWORD_OK) {
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
  http.get<LoginUserInfo>(AuthService.PATH_ME, async () => {
    return HttpResponse.json({
      userId: TEST.LOGIN_ID_OK,
      userName: TEST.USER_NAME,
      email: TEST.EMAIL,
    });
  }),
];
