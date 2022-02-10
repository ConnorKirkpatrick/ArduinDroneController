function newWaypointRightClick(){
    //get earliest free id
    let possibleIds = [1,2,3,4,5,6,7,8,9,10]
    let usedIds = []
    for (let i = 0; i < markerArray.length; i++) {
        usedIds.push(markerArray[i].getId())
    }
    possibleIds = possibleIds.filter(n => !usedIds.includes(n))
    let id = possibleIds[0]
    addMarker(rightClickCoordinates[0],rightClickCoordinates[1],id)
    addInterfaceWaypoint(id,rightClickCoordinates[0],rightClickCoordinates[1])
}