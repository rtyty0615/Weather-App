import { displayIcon } from "./display-icon.js";
import { setupTemperature } from "./setup-temperature.js";

export function renderWeather(weatherData) {
    const main = document.querySelector("#main");
    main.textContent = "";

    const content = document.createElement("div");
    content.id = "content";

    const btnDiv = document.createElement("div");
    btnDiv.id = "temperature";
    const btnC = document.createElement("button");
    btnC.textContent = "°C";
    btnC.id = "c";
    const btnF = document.createElement("button");
    btnF.textContent = "°F";
    btnF.id = "f";
    btnDiv.append(btnC, btnF);

    const city = document.createElement("h1");
    city.textContent = weatherData.city;

    const icon = document.createElement("img");
    icon.id = "weather-icon";
    icon.alt = weatherData.icon;
    displayIcon(weatherData.icon);

    const temp = document.createElement("h2");
    temp.textContent = weatherData.temperature + " °F";
    const description = document.createElement("h4");
    description.textContent = weatherData.description;
    const humidity = document.createElement("h3");
    humidity.textContent = "Humidity: " + weatherData.humidity + " %";
    content.append(btnDiv, city, icon, temp, humidity, description);
    main.append(content);

    setupTemperature(weatherData)
}