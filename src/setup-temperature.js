export function setupTemperature(weatherData) {
    const btnC = document.getElementById('c');
    const btnF = document.getElementById('f');
    const temperatureDisplay = document.querySelector("h2");

    const tempF = weatherData.temperature;
    const tempC = Math.round(((tempF - 32) * 5 / 9) * 10) / 10;

    const updateUI = (showCelsius) => {
        temperatureDisplay.textContent = showCelsius ? `${tempC} °C` : `${tempF} °F`;

        btnC.classList.toggle('active', showCelsius);  
        btnF.classList.toggle('active', !showCelsius); 
    };

    btnC.addEventListener("click", () => updateUI(true));
    btnF.addEventListener("click", () => updateUI(false));

    updateUI(true);
}

