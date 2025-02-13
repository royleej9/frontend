import { delay, http, HttpResponse } from 'msw';

interface LoginParam {
  email: string;
  password: string;
}

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  http.post<never, LoginParam, never>(
    'http://localhost:3000/auth/login',
    async ({ request }) => {
      const { email, password } = await request.json();

      await delay(2000);

      if (email === 'ok@user.com' && password === '1234') {
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
