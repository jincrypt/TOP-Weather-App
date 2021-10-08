const API_KEY = "240fee3fa5f7cc104f238c10a993a48b";

function titleCase(text) {
	let split = text.toLowerCase().split(" ");
	for (let i = 0; i < split.length; i++) {
		split[i] = split[i][0].toUpperCase() + split[i].substring(1);
	}
	return split.join(" ");
}

const weatherQuery = async (city, unit) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`,
		{ mode: "cors" }
	);
	const weatherData = await response.json();

	try {
		console.log(unit);
		unit = unit === "metric" ? " °C" : " °F";
		console.log(unit);
		const myData = {
			currentTemp: weatherData.main.temp + unit,
			feelsLike: weatherData.main.feels_like + unit,
			tempMax: weatherData.main.temp_max + unit,
			tempMin: weatherData.main.temp_min + unit,
			description: titleCase(weatherData.weather[0].description),
			location: `${weatherData.name}, ${weatherData.sys.country}`,
		};
		updateCardSuccess(myData);
	} catch (error) {
		console.error(error);
		updateCardError(weatherData.message);
	}
};

function updateCardSuccess(myData) {
	document.querySelector("#currentTempCard").textContent =
		myData["currentTemp"];
	document.querySelector("#feelsLikeCard").textContent = myData["feelsLike"];
	document.querySelector("#maxTempCard").textContent = myData["tempMax"];
	document.querySelector("#minTempCard").textContent = myData["tempMin"];
	document.querySelector("#descriptionCard").textContent =
		myData["description"];
	document.querySelector("#locationCard").textContent = myData["location"];
}

function updateCardError(message) {
	const div = document.createElement("div");
	div.role = "alert";
	div.classList =
		"alert alert-dark fade show col-md-8 col-lg-6 col-md-8 position-absolute top-0 start-50 translate-middle-x alert-dismissible";
	div.textContent = titleCase(message);

	const button = document.createElement("button");
	button.type = "button";
	button.classList = "btn-close";
	button.setAttribute("data-bs-dismiss", "alert");
	div.append(button);
	document.querySelector("body").prepend(div);
}

export { weatherQuery };
