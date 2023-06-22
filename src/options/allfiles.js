import { readdirSync, statSync } from 'node:fs';
import buildpath from '../buildpath.js';

export default (directoryPath = '.') => {
  const content = readdirSync(buildpath(directoryPath));
  return content.filter((elem) => statSync(buildpath(directoryPath, elem)).isFile());
};
