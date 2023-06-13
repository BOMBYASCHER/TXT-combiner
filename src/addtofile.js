import { appendFile } from 'node:fs';
import buildpath from './buildpath';

export default (filePath, data) => {
<<<<<<< HEAD
('message.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
=======
  appendFile('message.txt', 'data to append', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
>>>>>>> 989ac7211611e97cb82823763adae5c0a8764741
};

/**
 * "buildpath" для построения абсолютного пути.
 */
