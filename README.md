# weatherApp
Weather app project built using HTML, CSS and JS

This project utilizes a public API(https://openweathermap.org/current) to fetch weather data for user specified locations anywhere in the world. It can be cross utilized with ease and is already mobile friendly. 

Constructing this project has helped me to better understand and practice the following:
1) Working with an API
2) f


A general walkthrough of the JavaScript code is given below.

First construct the getWeatherByLocation() function to fetch the location response data.
```JavaScript
const apikey = 'GET YOUR OWN KEY! (https://openweathermap.org/appid)'
const url = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}
`;

async function getWeatherByLocation(location){
    const resp = await fetch(url(location));
    const respData = await resp.json();
}
getWeatherByLocation('Bali');
```

Construct the KtoC() and KtoF() functions to convert Kelvins into Cel and Fah. since the API data is only provided in Kelvins.
```JavaScript
function KtoC(k) {
    return k - 273.15;
}

function KtoF(k) {
    return 1.8(k - 273) + 32;
}
```

Construct the addWeatherToPage() function.
```JavaScript
```

Add an event listener to the form to accept user queries.
```JavaScript
```

