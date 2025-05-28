import { z, ZodObject, ZodTypeAny } from 'zod';

/**
 * 쿼리 파라미터 검증 실패 시 반환되는 오류 객체 인터페이스
 */
interface ValidateQueryError {
  status: number;
  statusText: string;
}

/**
 * 주어진 객체가 ValidateQueryError 인터페이스를 만족하는지 확인하는 타입 가드 함수.
 * @param {object} obj - 검사할 객체
 * @returns {obj is ValidateQueryError} - obj가  ValidateQueryError 타입이면 true, 그렇지 않으면 false
 */
export function isValidateQueryError(obj: object) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'status' in obj &&
    'statusText' in obj
  );
}

/**
 * 쿼리 파라미터 검증 실패 시 오류 메시지를 로깅하고 오류 객체를 반환하는 함수
 *
 * @param {string} [errMsg] - 오류 메시지 (선택 사항)
 * @returns {ValidateQueryError} - 오류 객체
 */
function validateQueryParamError(errMsg?: string): ValidateQueryError {
  if (errMsg) {
    console.error(` Query parameter validation failed:  ${errMsg}`);
  } else {
    console.error(` Query parameter validation failed: URL 파싱 오류`);
  }
  return {
    status: 500,
    statusText: `Query parameter validation failed`,
  };
}

/**
 * URL 쿼리 파라미터를 검증하고, 성공 시 검증된 데이터를 반환, 실패 시 오류 객체를 반환하는 함수
 *
 * @template T - zod 스키마 객체 타입
 * @param {T} schema - zod 스키마 객체
 * @param {string} url - 검증할 URL 문자열
 * @returns {z.infer<T> | ValidateQueryError} - 검증 성공 시 검증된 데이터, 실패 시 오류 객체
 */
export function validateQueryParams<
  T extends ZodObject<Record<string, ZodTypeAny>>,
>(schema: T, url: string): z.infer<T> | ValidateQueryError {
  try {
    const parsedUrl = new URL(url);
    const searchParams = parsedUrl.searchParams;
    const parsedQuery = schema.safeParse(Object.fromEntries(searchParams));

    if (!parsedQuery.success) {
      return validateQueryParamError(parsedQuery.error.message);
    }
    return parsedQuery.data;
  } catch (error) {
    console.error(error);
    return validateQueryParamError();
  }
}
