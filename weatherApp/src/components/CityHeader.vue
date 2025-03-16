<script setup lang="ts">
  import {computed} from "vue";

  const props = defineProps({
    modelValue: {
      default: null,
    }
  })

  const selectedName = computed(() => {
    return props.modelValue ? props.modelValue.name : null;
  })
</script>

<template>
  <header class="cityHeader">
    <h4>Погода в городе {{ selectedName }}</h4>
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
