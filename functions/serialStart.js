const SerialPort = require("serialport");

function serialStart(portName){
    let port = new SerialPort.SerialPort({
        path: portName,
        baudRate: 9600,
        // defaults for Arduino serial communication
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
        flowControl: false,
    }, function (err) {
        if(err){
            return console.log("Err: ", err.message);
        }
    }).setEncoding('utf8');
    return port
}

module.exports = serialStart