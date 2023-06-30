#!/usr/bin/env node
import { program } from 'commander';
import combiner from '../index.js';
import sep from '../src/options/separator.js';
//  import setDirectory from '../src/options/directory.js';
import allfiles from '../src/options/allfiles.js';
import byExtension from '../src/options/files-by-extension.js';
import bySubstring from '../src/options/files-by-substring.js';

program
  .version('1.2.1')
  .description(
    `The program combines many TXT files into one.
It copies data from files and adds to the file specified by the first parameter.`,
  )
  .argument('<filename>', 'The file to which the data will be added')
  .argument('[files...]', 'Files from which data will be copied');

program
  .option('-a, --all', 'takes all files in cwd')
  .option('-e, --extension <string>', 'takes files by extension in cwd')
  .option('-S, --substring <string>', 'takes files by subname in cwd')
  .option('-s, --separator <string>', 'separator between data', '\n\n\n')
  .action((filename, files) => {
    const options = program.opts();
    const separator = sep(options.separator);
    if (options.all) {
      combiner(filename, allfiles(), separator);
    }
    if (options.substring) {
      combiner(filename, bySubstring(allfiles(), options.substring), separator);
    }
    if (options.extension) {
      combiner(filename, byExtension(allfiles(), options.extension), separator);
    }
    combiner(filename, files, separator);
  });

program.parse(process.argv);
