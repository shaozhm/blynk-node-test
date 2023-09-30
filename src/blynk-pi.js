const Blynk = require('blynk-library');

const main = (options) => {
  const {
    token: piToken,
    pin: testVPIN,
    address,
    port,
  } = options;
  const blynk = new Blynk.Blynk(piToken, options = {
    connector : new Blynk.TcpClient( options = { addr: address, port: port })
  });
  blynk.on('connect', () => {
    console.log('Welcome Test Node');
  });
  const testPin = new blynk.VirtualPin(testVPIN);    
  testPin.on('write', (param) => {
    const input = parseInt(param[0]);
    console.log(`switchPin write to ${input}`);
  });
  testPin.on('read', () => {
    testPin.write(1);
  });
};

const exportFunctions = {
  main,
};

module.exports = exportFunctions;