import { cwd } from 'node:process';
import path from 'node:path';

export default (filePath) => path.resolve(cwd(), filePath);
