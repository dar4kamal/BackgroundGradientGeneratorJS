// Variable Declarations
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// Function Playground
function onPageLoad() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	css.textContent = "linear-gradient(to right, red , yellow);";
}

function randomColorGenerator() {	
	return '#' + (function co(lor){   
		return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
		&& (lor.length == 6) ?  lor : co(lor); 
	})('');
}

function randomBtnOnClick() {
	color1.value = randomColorGenerator();
	color2.value = randomColorGenerator();
	setGradient();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// Main Operations
onPageLoad()
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomBtnOnClick)
