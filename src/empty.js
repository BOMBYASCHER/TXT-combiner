import { statSync } from 'node:fs';
import buildpath from './buildpath.js';

export default (file) => statSync(buildpath(file)).size === 0;
