function getWeather(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=b59efc99d32049f0b0f122055233003&q=${city}`)
        .then(response => response.json())
        .then(data => {
            // document.querySelector('.icon').style.backgroundImage = `url('${data.current.condition.icon}')`;
            document.querySelector('.temp').textContent = `${data.current.temp_c}°C`;
            console.log(data.current.temp_c);
            document.querySelector('.desc').textContent = data.current.condition.text;
            document.getElementById("location").innerHTML = city;

        })
        .catch(error => console.error(error));
}


function showDate() {
    var today = new Date();
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][today.getDay()];
    var dayOfMonth = today.getDate();
    var monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][today.getMonth()];
    var year = today.getFullYear();
    var currentDate = dayOfMonth + " " + monthOfYear + " " + year;
    document.getElementById("currentDay").innerHTML = dayOfWeek;
    document.getElementById("currentDate").innerHTML = dayOfMonth + " " + monthOfYear + ", " + year;




  }