import { http } from '@/shared/lib/http';
import { LoginDto } from './auth-types';

export enum AUTH_API {
  LOGIN = '/api/auth/login',
}

export class AuthService {
  static async login(data: LoginDto) {
    return http.post(AUTH_API.LOGIN, data);
  }
}
