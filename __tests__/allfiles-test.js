import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import allfiles from '../src/options/allfiles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('Check allfiles', () => {
  const path1 = 'src';
  const absPath1 = path.join(__dirname, '..', 'src');
  const correct1 = [
    'addtofile.js',
    'buildpath.js',
    'combiner.js',
    'copyrate.js',
    'empty.js',
    'exsist.js',
    'validator.js',
  ];
  expect(allfiles(path1)).toEqual(correct1);
  expect(allfiles(absPath1)).toEqual(correct1);

  const path2 = '.';
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
  const absPath2 = path.join(__dirname, '..');
  expect(allfiles(path2)).toEqual(correct2);
  expect(allfiles(absPath2)).toEqual(correct2);
});
