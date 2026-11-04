// Footer Details: Current Year & Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static Weather Inputs (Metric: °C and km/h)
const temperature = 9; // In °C
const windSpeed = 12;   // In km/h

/**
 * Calculates Wind Chill for Metric units (°C and km/h)
 * Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
 * @param {number} temp - Temperature in °C
 * @param {number} speed - Wind speed in km/h
 * @returns {number} Calculated wind chill factor rounded to 1 decimal place
 */
const calculateWindChill = (temp, speed) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// DOM elements
const tempElement = document.getElementById("temp");
const windElement = document.getElementById("wind");
const windChillElement = document.getElementById("windchill");

// Update Static HTML Elements
if (tempElement) tempElement.textContent = temperature;
if (windElement) windElement.textContent = windSpeed;

// Evaluate conditions prior to calculating Wind Chill
// Metric Conditions: Temp <= 10 °C AND Wind speed > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}