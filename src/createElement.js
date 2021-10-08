function createSection() {
	const body = document.querySelector("body");
	const section = document.createElement("section");
	const div1 = document.createElement("div");
	const div2 = document.createElement("div");
	const div3 = document.createElement("div");

	section.classList = "vh-100";
	div1.classList = "container py-5 h-100";
	div2.classList =
		"row d-flex justify-content-center align-items-center h-100";
	div3.classList = "col-md-8 col-lg-6 col-xl-4";

	div3.id = "div-container";

	div2.append(div3);
	div1.append(div2);
	section.append(div1);
	body.append(section);
}

function createForm() {
	const target = document.querySelector("#div-container");

	const title = document.createElement("h3");
	title.classList = "mb-4 pb-2 fw-normal";
	title.textContent = "Check the Weather Forecast";

	const form = document.createElement("form");

	// Group 1
	const divGroup1 = document.createElement("div");
	divGroup1.classList = "input-group rounded mb-3";
	const input = document.createElement("input");
	input.type = "search";
	input.classList = "form-control rounded";
	input.placeholder = "City";
	const button = document.createElement("button");
	button.classList = "input-group-text border-0 fw-bold";
	button.id = "searchButton";
	button.type = "submit";
	button.textContent = "Submit";

	divGroup1.append(input, button);

	// Group 2
	const divGroup2 = document.createElement("div");
	divGroup2.classList = "mb-4 pb-2";

	const divGroup2Sub1 = document.createElement("div");
	divGroup2Sub1.classList = "form-check form-check-inline";
	const divGroup2Sub2 = document.createElement("div");
	divGroup2Sub2.classList = "form-check form-check-inline";

	const input1 = document.createElement("input");
	input1.classList = "form-check-input";
	input1.type = "radio";
	input1.name = "inlineRadioOptions";
	input1.id = "inlineRadio1";
	input1.value = "metric";
	input1.checked = true;

	const input2 = document.createElement("input");
	input2.classList = "form-check-input";
	input2.type = "radio";
	input2.name = "inlineRadioOptions";
	input2.id = "inlineRadio2";
	input2.value = "imperial";

	const label1 = document.createElement("label");
	label1.classList = "form-check-label";
	label1.setAttribute("for", "inlineRadio1");
	label1.textContent = "Celcius";

	const label2 = document.createElement("label");
	label2.classList = "form-check-label";
	label2.setAttribute("for", "inlineRadio2");
	label2.textContent = "Farenheit";

	divGroup2Sub1.append(input1, label1);
	divGroup2Sub2.append(input2, label2);
	divGroup2.append(divGroup2Sub1, divGroup2Sub2);

	form.append(divGroup1, divGroup2);

	target.append(title, form);
}

// Create ID's for fields to update
function createInfoCard() {
	const target = document.querySelector("#div-container");

	const container = document.createElement("div");
	container.classList = "card shadow-0 border";

	const div1 = document.createElement("div");
	div1.classList = "card-body p-4";

	const location = document.createElement("h4");
	location.classList = "mb-1 sfw-normal";
	location.innerHTML = "New York, US"; // placeholder
	location.id = "location";

	const currentTemperature = document.createElement("p");
	currentTemperature.classList = "mb-2";
	currentTemperature.innerHTML =
		"Current Temperature: <strong> 10.44°C </strong>";

	const feelsLikeTemp = document.createElement("p");
	feelsLikeTemp.innerHTML = "Feels Like: <strong> 11.32°C </strong>";

	const maxMinTemp = document.createElement("p");
	maxMinTemp.innerHTML =
		"Max: <strong>6.11°C</strong>, Min: <strong>3.89°C</strong>";

	const div2 = document.createElement("div");
	div2.classList = "d-flex flex-row align-items-center";

	const description = document.createElement("p");
	description.classList = "mb-0 me-4";
	description.textContent = "Scattered Clouds";

	//icon if you want

	div2.append(description);

	div1.append(location, currentTemperature, feelsLikeTemp, maxMinTemp, div2);

	container.append(div1);

	target.appendChild(container);
}

function createElements() {
	createSection();
	createForm();
	createInfoCard();
}
export { createElements };
