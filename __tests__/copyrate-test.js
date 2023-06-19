import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import copyrate from '../src/copyrate.js';

test('Check copyrate', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const actual1 = 'Hello';

  expect(copyrate('__fixtures__/file1.txt')).toEqual(actual1);

  const actual2 = '';

  expect(copyrate('__fixtures__/file4.txt')).toEqual(actual2);

  const actual3 = 'Does\nit\nwork?';
  const filePath = path.join(__dirname, '..', '__fixtures__', 'file5.txt');

  expect(copyrate(filePath)).toEqual(actual3);
});
