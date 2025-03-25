import { http } from '@/shared/lib/http';
import { authTypes } from '.';

export default class AuthService {
  static readonly PATH_LOGIN = '/api/auth/login';
  static readonly PATH_LOGOUT = '/api/auth/logout';

  static async login(data: authTypes.LoginUserDto) {
    return http.post(this.PATH_LOGIN, data);
  }

  static async logout() {
    return http.post(this.PATH_LOGOUT);
  }
}
