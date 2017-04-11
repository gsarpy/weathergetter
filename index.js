// Set API variables
const api = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "" //your open weather API key here


// Set City and Units
let unitType = "imperial";
let units = "&units=" + unitType;

function getWeather() {
  let city = document.getElementById('city').value;
  let fullPath = api + city + "&APPID=" + apiKey + units;

  console.log(city);

  $.getJSON(fullPath, function(weatherData) {
    document.getElementById('cityName').innerHTML = weatherData.name + ", " + weatherData.sys.country;
    document.getElementById('temp').innerHTML = Math.floor(weatherData.main.temp) + " F";
    document.getElementById('sky').innerHTML = weatherData.weather[0].description;
    document.getElementById('wind').innerHTML = weatherData.wind.speed + " MPH";
  });

}
