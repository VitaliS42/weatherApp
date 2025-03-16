<script setup lang="ts">
  import WeatherCloudySmall from "@/components/icons/WeatherCloudySmall.vue";
  import TimeSlot from "@/components/TimeSlot.vue";

  const props = defineProps({
    dayWeather: {
      type: Option,
      required: true
    },
    modelValue: {
      default: null
    }
  })

</script>

<template>
  <Article class="dayCard">
    <section class="dayCard__flex">
      <div class="dayCard__summary">
        <WeatherCloudySmall size="180px"/>
        <span>34°</span>
        <div>
          <p class="p3">Облачно</p>
          <p class="p3">Влажность: 85%</p>
          <p class="p3">Ветер: 1 м/с</p>
        </div>
      </div>
      <div class="dayCard__timeTable">
        <TimeSlot/>
        <TimeSlot/>
        <TimeSlot/>
        <TimeSlot/>
        <TimeSlot/>
        <TimeSlot/>
        <TimeSlot/>
        <TimeSlot/>
      </div>
    </section>
  </Article>
</template>

<style scoped>
  .dayCard {
    margin-bottom: 56px;
  }
  .dayCard__flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .dayCard__summary {
    display: flex;
    gap: 44px;
    align-items: center;
  }
  .dayCard__summary span {
    font-weight: 700;
    font-size: 100px;
    line-height: 110.00000000000001%;
  }
  .dayCard__summary p {
    margin-bottom: 12px;
  }
  .dayCard__timeTable {
    display: flex;
    flex-direction: column;
  }
</style>
