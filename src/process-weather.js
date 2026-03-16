import { getWeather } from "./get-weather.js";
import { renderWeather } from "./render-weather.js";

export async function processWeather(cityName) {
    const response = await getWeather(cityName);
    if (!response) return null;
    const rawCity = response.address;
    const formattedCity = rawCity.charAt(0).toUpperCase() + rawCity.slice(1).toLowerCase();
    const weatherData = {
        city: formattedCity,
        temperature: response.days[0].temp,
        description: response.description,
        humidity: response.days[0].humidity,
    };
    console.log("Weather for UI:", weatherData);
    renderWeather(weatherData)
}