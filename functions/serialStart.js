const SerialPort = require("serialport");
const serialRead = require("./serialRead");

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

    port.on("open", () => {
        console.log("Serial port connected to: ",portName)
        serialRead(port)
        //serialWrite(port, "This is a test")
    })

    return port
}

module.exports = serialStart