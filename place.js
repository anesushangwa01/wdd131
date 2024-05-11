function fetchWeather() {
 
    const temperature = 25; 
    const condition = "Sunny";
    const windSpeed = 10; 
    const windchill= 'N/A'; 

    // Update the DOM with weather information
    document.getElementById('temperature').textContent = temperature + " °C";
    document.getElementById('condition').textContent = condition;
    document.getElementById('wind-speed').textContent = windSpeed + " m/s";
    document.getElementById('wind-chill').textContent = windchill;
}


window.addEventListener('load', fetchWeather);