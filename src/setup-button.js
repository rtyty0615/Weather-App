import { processWeather } from "./process-weather.js";

export function setupEventListeners() {
    const form = document.querySelector("#weather-form");
    const input = document.querySelector("#location");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const cityName = input.value.trim();
        if (cityName === "") {
            alert("You cannot enter only space!");
            input.focus();
            return;
        }
        processWeather(cityName);
    })
    
}