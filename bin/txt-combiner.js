#!/usr/bin/env node
import { program } from 'commander';


program
  .version('1.0.0')
  .description('The program combines many TXT files into one.')
  .arguments('<filename> [filestocombine]')
  .option('-a, --all', 'combine all files in directory')
  .parse()


/*
  
*/
