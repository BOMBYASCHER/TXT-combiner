import { cwd } from 'node:process';
import { resolve } from 'node:path';

export default (...filePath) => resolve(cwd(), ...filePath);
