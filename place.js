function fetchWeather() {
    // Hardcoded weather information
    const temperature = 25; // in Celsius
    const condition = "Sunny";
    const windSpeed = 10; // in meters per second

    // Update the DOM with weather information
    document.getElementById('temperature').textContent = temperature + " °C";
    document.getElementById('condition').textContent = condition;
    document.getElementById('wind-speed').textContent = windSpeed + " m/s";
}

// Call fetchWeather function when the page loads
window.addEventListener('load', fetchWeather);