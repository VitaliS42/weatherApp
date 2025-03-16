<script setup lang="ts">
import WeatherCloudySmall from "@/components/icons/WeatherCloudySmall.vue";
</script>

<template>
  <section class="timeSlot">
    <div class="timeSlot__time">
      <span>00:00</span>
      <span>Ночь</span>
    </div>
    <div class="timeSlot__temperature timeSlot__item-centered">
      <h3>34°</h3>
    </div>
    <div class="timeSlot__weather">
      <WeatherCloudySmall/>
      <span>Солнечно</span>
    </div>
    <div class="timeSlot__wind timeSlot__item-centered">
      <span class="span-bold">1 м/с</span>
    </div>
    <div class="timeSlot__humidity timeSlot__item-centered">
      <span class="span-bold">85%</span>
    </div>
  </section>
</template>

<style scoped>
  .timeSlot {
    display: grid;
    grid-template-columns: 107px 137px 194px 83px 87px;
    grid-column-gap: 10px;
    height: 78px;
    border-bottom: 1px solid #E9E9F31A;
  }
  .timeSlot__item-centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .timeSlot__time {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .timeSlot__weather {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
