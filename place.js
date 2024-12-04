const metrocardScreen = document.getElementById("screen-text")

function initialize() {
    setTimeout(updateMetrocardScreenTime, 60000)
    updateMetrocardScreenTime()
    
}

var swipes = 0
var screenTimer

function swipeMetrocard() {
    clearTimeout(screenTimer)
    if (swipes <= 2) {
        metrocardScreen.innerHTML = "SWIPE AGAIN"
    } else if (swipes == 3) {
        metrocardScreen.innerHTML = "PAID $2.90<br>BAL $1.00"
    } else {
        metrocardScreen.innerHTML = "INSUFFICIENT FARE<br>BAL $1.00"
    }
    screenTimer = setTimeout(updateMetrocardScreenTime, 2000)
    swipes++
}

function updateMetrocardScreenTime() {
    const datetime = new Date().toLocaleString([], {month: '2-digit',year: '2-digit',day: '2-digit',hour: '2-digit', minute:'2-digit'}).replace(',', '').replace(' AM', 'AM').replace(' PM', 'PM')
    metrocardScreen.innerHTML = datetime
}