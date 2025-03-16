import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
  const weatherInfo = ref()

  const selectedOption = ref(null)

  const cities = ref([
    {name: 'Казань', latitude: 55.7887, longitude: 49.1221,},
    {name: 'Краснодар', latitude: 45.0448, longitude: 38.976,},
    {name: 'Уфа', latitude: 54.7431, longitude: 55.9678,},
    {name: 'Новосибирск', latitude: 55.0415, longitude: 82.9346,},
    {name: 'Красноярск', latitude: 56.0184, longitude: 92.8672,},
    {name: 'Москва', latitude: 55.7522, longitude: 37.6156,}
  ])

  const latString = cities.value.map(option => option.latitude).join(',');
  const longString = cities.value.map(option => option.longitude).join(',');

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latString}&longitude=${longString}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_speed_80m,weather_code&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&forecast_days=1&forecast_hours=12`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка сети: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      weatherInfo.value = cities.value.map((item, index) => {
        return {
          name: item.name,
          current: data[index].current,
          hourly: data[index].hourly
        };
      });

      selectedOption.value = weatherInfo.value[0];

      return weatherInfo;
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });

  return { cities, weatherInfo, selectedOption }
})
