<script setup lang="ts">
  const props = defineProps({
    city: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <header class="cityHeader">
    <h4>Погода в городе {{ props.city }}</h4>
    <p class="p1">понедельник, 25 августа</p>
  </header>
</template>

<style scoped>
  .cityHeader {
    margin-bottom: 48px;
  }
  .cityHeader h4{
    margin-bottom: 12px;
  }
  .cityHeader p{
    color: #E9E9F399;
  }
</style>
