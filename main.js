document.addEventListener("click", function () {
	document.getElementById("change").innerHTML = changeBackgroundColor();
});

function getRandomColorValue() {
	return Math.floor(Math.random() * 256);
}

function changeBackgroundColor() {
	const red = getRandomColorValue();
	const green = getRandomColorValue();
	const black = getRandomColorValue();
	const rgb = `rgb(${red}, ${green}, ${black})`;

	document.body.style.backgroundColor = rgb;
	document.getElementById('colorValue').textContent = rgb;
}
