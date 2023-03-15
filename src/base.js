const os = require("os");

const {
  read,
} = require('./yaml');

const DEFAULT_CONFIGFILE = 'blynk-config.yaml';

const getController = () => {
  const configPath = Path.join(userHomeDir, DEFAULT_CONFIGFILE);
  console.log('Read Config: ', configPath);

  if (!Fs.existsSync(configPath)) {
    console.error(`The ${DEFAULT_CONFIGFILE} file doesn't exist in ${userHomeDir}`);
    throw new VError(
      {
        name: `Could not find the config file: ${DEFAULT_CONFIGFILE} in ${userHomeDir}`,
      },
      'The config file is not exist.',
    );
  }

  const config = read(configPath);

  const {
    controller,
  } = config;

  if (controller && Array.isArray(controller) && controller.length) {
    return {
      name: controller.name,
      address: controller['address'],
      port: controller.port,
      token: controller.token,
      globalSwtichBtnVPIN: controller['global-switch-button-pin'],
      idleTimeout: controller['idle-timeout'],
      shutdownVPIN: controller['shutdown-virtual-pin'],
    }
  }
  return null;
}