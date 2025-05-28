import { http } from '@/shared/lib/http';
import { SampleDto, SampleParam } from './sample-types';

export class SampleService {
  static readonly PATH_SAMPLE = '/api/sample/default/:id';

  static async getSampleDefault(id: string, params: SampleParam) {
    // /api/sample/default?param1=test&isDelay=true
    // /api/sample/default?isDelay=true
    return http.get<SampleDto>(this.PATH_SAMPLE.replace(':id', id), {
      params,
    });
  }
}
