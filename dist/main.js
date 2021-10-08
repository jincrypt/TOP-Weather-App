/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxVQUFVLFNBQVMsTUFBTSxTQUFTLFFBQVE7QUFDakcsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQixJQUFJLHdCQUF3QjtBQUM1RDtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSBcIjI0MGZlZTNmYTVmN2NjMTA0ZjIzOGMxMGE5OTNhNDhiXCI7XG5cbmNvbnN0IENJVFlfTkFNRSA9IFwiU3RvdWZmdmlsbGVcIjtcblxuLy8gY2VsY2l1cyA9IG1ldHJpYywgZmFocmVoZWl0ID0gaW1wZXJpYWxcbmxldCBVTklUUyA9IFwibWV0cmljXCI7XG5cbmxldCB3ZWF0aGVySGVyZSA9IGFzeW5jICgpID0+IHtcblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0YGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtDSVRZX05BTUV9JnVuaXRzPSR7VU5JVFN9JmFwcGlkPSR7QVBJX0tFWX1gLFxuXHRcdHsgbW9kZTogXCJjb3JzXCIgfVxuXHQpO1xuXHRjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0Y29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG5cdGNvbnN0IG15RGF0YSA9IHtcblx0XHRjdXJyZW50VGVtcDogd2VhdGhlckRhdGEubWFpbi50ZW1wLFxuXHRcdGZlZWxzTGlrZTogd2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlLFxuXHRcdHRlbXBNYXg6IHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXgsXG5cdFx0dGVtcE1pbjogd2VhdGhlckRhdGEubWFpbi50ZW1wX21pbixcblx0XHRkZXNjcmlwdGlvbjogd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcblx0XHRsb2NhdGlvbjogYCR7d2VhdGhlckRhdGEubmFtZX0sICR7d2VhdGhlckRhdGEuc3lzLmNvdW50cnl9YCxcblx0fTtcblx0Y29uc29sZS5sb2cobXlEYXRhKTtcbn07XG5cbndlYXRoZXJIZXJlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=