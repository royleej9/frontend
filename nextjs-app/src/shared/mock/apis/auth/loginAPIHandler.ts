import { AUTH_API } from '@/shared/api/auth/auth-service';
import { delay, http, HttpResponse } from 'msw';

interface LoginParam {
  email: string;
  password: string;
}

export const TEST_URL = 'http://localhost:3000';

function getApiURL(path: string) {
  return TEST_URL + path;
}

const TEST_USER = 'ok@user.com';
const TEST_USER_PW = '1234';
/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  http.post<never, LoginParam, never>(
    getApiURL(AUTH_API.LOGIN),
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
  http.get('http://localhost:3000/auth/login', async () => {
    console.log('test get : http://localhost:3000/auth/login');
    return HttpResponse.json({ status: 200 });
  }),
];
