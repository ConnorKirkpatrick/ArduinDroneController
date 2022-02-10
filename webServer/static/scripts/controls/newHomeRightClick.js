function newHomeRightClick(){
    //check for existing home
    if(home){
        removeMarker(0)
    }
    //add new home
    addMarker(rightClickCoordinates[0],rightClickCoordinates[1],0)
    alterMarkerStyle(0,10,'#ff0000')
    home=true
}