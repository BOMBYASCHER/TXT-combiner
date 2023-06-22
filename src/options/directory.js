import buildpath from '../buildpath.js';

export default (file, directory = '.') => buildpath(directory, file);
