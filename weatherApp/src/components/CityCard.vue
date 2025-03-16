<script setup lang="ts">
import WeatherCloudySmall from "@/components/icons/WeatherCloudySmall.vue";
</script>

<template>
  <section class="cityCard">
    <p class="p2">Краснодар</p>
    <span>Солнечно</span>
    <WeatherCloudySmall/>
    <h3>32°</h3>
    <span>Влажность: 80%</span>
  </section>
</template>

<style scoped>
  .cityCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 244px;
    height: 303px;
    border-radius: 8px;
    padding: 25px 31px;
    gap: 16px;
    background: radial-gradient(134.39% 134.39% at -17.89% -22.86%, rgba(255, 255, 255, 0.2) 0%, rgba(238, 237, 237, 0.1) 100%);
    border: 1px solid;
    border-image-source: linear-gradient(144.45deg, rgba(255, 255, 255, 0.4) -14.51%, rgba(255, 255, 255, 0) 117.67%);
  }
  .cityCard p {
    margin-bottom: -8px;
  }
</style>
