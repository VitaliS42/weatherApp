<script setup lang="ts">
import WeekDayCard from "@/components/WeekDayCard.vue";
</script>

<template>
  <article class="weekCard">
    <WeekDayCard/>
    <WeekDayCard/>
    <WeekDayCard/>
    <WeekDayCard/>
    <WeekDayCard/>
    <WeekDayCard/>
    <WeekDayCard/>
  </article>
</template>

<style scoped>
  .weekCard{
    margin-bottom: 56px;
    display: flex;
    gap: 20px;
  }
</style>
