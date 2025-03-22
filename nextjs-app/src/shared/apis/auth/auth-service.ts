import { http } from '@/shared/lib/http';
import { authTypes } from '.';

export class AuthService {
  static readonly PATH_LOGIN = '/api/auth/login';

  static async login(data: authTypes.LoginUserDto) {
    return http.post(this.PATH_LOGIN, data);
  }
}
