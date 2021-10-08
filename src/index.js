const API_KEY = "240fee3fa5f7cc104f238c10a993a48b";

const CITY_NAME = "Stouffville";

// celcius = metric, fahreheit = imperial
let UNITS = "metric";

let weatherHere = async () => {
	let response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=${UNITS}&appid=${API_KEY}`,
		{ mode: "cors" }
	);
	const weatherData = await response.json();
	console.log(weatherData);

	const myData = {
		currentTemp: weatherData.main.temp,
		feelsLike: weatherData.main.feels_like,
		tempMax: weatherData.main.temp_max,
		tempMin: weatherData.main.temp_min,
		description: weatherData.weather[0].description,
		location: `${weatherData.name}, ${weatherData.sys.country}`,
	};
	console.log(myData);
};

weatherHere();
