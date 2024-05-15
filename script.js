// Add your JavaScript code here
fetch('https://api.openweathermap.org/data/2.5/weather?q=Tartu,ee&units=metric&appid=6e10bbab8fbc4009241dd8a9b5fcd951')
    .then(response => response.json())
    .then(data => {
        const temperatureElement = document.querySelector('.temperature');
        if (temperatureElement) {
            const temperature = Math.round(data.main.temp);
            temperatureElement.textContent = `${temperature}°C`;
        }
    })
    .catch(error => console.error('Error:', error));
