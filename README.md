# TXT-combiner

[![Build status](https://github.com/BOMBYASCHER/TXT-combiner/actions/workflows/main.yml/badge.svg)](https://github.com/BOMBYASCHER/TXT-combiner/actions/workflows/main.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/bb1a90fc5cca0ad93c38/maintainability)](https://codeclimate.com/github/BOMBYASCHER/TXT-combiner/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bb1a90fc5cca0ad93c38/test_coverage)](https://codeclimate.com/github/BOMBYASCHER/TXT-combiner/test_coverage)

## Info

TXT Combiner is a program that combines many text files into one. It has useful options for selecting files by the parameters you need.

## Installation

```sh
npm install txt-combiner
```
## Overview

```console
$ combine --help
Usage: combine [options] <filename> [files...]

The program combines many TXT files into one.
It copies data from files and adds to the file specified by the first parameter.

Arguments:
  filename                  The file to which the data will be added
  files                     Files from which data will be copied

Options:
  -V, --version             output the version number
  -a, --all                 takes all files in cwd
  -e, --extension <string>  takes files by extension in cwd
  -S, --substring <string>  takes files by subname in cwd
  -s, --separator <string>  separator between data (default: "\n\n\n")
  -h, --help                display help for command
```

The program has two parameters. The first parameter is the name of the file in which the data will be written, the second parameter is the files from which the data will be copied. The first parameter is mandatory, after it you can specify any number of files.

## Options

The options can be specified in any position (before or after the file name).

1. "-a, --all" this option takes all files in current working directory, without arguments.
2. "-e, --extension <string>" this option selects files by a specified extension, such as 'txt' or 'md'. This has a mandatory string argument. 
3. "-S, --substring <string>" 'This option selects files by a substring in the file name. This has a mandatory string argument.
4. "-s, --separator <string>" This option changes the separator between the data being appended to the file. It has a mandatory argument as a string. Special characters must be written in quotes. The default separator is '\n\n\n'.

## Example of use

### Without options

[![asciicast](https://asciinema.org/a/yRzHYm3gvbaVJC9lmkLUEz2DZ.svg)](https://asciinema.org/a/yRzHYm3gvbaVJC9lmkLUEz2DZ)

### '-a, --all'

[![asciicast](https://asciinema.org/a/0Q2ehiiuNWj370BxYAM2vk0Jc.svg)](https://asciinema.org/a/0Q2ehiiuNWj370BxYAM2vk0Jc)

### '-e, --extension'

[![asciicast](https://asciinema.org/a/0k0pwJXp1ZFIcUhgDZfR8QJ0f.svg)](https://asciinema.org/a/0k0pwJXp1ZFIcUhgDZfR8QJ0f)

### '-e, --extension' + '-s, --separator'

[![asciicast](https://asciinema.org/a/h7lM4AUOwWVGmqwn0VDy1DbuM.svg)](https://asciinema.org/a/h7lM4AUOwWVGmqwn0VDy1DbuM)

### '-a, --all' + '-s, --separator'

[![asciicast](https://asciinema.org/a/vIrd1uzGc5BJFYbHF8zY7RhiP.svg)](https://asciinema.org/a/vIrd1uzGc5BJFYbHF8zY7RhiP)

### '-S, --substring <string>'

[![asciicast](https://asciinema.org/a/DApEmV5N4A47pB80diJ4N2LU5.svg)](https://asciinema.org/a/DApEmV5N4A47pB80diJ4N2LU5)

### Setup
```bash
make setup
```

### Run tests
```bash
make test
```

### Run code coverage
```bash
make test-coverage
```
