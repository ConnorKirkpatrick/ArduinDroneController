const SerialPort = require("serialport");

/**
 * Simple callback enabled function used to read the available serial ports on the device
 * @param callback The callback function
 */
function getPorts(callback){
    let activePorts = []
    SerialPort.SerialPort.list().then(function(ports) {
        ports.forEach(port => {
            activePorts.push(port.path)
        });
        callback(activePorts)
    });
}

module.exports = getPorts