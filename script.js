const input=document.querySelector("input");
const btn= document.getElementById("btn");
const icon= document.querySelector(".icon");
const weather= document.querySelector(" .weather");
const temprature= document.querySelector(" .temprature");
const description= document.querySelector(" .description");


btn.addEventListener("click", ()=>{
  let city= input.value;
  getWeather(city);
})


function getWeather(city) {
  console.log(city);

  // Fetch weather data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e1b14cdf2e129d94becb57dd61fbe77`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Retrieve the icon code from the weather data
      const iconCode = data.weather[0].icon;
      // Set the innerHTML of the element to include the weather icon image
      // icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`;
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather Icon"/>`;

      const weatherCity = data.name;
      const weatherCountry = data.sys.country;
      weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

      let weatherTemp = data.main.temp;
      weatherTemp = weatherTemp - 273;
      const temp = weatherTemp.toFixed(2)
      temprature.innerHTML = `${temp}*C`

      const weatherDesc = data.weather[0].description;
      description.innerHTML = weatherDesc

    })
    .catch(error => console.error('Error fetching weather data:', error));
}
