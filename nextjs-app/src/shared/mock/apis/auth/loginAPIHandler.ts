import { AuthService, authTypes } from '@/shared/apis/auth';
import { delay, http, HttpResponse } from 'msw';
import { getMockingApiURL } from '../../config';

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
        HttpResponse.json();
        return HttpResponse.json({ status: 200 });
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
