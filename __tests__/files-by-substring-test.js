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

  const path2 = allfiles('.');
  const correct2 = [
    '.eslintignore',
    '.eslintrc.yml',
    '.gitignore',
    '.npmrc',
    'Makefile',
    'README.md',
    'index.js',
    'package-lock.json',
    'package.json',
    'site.html',
  ];
  const absPath2 = allfiles(path.join(__dirname, '..'));
  expect(filesBySubName(path2, '')).toEqual(correct2);
  expect(filesBySubName(absPath2, '')).toEqual(correct2);
  const correct3 = [
    'README.md',
  ];
  expect(filesBySubName(path2, 'A')).toEqual(correct3);
  expect(filesBySubName(absPath2, 'A')).toEqual(correct3);
  const correct4 = [
    '.eslintignore',
    '.eslintrc.yml',
  ];
  expect(filesBySubName(path2, 'lint')).toEqual(correct4);
  expect(filesBySubName(absPath2, 'lint')).toEqual(correct4);
});
