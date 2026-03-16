import "./styles.css";
import { greeting } from "./greeting.js";

async function getWeather(cityName) {
    try {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + cityName + '?key=EJ3RDK5ABRWM5Z4S8865MW6BR');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };
        console.log(response);
        const responseGetJson = await response.json();
        console.log(responseGetJson);
        return responseGetJson

    } catch (error) {
        console.error("Error fetching the weather data:", error);
    }
}

async function processWeather(cityName) {
    const response = await getWeather(cityName);
    const weatherData = {
        city: response.address,
        temperature: response.days[0].temp,
        description: response.description,
        humidity: response.days[0].humidity,
    };
    console.log("Weather for UI:", weatherData);
    
}


function setupEventListeners() {
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


setupEventListeners()

console.log(greeting);