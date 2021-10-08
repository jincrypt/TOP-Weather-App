import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createElements } from "./createElement.js";
import { formEventListener } from "./eventListener.js";
import { weatherQuery } from "./weatherFunctions.js";
createElements();
formEventListener();
weatherQuery("New York", "metric");
// weatherHere();
// const catchErrors = (fn) => fn().catch(console.error("TEST"));

// catchErrors(weatherHere);
// Error 404, message "City Not Found";
