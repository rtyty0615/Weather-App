export async function getWeather(cityName) {
    try {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + cityName + '?key=EJ3RDK5ABRWM5Z4S8865MW6BR');
        if (!response.ok) {
            if (response.status === 404 || response.status === 400) throw new Error("NOT_FOUND");
            throw new Error("SERVER_ISSUE");
        };
        console.log(response);
        const responseGetJson = await response.json();
        console.log(responseGetJson);
        return responseGetJson

    } catch (error) {
        if (error.name === "TypeError") return "NETWORK_ERROR";

        return error.message;
    }
}