const dotenv = require('dotenv');
const yargs = require('yargs');
const { main } = require('../src/blynk-pi');

// read in settings
dotenv.config();

const options = yargs
  .usage('Usage: [-t] [-n] [-a] [-p]')
  .option('t', {
    alias: 'token',
    describe: 'device token',
    type: 'string',
    default: 'IoDSCSWHYGkFp5s0WLthcqXkvzzdFiXh',
    demandOption: true,
  })
  .option('n', {
    alias: 'pin',
    describe: 'virtual pin number',
    type: 'number',
    default: 7,
    demandOption: true,
  })
  .option('a', {
    alias: 'address',
    describe: 'blynk server address',
    type: 'string',
    default: 'localhost',
    demandOption: false,
  })
  .option('p', {
    alias: 'port',
    describe: 'blynk server port',
    type: 'number',
    default: 8080,
    demandOption: false,
  })
  .argv;

main(options);