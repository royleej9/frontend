import { authTypes } from '@/shared/apis/auth';
import { getMockingApiURL } from '@/shared/mock';
import { delay, http, HttpResponse } from 'msw';
import AuthService from './auth-service';

const TEST_USER = 'ok@user.com';
const TEST_USER_PW = '1234';
/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  http.post<never, authTypes.LoginUserDto, never>(
    getMockingApiURL(AuthService.PATH_LOGIN),
    async ({ request }) => {
      const { email, password } = await request.json();

      await delay(500);

      if (email === TEST_USER && password === TEST_USER_PW) {
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
