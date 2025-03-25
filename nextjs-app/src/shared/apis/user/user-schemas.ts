import { z } from 'zod';
import { getRoleString } from './user-types';

/** 로그인한 계정의 정보 */
export const LoginUserInfoDtoSchema = z
  .object({
    email: z.string(),
    username: z.string(),
    role: z.number(),
  })
  .transform((data) => ({ ...data, roleName: getRoleString(data.role) }));
