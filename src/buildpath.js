import { cwd } from 'node:process';
import path from 'node:path';

export default (filePath) => {
  
  return path.resolve(cwd(), filePath )
};

/**
 * Принимает на вход любой путь
 * Возвращает абсолютный путь
*/ 
