window.addEventListener('load', getWeather);
function getWeather(event) {
    event.preventDefault();
    const city = document.getElementById('city').value; 
    const apiKey = 'b59efc99d32049f0b0f122055233003';
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Make API call to get today's weather
        fetch(`https://api.weatherapi.com/v1/current.json?key=b59efc99d32049f0b0f122055233003&q=${city}`)
        .then(response => response.json())
        .then(data => {
            // update current weather information
            document.querySelector('.temp').textContent = `${data.current.temp_c}°C`;
            document.querySelector('.desc').textContent = data.current.condition.text;
            document.getElementById("location").innerHTML = city;

            // extract and update additional information
            document.getElementById("prec").innerHTML = `PRECIPITATION: ${data.current.precip_mm} mm`;
            document.getElementById("hum").innerHTML = `HUMIDITY: ${data.current.humidity} %`;
            document.getElementById("wind").innerHTML = `WIND: ${data.current.wind_kph} km/h`;
        
            // set background image based on weather condition
            const weatherCondition = data.current.condition.code;
            const weatherGradient = document.querySelector('.weather-gradient');
            if (weatherCondition === 1000) {
                weatherGradient.style.backgroundImage = "url('https://media.istockphoto.com/id/915614956/photo/spring-daisy-flowers.jpg?s=612x612&w=0&k=20&c=0Q_UPeUOTCRdvwUzI3EFx24EoZgYR5rVFBR_iOF9uPc=')";
            } else if (weatherCondition >= 1003 && weatherCondition <= 1006) {
                weatherGradient.style.backgroundImage = "url('https://i.pinimg.com/originals/e5/bd/f6/e5bdf6f8126d34510940290b2c61cb29.jpg')";
            } else if (weatherCondition >= 1009 && weatherCondition <= 1030) {
                weatherGradient.style.backgroundImage = "url('https://media.istockphoto.com/id/1279089315/photo/dramatic-scene-of-sudden-weather-change-wherein-huge-balls-of-rainy-clouds-are-covering-the.jpg?s=612x612&w=0&k=20&c=I_ev_XbxcAQReWD3g6kYBde00K9vt8BcRkh581ULGEc=')";
            } else if (weatherCondition >= 1063 && weatherCondition <= 1072) {
                weatherGradient.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20210908/pngtree-weather-and-rainy-raindrops-on-the-glass-stay-photography-map-with-image_830605.jpg')";
            } else if (weatherCondition >= 1087 && weatherCondition <= 1135) {
                weatherGradient.style.backgroundImage = "url('https://i.pinimg.com/736x/89/7d/83/897d838065e93004c518c3fd4150e00c.jpg)";
            } else if (weatherCondition >= 1137 && weatherCondition <= 1150) {
                weatherGradient.style.backgroundImage = "url('https://img.freepik.com/free-photo/beautiful-forested-mountains-fog_181624-719.jpg')";
            } else if (weatherCondition >= 1153 && weatherCondition <= 1168) {
                weatherGradient.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20210908/pngtree-weather-and-rainy-raindrops-on-the-glass-stay-photography-map-with-image_830605.jpg')";
            } else if (weatherCondition >= 1171 && weatherCondition <= 1189) {
                weatherGradient.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20210908/pngtree-weather-and-rainy-raindrops-on-the-glass-stay-photography-map-with-image_830605.jpg')";
            } else if (weatherCondition >= 1192 && weatherCondition <= 1195) {
                weatherGradient.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20210908/pngtree-weather-and-rainy-raindrops-on-the-glass-stay-photography-map-with-image_830605.jpg')";
            } else if (weatherCondition >= 1197 && weatherCondition <= 1201) {
                weatherGradient.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20210908/pngtree-weather-and-rainy-raindrops-on-the-glass-stay-photography-map-with-image_830605.jpg')";
            } else if (weatherCondition >= 1204 && weatherCondition <= 1237) {
                weatherGradient.style.backgroundImage = "url('https://img.freepik.com/premium-photo/road-winter-snow-covered-forest_303941-1580.jpg?w=2000')";
            }
        
        
        })
        .catch(error => console.error(error));
  
    // Make API call to get tomorrow's weather
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&dt=${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('nextW1').innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c}°C`;
      })
      .catch(error => console.error(error));
  
    // Make API call to get weather for the day after tomorrow
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&dt=${dayAfterTomorrow.getFullYear()}-${dayAfterTomorrow.getMonth() + 1}-${dayAfterTomorrow.getDate()}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('nextW2').innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c}°C`;
      })
      .catch(error => console.error(error));
  
    // Make API call to get weather for the day after the day after tomorrow (i.e., three days from now)
    const threeDaysFromNow = new Date(today);
    threeDaysFromNow.setDate(today.getDate() + 3);
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&dt=${threeDaysFromNow.getFullYear()}-${threeDaysFromNow.getMonth() + 1}-${threeDaysFromNow.getDate()}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('nextW3').innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c}°C`;
      })
      .catch(error => console.error(error));
  }

  document.addEventListener("DOMContentLoaded", function() {
    getWeather(new Event("submit"));
    document.getElementById("city").value = "Bayburt";
  });
  

  function showDate() {
    var today = new Date();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = daysOfWeek[today.getDay()];
    var dayOfMonth = today.getDate();
    var monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][today.getMonth()];
    var year = today.getFullYear();
    var currentDate = dayOfMonth + " " + monthOfYear + " " + year;
    
    document.getElementById("currentDay").innerHTML = dayOfWeek;
    document.getElementById("currentDate").innerHTML = dayOfMonth + " " + monthOfYear + ", " + year;
    
    var nextDays = [];
    for (var i = 1; i <= 3; i++) {
      var nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      nextDays.push(daysOfWeek[nextDate.getDay()]);
    }
    
    document.getElementById("next1").innerHTML = nextDays[0];
    document.getElementById("next2").innerHTML = nextDays[1];
    document.getElementById("next3").innerHTML = nextDays[2];
  }
  


  