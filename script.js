var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random1 = document.getElementById("random");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value 
		+", " 
		+ color2.value 
		+")";

		css.textContent = body.style.background + ";";
}

function randomColor() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.body.style.backgroundColor = "#" + randomColor;
  	color1.innerHTML = "#" + randomColor;
		
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random1.addEventListener("click", randomColor);
randomColor();


// color2.addEventListener("click", randomColor);

