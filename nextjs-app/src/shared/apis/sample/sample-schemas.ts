import { isNumber } from 'es-toolkit/compat';
import { z } from 'zod';

// export const SampleParamSchema = z.object({
//   param1: z.string().optional(),
//   isDelay: z.boolean().optional(),
// });

export const SampleParamSchema = z.object({
  paramStr: z.string().optional(),
  paramNum: z
    .string()
    .optional()
    .transform((val) => (isNumber(val) ? parseInt(val) : 0)),
  isDelay: z
    .string()
    .optional()
    .transform((val) => val === 'true'),
});

export const SampleDtoSchema = z.object({
  colId: z.string(),
  colStr: z.string(),
  colNum: z.number(),
  colBool: z.boolean(),
});
