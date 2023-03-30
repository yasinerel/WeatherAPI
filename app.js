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
        })
        .catch(error => console.error(error));
}