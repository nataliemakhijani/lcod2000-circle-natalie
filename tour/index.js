function coyoteclicked() {
    document.getElementById("no-cars").innerText = "Please don't click the coyote"
    document.getElementById("addr").innerHTML = "<a href='#' onclick='sorry()'>Ok, I won't do it again. I'm sorry</a>"
    document.getElementById("please").innerHTML = "Come on..."
    document.getElementById("body").classList.add("orange")
}

function sorry() {
    document.getElementById("no-cars").innerText = "NO CARS"
    document.getElementById("addr").innerHTML = "521 Balboa St"
    document.getElementById("please").innerHTML = "Please don't click the coyote, he's sensitive"
    document.getElementById("body").classList.remove("orange")
}