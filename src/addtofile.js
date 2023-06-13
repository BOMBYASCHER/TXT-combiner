import { appendFile } from 'node:fs';
import buildpath from './buildpath';

export default (filePath, data) => {
  appendFile('message.txt', 'data to append', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
};

/**
 * "buildpath" для построения абсолютного пути.
 */
