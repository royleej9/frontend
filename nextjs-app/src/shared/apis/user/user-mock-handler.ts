import { getMockingApiURL } from '@/shared/mock';
import { delay, http, HttpResponse } from 'msw';
import { UserService, userTypes } from '.';

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  http.get<never, userTypes.LoginUserInfoDto, never>(
    getMockingApiURL(UserService.PATH_LOGIN_USER),
    async () => {
      console.log('로그인 사용자 정보 조회');
      await delay(1000);
      return HttpResponse.json({
        email: 'ok@user.com',
        username: 'ok-user',
        role: 0,
      });
    }
  ),
];
