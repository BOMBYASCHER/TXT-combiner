import { readFile, writeFile, unlink } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import combine from '../src/combiner.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const resultFilePath = path.join(__dirname, '..', '__fixtures__', 'testfile-test-combine.txt');

afterAll(() => {
  unlink(resultFilePath, (err) => err);
});

test('Check combine', async () => {
  const filePaths1 = ['__fixtures__/file1.txt', '__fixtures__/file2.txt'];
  combine(resultFilePath, filePaths1);

  const data1 = readFile(resultFilePath, 'utf-8', () => null);
  expect(data1).toEqual('Hello\n\n\nWorld!');

  combine(resultFilePath, ['']);
  expect(readFile(resultFilePath, 'utf-8', () => null)).toEqual(data1);

  combine(resultFilePath, ['__fixtures__/file4.txt']);
  expect(readFile(resultFilePath, 'utf-8', () => null)).toEqual(data1);

  writeFile(resultFilePath, '', () => null);
  combine(resultFilePath, filePaths1, '|');
  expect(readFile(resultFilePath, 'utf-8', () => null)).toEqual('Hello|World!');
});
