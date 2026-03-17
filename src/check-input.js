import { getWeather } from "./get-weather.js";
import { processWeather } from "./process-weather.js";

export async function checkInput(cityName){
    const main = document.querySelector("#main");
    main.innerHTML = "";
    const content = document.createElement("div");
    content.id = "content";
    const errorDisplay = document.createElement("div");
    errorDisplay.id = "error-display";
    content.append(errorDisplay);
    main.append(content);
    const result = await getWeather(cityName);
    if (result === "NOT_FOUND") {
        errorDisplay.textContent = "City not found. Check your spelling!";
    } else if (result === "NETWORK_ERROR") {
        errorDisplay.textContent = "Check your internet connection.";
    } else if (typeof result === "string") {
        errorDisplay.textContent = "Something went wrong.";
    } else {
        main.textContent = "";
        processWeather(result);
    }
}