import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import addtofile from '../src/addtofile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, '..', '__fixtures__', 'testdir', 'testfile-test-addtofile.txt');

afterAll(() => {
  unlinkSync(filePath);
});

test('Check addtofile', () => {
  writeFileSync(filePath, '');

  expect(readFileSync(filePath, 'utf-8')).toEqual('');

  addtofile(filePath, 'Hello');

  expect(readFileSync(filePath, 'utf-8')).toEqual('Hello');

  addtofile(filePath, 'World!');

  expect(readFileSync(filePath, 'utf-8')).toEqual('HelloWorld!');
});
