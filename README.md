Weather App

Overview

This Weather App is a dynamic web application built as part of The Odin Project. It fetches real-time weather data based on a user's location input and displays the current conditions. The primary goal of this project was to learn and implement asynchronous JavaScript concepts, including Promises, async/await, and interacting with external APIs.

Features

    Real-time Weather Data: Fetches up-to-date weather information using the Visual Crossing Weather API.

    Dynamic UI: The DOM is completely generated and updated using JavaScript based on the API response.

    Temperature Toggle: Users can seamlessly switch between Celsius (°C) and Fahrenheit (°F) with responsive UI buttons.

    Dynamic Icon Loading: Automatically fetches and displays specific SVG weather icons that match the current weather conditions.

    Loading State: Displays a loading spinner/message while waiting for the API to resolve, ensuring a good user experience.

    Robust Error Handling: Catches and displays user-friendly error messages for empty inputs, misspelled city names (404s), and lost internet connections.

Technologies Used

    HTML5 / CSS3

    Vanilla JavaScript (ES6)

    Visual Crossing Weather API

    Webpack/Vite (implied for handling dynamic SVG module imports)

Key Concepts Applied

    Asynchronous JavaScript: Deep utilization of async and await to handle API requests without blocking the main thread.

    Fetch API & Promises: Using fetch() to request data and parsing the returned Promises into usable JSON objects.

    Error Handling: Implementing try/catch blocks and specific HTTP status code checks to gracefully handle rejected Promises and network errors.

    ES6 Modules: Organizing code into single-responsibility files (e.g., getWeather.js, renderWeather.js, checkInput.js) using import and export to keep the codebase maintainable and scalable.

    Dynamic Module Imports: Utilizing asynchronous imports for weather icons (await import(...)) to only load assets when needed.