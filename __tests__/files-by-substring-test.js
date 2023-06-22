import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import filesBySubName from '../src/options/files-by-substring.js';
import allfiles from '../src/options/allfiles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('Check files-by-substring', () => {
  const path1 = allfiles('src');
  const absPath1 = allfiles(path.join(__dirname, '..', 'src'));
  const correct1 = [
    'addtofile.js',
    'buildpath.js',
    'copyrate.js',
    'validator.js',
  ];
  expect(filesBySubName(path1, 'a')).toEqual(correct1);
  expect(filesBySubName(absPath1, 'a')).toEqual(correct1);

  const path2 = allfiles('__fixtures__');
  const correct2 = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];
  const absPath2 = allfiles(path.join(__dirname, '..', '__fixtures__'));
  expect(filesBySubName(path2, 'ile')).toEqual(correct2);
  expect(filesBySubName(absPath2, 'f')).toEqual(correct2);
  const correct3 = [];
  expect(filesBySubName(path2, 'A')).toEqual(correct3);
  expect(filesBySubName(absPath2, 'A')).toEqual(correct3);
});
