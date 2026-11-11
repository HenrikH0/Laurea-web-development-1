const API_KEY = "3d7d1eb4398a3ce94a4411e389736cc5";

const fetchButton = document.getElementById("fetchWeather");
const city = document.getElementById("city");
const citySearch = document.getElementById("citysearch");
const searchButton = document.getElementById("search");
const weatherData = document.getElementById("weatherdata");

function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&mode=xml&appid=${API_KEY}`;
    weatherData.innerHTML = "Haetaan säätietoja...";
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Säätietojen hakeminen epäonnistui!");
            }
            return response.text();
        })
        .then(xmlText => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "text/xml");
            if (xmlDoc.querySelector("parsererror")) {
                throw new Error("XML-datan parsiminen epäonnistui!");
            }
            const temperature = xmlDoc.querySelector("temperature").getAttribute("value");
            const humidity = xmlDoc.querySelector("humidity").getAttribute("value");
            const clouds = xmlDoc.querySelector("clouds").getAttribute("value");
            const cityName = xmlDoc.querySelector("city").getAttribute("name");
            weatherData.innerHTML = `
                <h3>${cityName}</h3>
                <p>Lämpötila: ${temperature} °C</p>
                <p>Ilmankosteus: ${humidity} %</p>
                <p>Pilvisyys: ${clouds} %</p>
            `;
        })
        .catch(error => {
            weatherData.innerHTML = error.message;
            console.error(error);
        });
}

fetchButton.addEventListener("click", function() {
    getWeather("Helsinki");
});

city.addEventListener("change", function() {
    getWeather(city.value);
});

searchButton.addEventListener("click", function() {
    const searchCity = citySearch.value.trim();
    if (searchCity !== "") {
        getWeather(searchCity);
    } else {
        weatherData.innerHTML = "Kirjoita kaupungin nimi!";
    }
});