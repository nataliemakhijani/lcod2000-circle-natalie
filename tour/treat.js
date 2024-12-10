const dogs = [
    {
        name: "Canelo",
        src: "treat-canelo.jpg"
    },
    {
        name: "Whoofi Goldberg",
        src: "treat-gb.jpg"
    },
    {
        name: "Atlas",
        src: "atlas.jpg"
    }
]

var dogPos = 0;

function initDogs(params) {
    setInterval(rotateDogs, 1000)
}

function rotateDogs() {
    if (dogPos >= dogs.length) dogPos = 0
    document.getElementById("dogs").src = dogs[dogPos].src
    document.getElementById("name").innerText = dogs[dogPos].name
    dogPos++
}