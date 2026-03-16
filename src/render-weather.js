import { displayIcon } from "./display-icon.js";

export function renderWeather(weatherData) {
    const main = document.querySelector("#main");
    main.innerHTML = "";

    const content = document.createElement("div");
    content.id = "content";

    const btnDiv = document.createElement("div");
    btnDiv.id = "temperature";
    const btnC = document.createElement("button");
    btnC.textContent = "°C";
    btnC.id = "c";
    const btnH = document.createElement("button");
    btnH.textContent = "°H";
    btnH.id = "h";
    btnDiv.append(btnC, btnH);

    const city = document.createElement("h1");
    city.textContent = weatherData.city;

    const icon = document.createElement("img");
    icon.id = "weather-icon";
    icon.alt = weatherData.icon;
    displayIcon(weatherData.icon);
    console.log(weatherData.icon);

    const temp = document.createElement("h2");
    temp.textContent = weatherData.temperature + " °H";
    const description = document.createElement("h4");
    description.textContent = weatherData.description;
    const humidity = document.createElement("h3");
    humidity.textContent = "Humidity: " + weatherData.humidity;
    content.append(btnDiv, city, icon, temp, humidity, description);
    main.append(content)
}