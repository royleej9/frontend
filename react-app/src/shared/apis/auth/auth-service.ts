import { http } from '../../lib/http';
import type { LoginUserDto, LoginUserInfo } from './auth-types';

export default class AuthService {
  /** login */
  static readonly PATH_LOGIN = '/auth/login';
  /** logout */
  static readonly PATH_LOGOUT = '/auth/logout';
  /** login user info */
  static readonly PATH_ME = '/auth/me';

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

  /**
   * 로그인한 사용자 정보 조회
   * @returns
   */
  static async getLoginUserInfo() {
    return http.get<LoginUserInfo>(this.PATH_ME);
  }
}
