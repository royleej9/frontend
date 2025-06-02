import * as fs from 'fs';
import * as path from 'path';

/**
 * locales 디렉토리 체크
 * @param localesDir locales 폴더 경로
 * @returns
 */
function checkDir(localesDir: string) {
  // 1. 경로 체크
  if (!fs.existsSync(localesDir)) {
    console.error(`Error: Path does not exist: '${localesDir}'`);
    return false;
  }

  // 2. 디렉토리 체크
  const stats = fs.statSync(localesDir);
  if (!stats.isDirectory()) {
    console.error(`Error: Path is not a directory: ${localesDir}`);
    return false;
  }

  // 3. locales 폴더 체크
  const lastSegment = path.basename(localesDir);
  if (lastSegment !== 'locales') {
    console.error(
      `Error: Last segment of the path is not 'locales': ${localesDir}`
    );
    return false;
  }

  return true;
}

/**
 * locales 폴더의 여러 다국어 파일을 하나의 json으로 반환환
 * @param localesDir
 * @returns
 */
export function mergeLocalesToJson(localesDir: string) {
  if (!checkDir(localesDir)) {
    throw new Error(`locals 폴더 체크 실패: ${localesDir}`);
    // return;
  }

  const result: Record<string, any> = {};
  // 각 언어 폴더 탐색 (예: en, ko, ja ...)
  fs.readdirSync(localesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .forEach((dirent) => {
      const lang = dirent.name;
      const langDir = path.join(localesDir, lang);
      const langObj: Record<string, any> = {};

      // 해당 언어 폴더 내의 모든 json 파일 병합
      fs.readdirSync(langDir)
        .filter((file) => file.endsWith('.json'))
        .forEach((file) => {
          const ns = path.basename(file, '.json');
          const filePath = path.join(langDir, file);
          const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          langObj[ns] = json;
        });

      result[lang] = langObj;
    });

  return result;
  //
}

/**
 * locales 폴더의 여러 다국어 파일을 하나의 json 파일로 반환
 * @param localesDir - 파일 디렉토리 위치
 */
export function mergeLocalesToFile(localesDir: string, outputFileName: string) {
  const localesJson = mergeLocalesToJson(localesDir);
  const outputFile = path.resolve(localesDir, outputFileName);
  fs.writeFileSync(outputFile, JSON.stringify(localesJson, null, 2), 'utf-8');
}
