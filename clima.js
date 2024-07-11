document.getElementById('locationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '8775c5f0eee24033e52030b04bbf80ec';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <p><strong>Cidade:</strong> ${data.name}</p>
                    <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
                    <p><strong>Descrição:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidade:</strong> ${data.main.humidity}%</p>
                    <p><strong>Velocidade do Vento:</strong> ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherInfo;
            } else {
                document.getElementById('weatherInfo').innerHTML = `<p>Erro: ${data.message}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>Erro ao obter dados do clima.</p>`;
        });
});
