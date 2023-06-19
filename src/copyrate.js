import { readFileSync } from 'node:fs';
import buildpath from './buildpath.js';

export default (filePath) => readFileSync(buildpath(filePath), 'utf-8');
