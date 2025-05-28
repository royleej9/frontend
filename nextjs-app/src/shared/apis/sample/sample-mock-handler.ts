import { getMockingApiURL, mockHelper } from '@/shared/mock';
import { delay, http, HttpResponse } from 'msw';
import { sampleSchemas, SampleService, sampleTypes } from '.';

const URL_SAMPLE = getMockingApiURL(SampleService.PATH_SAMPLE);
/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  http.get<{ id: string }, never, sampleTypes.SampleDto>(
    URL_SAMPLE,
    async ({ request, params }) => {
      const validatedQuery = mockHelper.validateQueryParams(
        sampleSchemas.SampleParamSchema,
        request.url
      );

      // query param 변환 성공 체크
      if (mockHelper.isValidateQueryError(validatedQuery)) {
        return new HttpResponse(null, validatedQuery);
      }

      if (validatedQuery.isDelay) await delay(1000);

      return HttpResponse.json({
        colId: params.id,
        colStr: validatedQuery?.paramStr ?? 'None',
        colNum: validatedQuery?.paramNum ?? 0,
        colBool: validatedQuery.isDelay,
      });
    }
  ),
];
