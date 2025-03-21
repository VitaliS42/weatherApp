<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DropDown from "@/components/DropDown.vue";
import {ref} from "vue";
import {useForecastStore} from "@/stores/forecast.ts";

const forecast = useForecastStore();

const cityList = ([
  {name: 'Казань', latitude: 55.7887, longitude: 49.1221,},
  {name: 'Краснодар', latitude: 45.0448, longitude: 38.976,},
  {name: 'Уфа', latitude: 54.7431, longitude: 55.9678,},
  {name: 'Новосибирск', latitude: 55.0415, longitude: 82.9346,},
  {name: 'Красноярск', latitude: 56.0184, longitude: 92.8672,},
  {name: 'Москва', latitude: 55.7522, longitude: 37.6156,}
])
forecast.setCities(cityList);

const options = ref([
  {name: 'Казань', value: 1,},
  {name: 'Краснодар', value: 2,},
  {name: 'Уфа', value: 3,},
  {name: 'Новосибирск', value: 4,},
  {name: 'Красноярск', value: 5,},
  {name: 'Москва', value: 6,}
])

const parentSelectedOption = ref(options[0])

</script>

<template>
  <header>
    <div class="header__flex">
      <nav>
        <RouterLink to="/" class="p4">Главная</RouterLink>
        <RouterLink to="/weekly" class="p4">Погода за неделю</RouterLink>
      </nav>
      <DropDown :options="options" v-model="parentSelectedOption"/>
    </div>
    <h4>Погода в городе {{ parentSelectedOption?.name }}</h4>
    <p class="p1">понедельник, 25 августа</p>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  margin-bottom: 48px;
  margin-top: 39px;
  padding: 0 20px;
}
.header__flex {
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
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
header h4 {
  margin-bottom: 12px;
}
header p{
  color: #E9E9F399;
}
</style>
