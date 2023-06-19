import exsist from './exsist.js';
import isEmpty from './empty.js';

export default (filePaths, exclutionPaths = []) => filePaths.filter((file) => {
  if (file === '') {
    return false;
  }
  if (exclutionPaths.includes(file)) {
    return false;
  }
  if (exsist(file) && !isEmpty(file)) {
    return true;
  }
  return false;
});
