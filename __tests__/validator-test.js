import validator from '../src/validator.js';

test('Check validator', () => {
  const actual1 = ['__fixtures__/file1.txt'];
  expect(validator(actual1)).toEqual(actual1);
  const actual2 = ['__fixtures__/file1.txt', '__fixtures__/file2.txt'];
  expect(validator(actual2)).toEqual(actual2);
  const actual3 = ['__fixtures__/file1.txt', 'nf6u/.xd', '__fixtures__/file2.txt'];
  expect(validator(actual3)).toEqual(actual2);
  const actual4 = ['__fixtures__/file1.txt', '', 'ai45h./og', '__fixtures__/file2.txt'];
  expect(validator(actual4)).toEqual(actual2);
});
