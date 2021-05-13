'use strict';
const apikey = 'f604fe7e9c832f51efa69c074078e6ee'
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const url = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}
`;

async function getWeatherByLocation(location){
    const resp = await fetch(url(location));
    const respData = await resp.json();
    console.log(respData);
    console.log(KtoF(respData.main.temp));
    addWeatherToPage(respData);

}
getWeatherByLocation('Bali');

function addWeatherToPage(data){
    const temp = KtoF(data.main.temp);
    const weather = document.createElement('div');
    weather.classList.add('weather');
    weather.innerHTML = `
    <small>It is</small>
    <h2>${temp}&#176;F</h2>
    <small>with</small>
    <h2>${data.weather[0].description}</h2>
    <img src='https://openweathermap.org/img/w/${data.weather[0].icon}.png'/>
    <p>in ${data.name} currently.</p>
    `;
    //cleanup
    main.innerHTML='';
    main.appendChild(weather);
 
}

function KtoC(k) {
    return (k - 273.15).toFixed(0);
}

function KtoF(k) {
    return ((k - 273) * 1.8 + 32).toFixed(0);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const location = search.value;
    if(location){
        getWeatherByLocation(location);
    }
})

