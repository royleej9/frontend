import { http } from '@/shared/lib/http';
import { LoginDto } from './auth-type';

export default class AuthService {
  static async login(data: LoginDto) {
    return http.post('/auth/login', data);
  }
}
