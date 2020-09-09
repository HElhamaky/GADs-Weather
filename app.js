// const InputCity = document.querySelector("[data-city-input]").value;
const CityName = document.querySelector("[data-city-name]");
const Description = document.querySelector("[data-description]");
const Temperature = document.querySelector("[data-temperature]");
const FeelLike = document.querySelector("[data-feels-like]");
const Icon = document.querySelector("[data-icon]");
const RainChance = document.querySelector("[data-rain-chance]");
const Humidity = document.querySelector("[data-humidity]");
const Wind = document.querySelector("[data-wind]");
const Precipitation = document.querySelector("[data-precipitation]");
const UVIndex = document.querySelector("[data-uvindex]");
const Visibility = document.querySelector("[data-visibility]");
const submit = document.getElementById("button");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  let InputCity = document.querySelector("[data-city-input]").value;
  console.log(InputCity);
  getWeather(InputCity);
});

function getWeather(InputCity) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${InputCity}&APPID=df724584aade5bdf221ae11820f06572&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      Temperature.innerText = data.main.temp;
      CityName.innerText = InputCity;
      const Temp = data.main.temp;
      const description = data.weather[0].main;
      const icon = data.weather[0].icon;
      console.log(Temp, description, icon, data);
    });
}

// const xhr = fetch(
//   `http://api.openweathermap.org/data/2.5/weather?q=${InputCity}&APPID=df724584aade5bdf221ae11820f06572&units=metric`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const Temp = data.main.temp;
//     const description = data.weather[0].main;
//     const icon = data.weather[0].icon;
//     console.log(Temp, description, icon, data, lat, lon);
//   });
