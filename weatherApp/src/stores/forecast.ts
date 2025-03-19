import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useForecast = defineStore('forecast', () => {
  const cities = ref();
  const apiWeather = ref();
  // const doubleCount = computed(() => count.value * 2)
  const allWeather = ref();
  const cityWeather = ref();
  function increment() {
    count.value++
  }

  function getApiWeather() {

  }

  function setApiWeather() {

  }

  function setCityWeather() {

  }

  return { count, doubleCount, increment }
})
