
const xhr = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Cairo,EG&APPID=df724584aade5bdf221ae11820f06572&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    const Temp = data.main.temp;
    const description = data.weather[0].main;
    const icon = data.weather[0].icon;
    console.log(Temp, description, icon, data, lat, lon);
  });


