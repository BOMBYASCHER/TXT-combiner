import {writeFile} from 'node:fs';
import copyrate from './copyrate.js';
import addtofile from './addtofile.js';

export default (resultFileName, filesToUnion) => {};

/* 
    1. Главная функция, движок приложения. Ничего не возвращает.
    Результат работы функции создание итогового файла

    2. "filesToUnion" представляет собой массив имён файлов для объединения (уже готовый)

    3. "copyrate" копирует данные из файла и взовращает в виде строки.
    Используется для каждого файла.
*/ 
