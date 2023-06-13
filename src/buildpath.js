import { cwd } from 'node:process';
import path from 'node:path';

export default (filePath) => {return fs.readdir(filePath)
      .then((data) => data.map((elem) => {
        let modeValue = Promise.all(fs.stat(elem)).then((stats) => stats.mode).catch((e) => e)
        return {
          filepath: path.join(filePath, elem),
          mode: modeValue
        }
      }))
      .catch((e) => fs.readFile(filePath)
          .then((file) => {
            let modeValue = fs.stat(file).then((stats) => stats.mode).catch((e) => e)
            return [{filepath: path.join(filePath), mode: modeValue}]}) 
          .catch((e) => e))}
 {  path.resolve('/etc', 'filePath')
};

/**
 * Принимает на вход любой путь
 * Возвращает абсолютный путь
*/ 
