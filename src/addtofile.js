import { appendFileSync } from 'node:fs';
import buildpath from './buildpath.js';

export default (filePath, data) => appendFileSync(buildpath(filePath), data);
