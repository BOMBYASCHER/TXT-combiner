import { writeFile } from 'node:fs';
import copyrate from './copyrate.js';
import addtofile from './addtofile.js';

export default (resultFilePath, filePaths, separator = '\n\n\n') => {};

/**
 *  Главная функция, движок приложения. Ничего не возвращает.
    Результат работы функции создание итогового файла
 *  "filePaths" представляет собой массив путей файлов для объединения
 *  "writeFile" для создания файла и добавления первых данных
 */
