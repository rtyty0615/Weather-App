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
    } catch (error) {
        console.error("Error fetching the image:", error);
    }
}

getWeather()

console.log(greeting);