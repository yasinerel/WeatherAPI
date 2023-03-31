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
            document.getElementById("prec").innerHTML = `PRECIPITATION ${data.current.precip_mm} mm`;
            document.getElementById("hum").innerHTML = `HUMIDITY ${data.current.humidity} %`;
            document.getElementById("wind").innerHTML = `WIND ${data.current.wind_kph} km/h`;
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
  


  