<script setup lang="ts">
import CitiesWidgetCard from "@/components/CitiesWidgetCard.vue";
import IconQuestion from "@/components/icons/IconQuestion.vue";
</script>

<template>
  <article class="citiesWidget">
    <header>
      <h4>Погода в популярных городах</h4>
      <button><IconQuestion/></button>
    </header>

    <section class="citiesWidget__gallery">
      <CitiesWidgetCard/>
      <CitiesWidgetCard/>
      <CitiesWidgetCard/>
      <CitiesWidgetCard/>
      <CitiesWidgetCard/>
    </section>
  </article>
</template>

<style scoped>
  .citiesWidget {

  }
  .citiesWidget header {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
  }
  button{
    margin-left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    gap: 10px;
    border-radius: 100px;
    padding: 10px;
    background: #E9E9F31A;
    border: none;
  }
  button:hover{
    cursor: pointer;
  }
  .citiesWidget__gallery {
    display: flex;
    gap: 37px;
    overflow-x: auto;
    margin-bottom: 66px;
  }
</style>
