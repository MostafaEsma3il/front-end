const apiKey = 'da97322c5ae9ba4b9dae0ab5c53155cf';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");


async function updataData(city) {

    const res = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);
    const data = await res.json();

    if (res.status == 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather-info").style.display = 'none';
    } else {

        
        // Updating Text Data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = `${data.wind.speed} KM/H`;
        
        // Handling the weather icon
        updateWeatherIcon(data.weather[0].main);
        document.querySelector(".weather-info").style.display = "block";
    }
    
}

function updateWeatherIcon (weather) {
    weather = weather.toLowerCase(weather);
    let src = "images/";
    src += weather + ".png";
    document.querySelector(".weather-icon").src = src;
}

searchBtn.addEventListener("click", ()=> {
    updataData(searchBox.value);
});
