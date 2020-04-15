class Weather {
  constructor(city, country) {
    this.apiKey = "8ddf936ab2cd95c779a03824803c3297";
    this.city = city;
    this.country = country;
  }
  // Fetch Weather from api
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.city},${this.country}&appid=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }
  //Change the weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
