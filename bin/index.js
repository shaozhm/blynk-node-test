#!/usr/bin/env node
const chalk = require('chalk');
const dotenv = require('dotenv');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');


// read in settings
dotenv.config({ override: true });

yargs(hideBin(process.argv))
  .usage(chalk.bold.cyan('Welcome to Blynk Tool.\n') + chalk.white('Usage: $0 <command> [options]'))
  .commandDir('../src/cmds')
  .demandCommand()
  .help()
  .argv