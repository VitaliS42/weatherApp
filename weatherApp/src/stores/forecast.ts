import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {apiResponse} from "@/api/weatherApi.ts";
import type { ICity } from '@/types/cities';

export const useForecastStore = defineStore('forecast', () => {

  // список городов. его я буду получать 1 раз при создании приложения. Там названия городов и их координаты(для API)
  const cities = ref<ICity[]>([] as ICity[]);

  // голый ответ API - массив с объектами городами и всей доступной информацией о них
  /**
   * @todo
   * Define Type
   */
  const apiWeather = ref(null);

  // новый массив с прогнозами. результат слияния cities и apiWeather. содержит только необходимые данные о погоде и русские названия городов.
  const allWeather = computed(() => {
    if (!cities.value) return [];
    return cities.value.map((item, index) => {
      return {
        name: item.name,
        current: apiWeather[index].current,
        hourly: apiWeather[index].hourly
      };
    });
  })

  // выбранный город. внутри один конкретный объект из массива allWeather
  /**
   * @todo
   * Define Type
   */
  const cityWeather = ref(null);

  // получаем список городов и их координат. на случай если он изменился.
  function setCities(cityList: ICity[]) {
    cities.value = cityList
  }

  // получаем ответ API
  async function getApiWeather() {
    apiWeather.value = apiResponse(cities.value);
  }
  // меняем значение cityWeather, когда выбран город
  function setCityWeather(chosenCity: ICity) {
    cityWeather.value = chosenCity
  }

  return { cities, apiWeather, allWeather, cityWeather, setCities, getApiWeather, setCityWeather }
})
