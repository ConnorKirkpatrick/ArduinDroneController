/**
 * used to add the newly created waypoint as an item on the users interface so that they can remove it
 * @param {String} id The ID of the created Waypoint
 * @param {Number} Long The Longitude of the created waypoint
 * @param {Number} Lat The Longitude of the created waypoint
 */
function addInterfaceWaypoint(id, Long, Lat){
    let list = document.getElementById("waypoints")
    let newListItem = document.createElement("li")
    newListItem.setAttribute("id",id)
    newListItem.setAttribute("class", "wpItem")
    newListItem.innerText = "WP-"+id+". "+Lat+"N,  "+Long+"E  "

    let removeButton = document.createElement("button")
    removeButton.setAttribute("type", "button")
    removeButton.setAttribute("class", "removeButton")
    removeButton.onclick = function (){
        removeMarker(id)
        this.parentNode.parentNode.removeChild(this.parentNode)
    }
    removeButton.innerText = "Remove"

    let br = document.createElement("br")

    let moveUp = document.createElement("upbutton")
    moveUp.setAttribute("type","button")
    moveUp.setAttribute("class", "moveButton")
    moveUp.innerText = "Move Up"

    let moveDown = document.createElement("downButton")
    moveDown.setAttribute("type","button")
    moveDown.setAttribute("class", "moveButton")
    moveDown.innerText = "Move Down"
    newListItem.append(removeButton)
    newListItem.append(br)
    newListItem.append(moveUp)
    newListItem.append(moveDown)

    list.append(newListItem)
    sortList()
}