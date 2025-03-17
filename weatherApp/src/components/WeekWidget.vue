<script setup lang="ts">
import WeekWidgetCard from "@/components/WeekWidgetCard.vue";
</script>

<template>
  <article class="weekWidget">
    <WeekWidgetCard/>
    <WeekWidgetCard/>
    <WeekWidgetCard/>
    <WeekWidgetCard/>
    <WeekWidgetCard/>
    <WeekWidgetCard/>
    <WeekWidgetCard/>
  </article>
</template>

<style scoped>
  .weekWidget{
    padding-bottom: 56px;
    display: flex;
    gap: 20px;
    overflow-x: auto;
  }
</style>
