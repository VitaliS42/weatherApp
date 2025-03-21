export const apiResponse = async (cities) => {
    const latString = cities.value.map(option => option.latitude).join(',');
    const longString = cities.value.map(option => option.longitude).join(',');
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latString}&longitude=${longString}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_speed_80m,weather_code&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&forecast_days=1&forecast_hours=12`;

    await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}
