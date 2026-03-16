import { displayIcon } from "./display-icon.js";

export function renderWeather(weatherData) {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const city = document.createElement("h2");
    city.textContent = weatherData.city;

    const icon = document.createElement("img");
    icon.id = "weather-icon";
    icon.alt = weatherData.icon;
    displayIcon(weatherData.icon);
    console.log(weatherData.icon);

    const temp = document.createElement("h2");
    temp.textContent = weatherData.temperature;
    const description = document.createElement("h4");
    description.textContent = weatherData.description;
    const humidity = document.createElement("h3");
    humidity.textContent = "Humidity: " + weatherData.humidity;
    content.append(city, icon, temp, description, humidity);
}