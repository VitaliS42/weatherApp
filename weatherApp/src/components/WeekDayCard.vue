<script setup lang="ts">
import WeatherRainySmall from "@/components/icons/WeatherRainySmall.vue";
</script>

<template>
  <section class="weekDayCard">
    <span>Вторник</span>
    <WeatherRainySmall/>
    <span class="span-bold">35<span class="span-extraBold">°</span></span>
  </section>
</template>

<style scoped>
  .weekDayCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 122px;
    height: 120px;
    gap: 8px;
  }
</style>
