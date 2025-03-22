import { z } from 'zod';

export const LoginUserSchema = z.object({
  email: z.string().email({ message: '잘 못된 이메일 입니다.' }),
  password: z.string().min(1, { message: '필수 입력입니다.' }),
});
