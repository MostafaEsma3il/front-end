const apiKey = 'da97322c5ae9ba4b9dae0ab5c53155cf';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");


async function updataData(city) {

    const res = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);
    const data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = `${data.wind.speed} KM/H`;

    document.querySelector(".weather-icon").innerHTML = `${data.wind.speed} KM/H`;



}

searchBtn.addEventListener("click", ()=> {
    updataData(searchBox.value);
})
