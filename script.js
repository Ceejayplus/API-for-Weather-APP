let weather = {
    apiKey : "d74b2d05c9a477273bc222643286226a",
    fetchWeather: function (city) {
     fetch(
       "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        + this.apiKey
    )
        .then((response) => response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data) {
       const {name} = data;
       const {icon, description,} = data.weather[0];
       const {temp, humidity , pressure} = data.main;
       const {speed} = data.wind;
       const {country} = data.sys;
       console.log(name,icon,description,temp,humidity,speed,country,pressure)

       document.querySelector(".name").innerText = name
       document.querySelector(".cities").innerText = name
       document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png"
       document.querySelector(".condition").innerText = description
       document.querySelector(".country").innerText = country 
       document.querySelector(".temp").innerText = temp + "°C"
       document.querySelector(".humidity").innerText = humidity + "%"
       document.querySelector(".wind").innerText = speed + "km/h"
       document.querySelector(".cities").innerText = "pressure: " + pressure + "mmHg" 
        

    },
    search: function(){
        this.fetchWeather(document.querySelector(".search ").value)
    }
};
document.querySelector(".panel button ").addEventListener("click", function () {
    weather.search();
})

if(jsonResponse.weather[0].main === "Rain"){
    getSelection.style.backgroundImage = `url(/img/raining.jpg)`
}