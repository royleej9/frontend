import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { mergeLocalesToJson, mergeLocalesToFile } from './merge-locales';

const LOCALES_DIR = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  'public',
  'locales'
);
const OUTPUT_JSON_FILE = 'test_merged.json';

function cleanupTestLocales() {
  const test_file_path = path.resolve(LOCALES_DIR, OUTPUT_JSON_FILE);
  fs.rmSync(test_file_path, { recursive: true, force: true });
}

describe('Locales 언어별 json 파일 병합 테스트', () => {
  beforeAll(() => {
    cleanupTestLocales();
  });

  afterAll(() => {
    cleanupTestLocales();
  });

  it('mergeLocalesToJson: 언어별로 네임스페이스별 json이 병합된다', () => {
    const result = mergeLocalesToJson(LOCALES_DIR);
    expect(result).toHaveProperty('en');
    expect(result).toHaveProperty('ko');
    expect(result.en).toHaveProperty('common');
    expect(result.ko).toHaveProperty('common');
    expect(result.en.common.login).toBe('Login');
    expect(result.ko.common.login).toBe('로그인');
  });

  it('mergeLocalesToFile: 파일로 저장된다', () => {
    mergeLocalesToFile(LOCALES_DIR, OUTPUT_JSON_FILE);
    const result = JSON.parse(
      fs.readFileSync(path.join(LOCALES_DIR, OUTPUT_JSON_FILE), 'utf-8')
    );
    expect(result).toHaveProperty('en');
    expect(result).toHaveProperty('ko');
    expect(result.en).toHaveProperty('common');
    expect(result.ko).toHaveProperty('common');
    expect(result.en.common.login).toBe('Login');
    expect(result.ko.common.login).toBe('로그인');
  });
});
