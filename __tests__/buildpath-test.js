import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import buildpath from '../src/buildpath.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const correctFilePath1 = path.join(__dirname, '..', '__fixtures__', 'file1.txt');
const correctFilePath2 = path.join(__dirname, '..', '__fixtures__', 'file2.txt');

test('Check buildpath (relative path)', () => {
  const path1 = '__fixtures__/file1.txt';
  const path2 = '__fixtures__/file2.txt';

  expect(buildpath(path1)).toEqual(correctFilePath1);
  expect(buildpath(path2)).toEqual(correctFilePath2);
});

test('Check buildpath (absolute path)', () => {
  const path1 = path.join(__dirname, '..', '__fixtures__', 'file1.txt');
  const path2 = path.join(__dirname, '..', '__fixtures__', 'file2.txt');

  expect(buildpath(path1)).toEqual(correctFilePath1);
  expect(buildpath(path2)).toEqual(correctFilePath2);
});
