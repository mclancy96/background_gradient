var color1 = document.getElementById("color1"),
    color2 = document.getElementById("color2"),
    body = document.getElementById("gradient"),
    css = document.querySelector("h3"),
    random = document.getElementById("random");

setGradient()

function setGradient(){
    body.style.background = "linear-gradient(to right, "+color1.value + ", " +  color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)