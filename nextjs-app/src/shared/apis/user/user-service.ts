import { http } from '@/shared/lib/http';

export class UserService {
  static readonly PATH_LOGIN_USER = '/api/user/login-user';

  static async getLoginUserInfo() {
    return http.get(this.PATH_LOGIN_USER);
  }
}
