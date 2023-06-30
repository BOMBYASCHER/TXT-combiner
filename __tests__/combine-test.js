import { readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import combine from '../src/combiner.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const resultFilePath = path.join(__dirname, '..', '__fixtures__', 'testdir', 'testfile-test-combine.txt');

afterAll(() => {
  unlinkSync(resultFilePath);
});

test('Check combine', () => {
  const filePaths1 = ['__fixtures__/file1.txt', '__fixtures__/file2.txt'];
  combine(resultFilePath, filePaths1);

  const data1 = readFileSync(resultFilePath, 'utf-8');
  expect(data1).toEqual('Hello\n\n\nWorld!');

  combine(resultFilePath, ['']);
  expect(readFileSync(resultFilePath, 'utf-8')).toEqual(data1);

  combine(resultFilePath, ['__fixtures__/file4.txt']);
  expect(readFileSync(resultFilePath, 'utf-8')).toEqual(data1);

  writeFileSync(resultFilePath, '');
  combine(resultFilePath, filePaths1, '|');
  expect(readFileSync(resultFilePath, 'utf-8')).toEqual('Hello|World!');
});

test('Combine when file exsist', () => {
  const correctOutput1 = '__fixtures__/correct-output1.txt';

  const filePaths1 = ['__fixtures__/file4.txt', '__fixtures__/file2.txt'];
  combine(resultFilePath, filePaths1);
  expect(readFileSync(resultFilePath, 'utf-8')).toEqual('Hello|World!\n\n\nWorld!');

  const filePaths2 = [
    '__fixtures__/file1.txt',
    '__fixtures__/file2.txt',
    '__fixtures__/file3.txt',
    '__fixtures__/file4.txt',
    '__fixtures__/file5.txt',
  ];
  writeFileSync(resultFilePath, '');
  combine(resultFilePath, filePaths2);
  expect(readFileSync(resultFilePath, 'utf-8')).toEqual(readFileSync(correctOutput1, 'utf-8'));

  combine(resultFilePath, [resultFilePath, '__fixtures__/file4.txt']);
  expect(readFileSync(resultFilePath, 'utf-8')).toEqual(readFileSync(correctOutput1, 'utf-8'));
});
