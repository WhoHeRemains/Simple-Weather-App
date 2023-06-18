const form = document.querySelector('form');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d0eb2a8552db11a096ab2c8891cf401a
    `;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temp = data.main.temp;
            output.innerHTML = `The temperature in ${city} is ${temp-272.999999}°C with ${weather}.`;
        })
        .catch(error => {
            output.innerHTML = `There was an error. Please try again.`;
        })
});
