import { appendFile } from 'node:fs';

export default (filePath, data) => {
('message.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
};
