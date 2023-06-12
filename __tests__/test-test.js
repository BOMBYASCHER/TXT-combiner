import testfunc from '../src/test-file.js';

test('Check', () => {
  expect(testfunc()).toEqual('It works!');
});
