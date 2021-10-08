function titleCase(text) {
	let split = text.toLowerCase().split(" ");
	for (let i = 0; i < split.length; i++) {
		split[i] = split[i][0].toUpperCase() + split[i].substring(1);
	}
	return split.join(" ");
}

function closeAlerts() {
	if (document.querySelector(".alert button")) {
		document.querySelector(".alert button").click();
	}
}

export { titleCase, closeAlerts };
