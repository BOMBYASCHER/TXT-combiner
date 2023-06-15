#!/usr/bin/env node
import { program } from 'commander';
import combine from '../src/combiner.js';

program
  .version('1.0.1')
  .description(
`The program combines many TXT files into one.
It copies data from files and adds to the file specified by the first parameter.`)
  .argument('<filename>', 'The file to which the data will be added')
  .argument('[files]', 'Files from which data will be copied')
  .action((filename, ...files) => combine(filename, files));

program.parse(process.argv);
