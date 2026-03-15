import "./styles.css";
import { greeting } from "./greeting.js";

async function getWeather() {
    try {
        let cityName = "taipei";
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + cityName + '?key=EJ3RDK5ABRWM5Z4S8865MW6BR');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };
        console.log(response);
        const responseGetJson = await response.json();
        console.log(responseGetJson);
        return responseGetJson

    } catch (error) {
        console.error("Error fetching the image:", error);
    }
}

async function main() {
    const response = await getWeather();
    const weatherData = {
        city: response.address,
        temperature: response.days[0].temp,
        description: response.description,
        humidity: response.days[0].humidity,
    };
    console.log(weatherData);
    return weatherData
}

main()

console.log(greeting);