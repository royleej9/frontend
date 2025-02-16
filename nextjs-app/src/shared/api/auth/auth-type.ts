import { z } from 'zod';
import { LoginSchema } from './auth-schema';

export type LoginDto = z.infer<typeof LoginSchema>;
