<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import DropDown from "@/components/DropDown.vue";
import {onMounted, ref, watch} from "vue";
import CityHeader from "@/components/CityHeader.vue";
import {useWeatherStore} from "@/stores/weather.ts";

const forecast = useWeatherStore()

const weatherInfo = ref()

const selectedOption = ref(null)

onMounted(async () => {
  await forecast.fetchWeatherInfo()
  weatherInfo.value = forecast.weatherInfo
  selectedOption.value = weatherInfo.value[0]
})

watch(selectedOption, (currentValue, oldValue) => {
  console.log(currentValue)
    forecast.selectedCity.value=currentValue;
    console.log("tuturu " + forecast.weatherInfo[1].name)
    console.log("tututu " + forecast.selectedCity.name)
})




</script>

<template>
  <header>
    <div class="header__flex">
      <nav>
        <RouterLink to="/" class="p4">Главная</RouterLink>
        <RouterLink to="/weekly" class="p4">Погода за неделю</RouterLink>
      </nav>
      <DropDown :options="weatherInfo" v-model="selectedOption"/>
    </div>
    <CityHeader v-model="selectedOption"/>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  margin-bottom: 56px;
  margin-top: 39px;
}
.header__flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a.router-link-exact-active {
  color: #FFFFFF;
}
nav a {
  padding: 10px 16px 10px 16px;
  border-right-width: 1px;
  color: #FFFFFF66;
  background: #E9E9F31A;
}
nav a:first-of-type {
  border-radius: 8px 0 0 8px;
  border-right: 1px solid #E9E9F333;
}
nav a:last-of-type {
  border-radius: 0 8px 8px 0;
}
</style>
