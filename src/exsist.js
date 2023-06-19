import { accessSync, constants } from 'node:fs';
import buildpath from './buildpath.js';

export default (file) => {
  try {
    accessSync(buildpath(file), constants.F_OK);
    return true;
  } catch {
    return false;
  }
};
