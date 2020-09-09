const para = document.getElementById("para");

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(position) {
  const lon = position.coords.longitude;
  const lat = position.coords.latitude;
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=df724584aade5bdf221ae11820f06572&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const hourly = data.hourly;
      for (let i = 0; i < 2; i++) {
        console.log(hourly[i].temp);
        console.log(hourly[i]);
        console.log(hourly[i].weather[0].main);
        console.log(hourly[i].weather[0].description);
        console.log(hourly[i].weather[0].icon);
        console.log(hourly[i].wind_speed);
      }
    });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
