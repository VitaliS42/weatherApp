<script setup lang="ts">
import WeatherCloudySmall from "@/components/icons/WeatherCloudySmall.vue";
import DayWidgetCard from "@/components/DayWidgetCard.vue";
</script>

<template>
  <article class="dayWidget">
    <section class="dayWidget__summary">
      <WeatherCloudySmall size="180px"/>
      <span>34°</span>
      <div>
        <p class="p3">Облачно</p>
        <p class="p3">Влажность: 85%</p>
        <p class="p3">Ветер: 1 м/с</p>
      </div>
    </section>
    <section class="dayWidget__timeTable">
      <DayWidgetCard/>
      <DayWidgetCard/>
      <DayWidgetCard/>
      <DayWidgetCard/>
      <DayWidgetCard/>
      <DayWidgetCard/>
      <DayWidgetCard/>
      <DayWidgetCard/>
    </section>
  </article>
</template>

<style scoped>
  .dayWidget {
    margin-bottom: 56px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .dayWidget__summary {
    display: flex;
    flex-wrap: wrap;
    gap: 44px;
    align-items: center;
    padding: 0 20px;
  }
  .dayWidget__summary span {
    font-weight: 700;
    font-size: 80px;
    line-height: 110.00000000000001%;
  }
  .dayWidget__summary p {
    margin-bottom: 12px;
  }
  .dayWidget__timeTable {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    .dayWidget__summary span {
      font-size: 100px;
    }
  }
</style>
