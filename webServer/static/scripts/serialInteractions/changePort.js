/**
 * Very simple function triggered when the user selects a new serial port to communicate with. sends the chosen port to the server
 */
function changePort(){
    let list = document.getElementById("serialPorts")
    socket.emit("changePort", list.options[list.selectedIndex].value)
}