import { z } from 'zod';
import { LoginUserSchema } from './auth-schemas';

export type LoginUserDto = z.infer<typeof LoginUserSchema>;
