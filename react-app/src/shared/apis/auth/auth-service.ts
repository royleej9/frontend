import { http } from '../../lib/http';
import type { LoginUserDto } from './auth-types';

export default class AuthService {
  static readonly PATH_LOGIN = '/auth/login';
  static readonly PATH_LOGOUT = '/auth/logout';

  /**
   * login
   * @param {LoginUserDto} data
   * @returns
   */
  static async login(data: LoginUserDto) {
    return http.post(this.PATH_LOGIN, data);
  }

  /**
   * logout
   * @returns
   */
  static async logout() {
    return http.post(this.PATH_LOGOUT);
  }
}
