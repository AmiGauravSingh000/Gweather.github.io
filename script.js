const apiKey = "108fb61a310d4df2c826e39f63e3e9c9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  
  // Check if the response contains valid data
  if (data.name) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
  } else {
    document.querySelector(".city").innerHTML = "City not found";
    document.querySelector(".temp").innerHTML = "";
    document.querySelector(".humidity").innerHTML = "";
    document.querySelector(".wind").innerHTML = "";
    document.querySelector(".weather").style.display = "block";

    // You may want to clear other elements as well
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      checkWeather(searchBox.value);
    }
  });
  
