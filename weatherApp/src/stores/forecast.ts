import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {apiResponse} from "@/api/weatherApi.ts";
import type {ICity, ICityForecast} from '@/types/Cities';
import type {IAPICity} from "@/types/Forecasts.ts";

export const useForecastStore = defineStore('forecast', () => {

  const cities = ref<ICity[]>([]);
  function setCities(cityList: ICity[]) {
    cities.value = cityList
  }

  /**
   * @todo
   * Define Type
   */
  const apiWeather = ref<IAPICity[]>([]);
  async function getApiWeather() {
    apiWeather.value = apiResponse(cities);
  }


  const allWeather = computed(() => {
    if (cities.value.length === 0 || apiWeather.value.length === 0) return [];
    return cities.value.map((item, index) => {
      const weatherData = apiWeather.value[index];
      return {
        name: item.name,
        current: weatherData ? weatherData.current : null,
        hourly: weatherData ? weatherData.hourly : null
      };
    });
  });

  const cityWeather = ref<ICityForecast>();
  function setCityWeather(chosenCity: ICityForecast) {
    cityWeather.value = chosenCity
  }

  return { cities, apiWeather, allWeather, cityWeather, setCities, getApiWeather, setCityWeather }
})
