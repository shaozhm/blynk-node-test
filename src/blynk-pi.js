const Blynk = require('blynk-library');
const Lodash = require('lodash');
const os = require("os");
const Fs = require('fs');
const Path = require('path');

const {
  read,
} = require('./yaml');

const DEFAULT_CONFIGFILE = 'blynk-config.yaml';

const main = (options) => {
  const hostName = os.hostname();
  const userHomeDir = os.homedir();
  const userInfo = os.userInfo();
  
  let configPath = Path.join(userHomeDir, DEFAULT_CONFIGFILE);
  if (!Fs.existsSync(configPath) && userInfo.username !== 'pi') {
    configPath = Path.join('/home/pi', DEFAULT_CONFIGFILE);
  }
  if (!Fs.existsSync(configPath)) {
    console.error(`The ${DEFAULT_CONFIGFILE} file doesn't exist in ${userHomeDir} or '/home/pi'`);
    return;
  }

  const Config = read(configPath);

  const {
    controller,
  } = Config;

  if (options.c) {
    console.log(controller);
    return;
  }
  if (options.g) {
    process.stdout.write(`${controller[0][options.g]}`);
    return;
  }

  const idleTime = controller[0]['idle-timeout'];
  const shutdownVPIN = controller[0]['shutdown-virtual-pin'];

  const modules = Lodash.filter(Config.modules, (m) => m.name === hostName);
  if (modules && Array.isArray(modules) && modules.length) {
    if (options.i) {
      console.log(modules);
      return;
    }
    if (options.s) {
      process.stdout.write(`${modules[0][options.s]}`);
      return;
    }

    const piToken = modules[0]['pi-token'];
    const ildleVPIN = modules[0]['idle-counter-pin'];
    if (piToken && ildleVPIN) {

      const exec = require('child_process').exec;

      const execute = (command, callback) => {
        exec(command, (error, stdout, stderr) => callback(stdout));
      };

      const blynk = new Blynk.Blynk(piToken, options = {
        connector : new Blynk.TcpClient( options = { addr: controller[0].address, port: controller[0].port })
      });
      const bridge = new blynk.WidgetBridge(64);

      blynk.on('connect', () => {
        bridge.setAuthToken(controller[0].token);
        bridge.virtualWrite(ildleVPIN, 1);
        execute(`sudo /usr/sbin/shutdown +${idleTime/1000/60}`, (callback) => {
          console.log(callback);
        });
      });

      const switchPin = new blynk.VirtualPin(shutdownVPIN);
      
      switchPin.on('write', (param) => {
        const input = parseInt(param[0]);
        if (input === 0) {
          // reference to: https://stackoverflow.com/questions/23032149/how-do-i-reboot-linux-from-nodejs
          // require('child_process').exec('sudo /sbin/shutdown -r now', function (msg) {
          //   console.log(msg)
          // });
          execute('sudo /sbin/poweroff', (callback) => {
            console.log(callback);
          });
        }
      });

    }
  }
};

const exportFunctions = {
  main,
};

module.exports = exportFunctions;