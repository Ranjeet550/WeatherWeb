
const apikey ="c8964a6ba5b524cf6c0a5273fd413d0c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

var temp = document.querySelector(".temp")
var city = document.querySelector(".city");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");
var weathericon = document.querySelector(".weather-icon")
var weathertype = document.querySelector(".weathertype")


function search(){
    const cityname = document.getElementById("cityname").value;

    async function checkWeather() {
    const response = await fetch(apiurl + `&q=${cityname}` + `&appid=${apikey}`);
    var data = await response.json();    
    // page data changes 
    if(`${data.name}` == "Innichen"){
        city.innerHTML = "India";
    }
    else{
        city.innerHTML = data.name;
    }
    temp.innerHTML = data.main.temp;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = data.wind.speed;
    weathertype.innerHTML = data.weather[0].main;

    var wethertype = ""
            if(data.weather[0].main == 'Clouds'){
                wethertype  = "clouds" 
                }
            else if(data.weather[0].main == 'Clear'){
                wethertype  = "clear" 
                }
               else if(data.weather[0].main == 'Drizzle'){
                    wethertype  = "drizzle" 
                    }
              else if(data.weather[0].main == 'Mist'){
                    wethertype  = "mist" 
                    }
              else if(data.weather[0].main == 'Rain'){
                    wethertype  = "rain" 
                    }
              else if(data.weather[0].main == 'Snow'){
                    wethertype  = "snow" 
                    }
                    
                else{
                wethertype  = "mist" 
                     }
      weathericon.src = "images/"+`${wethertype}.png`;
      
}
checkWeather();
}