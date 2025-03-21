import { z } from 'zod';
import { LoginSchema } from './auth-schemas';

export type LoginDto = z.infer<typeof LoginSchema>;
