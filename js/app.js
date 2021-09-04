/* api link: 
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

api key:
26912324e6c8ba022d234b0d4a996765
*/

const apiKey = `26912324e6c8ba022d234b0d4a996765`
const searchWeatherButton = () => {
    const city = document.getElementById('search-input').value;
    const url = `
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
    `
    document.getElementById('search-input').value = '';
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}
const displayWeather = temp => {
    console.log(temp)
    const tempStatus = document.getElementById('temp-status');
    tempStatus.textContent = '';
    const div = document.createElement('div');
    div.classList.add('weather-status');
    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
        <h1>${temp.name}</h1>
        <h3><span>${(temp.main.temp - 273.15).toFixed(2)}</span>&deg;C</h3>
        <h1 class="lead">Clouds</h1>
    `
    tempStatus.appendChild(div);
}