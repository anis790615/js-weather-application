// Init the storage class
const storage = new Storage();
// Get Stored Location Data
const weatherLocation = storage.getLocationData();
// Init the weather class to fetch the weather and ui class to show it
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();
// console.log(weatherLocation);

// Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);
// Change Location event
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;
  weather.changeLocation(city, country);
  storage.setLocationData(city, country);
  // Get and display weather
  getWeather();
  // Close Modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.showInfo(results);
      // console.log(results);
    })
    .catch((err) => console.log(err));
}
