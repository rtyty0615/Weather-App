import { renderWeather } from "./render-weather.js";

export async function processWeather(response) {
    const rawCity = response.address;
    const formattedCity = rawCity.charAt(0).toUpperCase() + rawCity.slice(1).toLowerCase();
    const weatherData = {
        city: formattedCity,
        temperature: response.days[0].temp,
        description: response.description,
        humidity: response.days[0].humidity,
        icon: response.days[0].icon
    };
    console.log("Weather for UI:", weatherData);
    renderWeather(weatherData)
}