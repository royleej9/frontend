import { z } from 'zod';
import { SampleDtoSchema, SampleParamSchema } from './sample-schemas';

export type SampleParam = z.infer<typeof SampleParamSchema>;
export type SampleDto = z.infer<typeof SampleDtoSchema>;
