import { z } from 'zod';
import { LoginUserInfoDtoSchema } from './user-schemas';

/** 사용자 등급 */
export enum UserRole {
  Admin = 'admin',
  Normal = 'normal',
  Unknown = 'unknown',
}

/**
 * 사용자 등급 숫자 > 문자열
 * @param role
 * @returns
 */
export function getRoleString(role: number): string {
  switch (role) {
    case 0:
      return UserRole.Admin;
    case 1:
      return UserRole.Normal;
    default:
      return UserRole.Unknown;
  }
}

export type LoginUserInfoDto = z.infer<typeof LoginUserInfoDtoSchema>;
