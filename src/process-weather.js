import { getWeather } from "./get-weather.js";

export async function processWeather(cityName) {
    const response = await getWeather(cityName);
    const weatherData = {
        city: response.address,
        temperature: response.days[0].temp,
        description: response.description,
        humidity: response.days[0].humidity,
    };
    console.log("Weather for UI:", weatherData);

}