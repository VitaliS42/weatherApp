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
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding: 0 20px 56px 20px;
  }
</style>
