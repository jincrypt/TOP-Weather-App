const { weatherQuery } = require("./weatherFunctions");

function submitButton() {
	const city = document.querySelector("#cityInput").value;
	const celcius = document.querySelector("#inlineRadio1");
	const farenheit = document.querySelector("#inlineRadio2");
	const unit = celcius.checked ? celcius.value : farenheit.value;
	console.log(unit);
	if (city) {
		weatherQuery(city, unit);
	}
}

function formEventListener() {
	document.querySelector("form").addEventListener("submit", (e) => {
		e.preventDefault();
		submitButton();
	});
}

export { formEventListener };
