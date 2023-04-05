/**
 * Function used to add updated serial ports to the interface options
 * @param socket the oscket communication object
 * @param portList the list of seiral ports available
 */
function addPorts(socket, portList){
    let list = document.getElementById("serialPorts")
    //remove the existing children
    while(list.children.length > 0){
        list.children[0].remove();
    }
    //add the new children
    portList.forEach(port => {
        let option = new Option(port,port)
        list.appendChild(option)
    })
}