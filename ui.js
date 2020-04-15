class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.description = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.icon = document.querySelector("#w-icon");
    this.feelsLike = document.querySelector("#w-feels-like");
    this.wind = document.querySelector("#w-wind");
    this.humidity = document.querySelector("#w-humidity");
    this.pressure = document.querySelector("#w-pressure");
  }
  showInfo(results) {
    this.location.innerText = results.name;
    this.description.innerText = results.weather[0].description;
    this.string.innerText = `${Math.round(results.main.temp)} °C `;
    this.icon.src = `http://openweathermap.org/img/w/${results.weather[0].icon}.png`;
    this.feelsLike.innerText = `Feels Like: ${Math.round(
      results.main.feels_like
    )} °C`;
    this.wind.innerText = `Wind: ${results.wind.speed} m/s`;
    // console.log(results.wind);
    this.humidity.innerText = `Humidity: ${results.main.humidity}%`;
    this.pressure.innerText = `Pressure: ${results.main.pressure} hPa`;
  }
}
