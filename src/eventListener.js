import { closeAlerts } from "./helperFunctions";

const { weatherQuery } = require("./weatherFunctions");

function submitButton() {
	const city = document.querySelector("#cityInput").value;
	const celcius = document.querySelector("#inlineRadio1");
	const farenheit = document.querySelector("#inlineRadio2");
	const unit = celcius.checked ? celcius.value : farenheit.value;

	if (city) {
		weatherQuery(city, unit);
	}
}

function formEventListener() {
	document.querySelector("form").addEventListener("submit", (e) => {
		e.preventDefault();
		closeAlerts();
		submitButton();
	});
}

export { formEventListener };
