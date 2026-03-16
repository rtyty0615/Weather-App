import { processWeather } from "./process-weather.js";

export function setupEventListeners() {
    const btn = document.querySelector("button");
    const input = document.querySelector("#location");
    btn.addEventListener("click", () => {
        const cityName = input.value.trim();
        if (cityName === "") {
            alert("You cannot enter only space!");
            input.focus();
            return;
        }
        processWeather(cityName);
    })
}