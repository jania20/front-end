const apiKey = '47c031f324d1b0892fc1612c72f2d366';

function buscarClima() {
    const ciudad = document.getElementById('ciudad').value.trim();
    const resultadoDiv = document.getElementById('resultado');
    
    if (!ciudad) {
        resultadoDiv.innerHTML = '<p class="error">Ingresa nombre de la ciudad</p>';
        return;
    }

    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Ciudad no encontrada. Prueba con otra.');
                } else if (response.status === 401) {
                    throw new Error('Error con la API');
                } else {
                    throw new Error('Error al obtener datos');
                }
            }
            return response.json();
        })
        .then(data => {
            resultadoDiv.innerHTML = `
                <h2 class="ciudad">${data.name}, ${data.sys.country}</h2>
                <div class="datos-clima">
                    <p><strong>Temperatura:</strong> ${data.main.temp}°C (Se siente como ${data.main.feels_like}°C)</p>
                    <p><strong>Condición:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
                    <p><strong>Viento:</strong> ${data.wind.speed} km/h</p>
                </div>
            `;
        })
        .catch(error => {
            resultadoDiv.innerHTML = `<p class="error">${error.message}</p>`;
        });
}