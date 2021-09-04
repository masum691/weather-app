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
    .then(data => console.log(data.main.temp))
}