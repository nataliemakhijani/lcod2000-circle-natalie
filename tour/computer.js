const browser = document.getElementById("browser")

browser.addEventListener("onclick", () => {
    console.log("hi")
    browser.innerHTML = "<h2>Another comcast outage</h2>"
    browser.classList.add("error")
})