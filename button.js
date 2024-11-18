// manages button stuff for home page

const backgroundButton = document.getElementById("bg-button")
let buttonState = false

backgroundButton.addEventListener("click", () => {
    document.body.classList.toggle("background-button-active")
    buttonState = !buttonState
    if (!buttonState) alert("That fucking sucked")
})