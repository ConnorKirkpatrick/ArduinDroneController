const rightClickMenu = document.getElementById("rightClickMenu")
map.getViewport().addEventListener("contextmenu", function (evt) {
    evt.preventDefault()
    rightClickCoordinates = ol.proj.transform(map.getEventCoordinate(evt),'EPSG:3857', 'EPSG:4326')
    const {clientX: mouseX, clientY: mouseY} = evt
    rightClickMenu.style.top = `${mouseY}px`;
    rightClickMenu.style.left = `${mouseX}px`;
    rightClickMenu.classList.add("visible")
})
document.querySelector("body").addEventListener('click', (e) => {
    if(e.target.offsetParent !== rightClickMenu){
        rightClickMenu.classList.remove('visible')
    }
})
let addWaypoint = document.getElementById("rcmAddWaypoint")
addWaypoint.addEventListener("click", (evt) =>{
    newWaypointRightClick(rightClickCoordinates)
})
let addHome = document.getElementById("rcmSetHome")
addHome.addEventListener("click", (evt) =>{
    newHomeRightClick(rightClickCoordinates)
})