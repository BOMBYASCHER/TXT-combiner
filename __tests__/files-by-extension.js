import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import filesByExtension from '../src/options/files-by-extension.js';
import allfiles from '../src/options/allfiles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('Check files-by-substring', () => {
  const path1 = allfiles('src');
  const absPath1 = allfiles(path.join(__dirname, '..', 'src'));
  const correct1 = [
    'addtofile.js',
    'buildpath.js',
    'combiner.js',
    'copyrate.js',
    'empty.js',
    'exsist.js',
    'validator.js',
  ];
  expect(filesByExtension(path1, 'js')).toEqual(correct1);
  expect(filesByExtension(absPath1, 'js')).toEqual(correct1);

  const path2 = allfiles('__fixtures__');
  const correct2 = [
    'correct-output1.txt',
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];
  const absPath2 = allfiles(path.join(__dirname, '..', '__fixtures__'));
  expect(filesByExtension(path2, 'txt')).toEqual(correct2);
  expect(filesByExtension(absPath2, 'txt')).toEqual(correct2);
  const correct3 = [];
  expect(filesByExtension(path1, '.')).toEqual(correct3);
  expect(filesByExtension(absPath1, '.')).toEqual(correct3);
  expect(filesByExtension(path2, 'A')).toEqual(correct3);
  expect(filesByExtension(absPath2, 'A')).toEqual(correct3);
});
