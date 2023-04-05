function serialListen(port){
    console.log("Listening for data:")
    // Listens to incoming data
    port.on('readable', function () {
        console.log('Data:', port.read().replace("\n",""))
    })
}


module.exports = serialListen
