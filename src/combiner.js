import { writeFileSync } from 'node:fs';
import copyrate from './copyrate.js';
import addtofile from './addtofile.js';
import validator from './validator.js';
import isEmpty from './empty.js';
import exsist from './exsist.js';

export default (resultFilePath, filePaths, separator = '\n\n\n', exclutions = []) => {
  validator(filePaths, [resultFilePath, ...exclutions]).map((file) => {
    if (!exsist(resultFilePath) || isEmpty(resultFilePath)) {
      writeFileSync(resultFilePath, copyrate(file));
    } else {
      addtofile(resultFilePath, separator);
      addtofile(resultFilePath, copyrate(file));
    }
    return null;
  });
};
