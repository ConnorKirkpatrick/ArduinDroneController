const rightClickMenu = document.getElementById("rightClickMenu")
map.getViewport().addEventListener("contextmenu", function (evt) {
    evt.preventDefault()
    console.log(map.getEventCoordinate(evt))
    const {clientX: mouseX, clientY: mouseY} = evt
    console.log(mouseX,mouseY)
    rightClickMenu.style.top = `${mouseY}px`;
    rightClickMenu.style.left = `${mouseX}px`;
    rightClickMenu.classList.add("visible")
})
document.querySelector("body").addEventListener('click', (e) => {
    if(e.target.offsetParent !== rightClickMenu){
        rightClickMenu.classList.remove('visible')
    }
})