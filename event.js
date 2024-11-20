// 
// Adding magic text
// 
let p = document.createElement("p")
let span = document.createElement("span")

span.appendChild(document.createTextNode("magic"))
span.id = "magic"

p.append(document.createTextNode("The internet is built on simple principles, which are abstracted to the point at which they become indiscernible from "))
p.append(span)
p.append(document.createTextNode(" to most people."))

document.body.appendChild(p)


// 
// Adding list
// 
let places = ["ocean", "subway", "field"]

let listOfPlaces = ""
for (let i = 0; i < places.length; i++) {
    listOfPlaces += places[i] + " "
}
let list = document.createElement("p")
list.innerHTML = listOfPlaces
document.body.appendChild(list)


// 
// Clicky clicky
// 
let clicks = 0
let timeout;

function clickInstructions(el) {
    let title = document.getElementById("title")
    let subtitle = document.getElementById("subtitle")

    if(el == title) {
        console.log("title")
    } else if (el == subtitle) {
        console.log("subtitle clicked")
    }
    
    clicks++

    if (clicks % 5 == 0) {
        title.innerText = "STOP CLICKING"
        timeout = setTimeout(() => { title.innerText = "Thank you, that's better" }, 3000)
    }
}



document.addEventListener("click", function(event) {
    clickInstructions(event.target)
})

