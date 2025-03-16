<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import IconArrow from "@/components/icons/IconArrow.vue";

  const props = defineProps({
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      default: null
    }
  })

  const dropDown = ref(null)

  const emit = defineEmits(['update:modelValue'])

  // const selectedOption = ref(null)
  const selectedOption = ref(props.options[0].name)
  const isDropDownVisible = ref(false)

  const mappedSelectedOption = computed( () => {
    return (selectedOption.value?.name || selectedOption.value)
  })

  const toggleOptionSelect = (option) => {
    selectedOption.value = option;
    emit('update:modelValue', option)
    isDropDownVisible.value = false
  }

  const closeDropDown = (element) => {
    if(!dropDown.value.contains(element.target)){
      isDropDownVisible.value = false
    }
  }

  onMounted( ()=> {
    window.addEventListener('click', closeDropDown)
    emit('update:modelValue', props.options[0])
  })
  onBeforeUnmount( ()=> {
    window.removeEventListener('click', closeDropDown)
  })

</script>

<template>
  <div class="dropdown-wrapper" ref="dropDown">
    <div class="dropdown-selected-option" @click = "isDropDownVisible = !isDropDownVisible">
      {{ mappedSelectedOption }}
      <div class="dropdown-icon" :class="{ active: isDropDownVisible, }"><IconArrow/></div>
    </div>
    <div
      class="options-wrapper"
      v-if="isDropDownVisible"
    >
      <div
        class="option"
        v-for="(option, index) in options"
        key="index"
        @click = "toggleOptionSelect(option)"
      >{{option.name || option}}</div>
    </div>
  </div>

</template>

<style scoped>
.dropdown-wrapper {
  position: relative;
}

.dropdown-selected-option {
  padding: 10px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #E9E9F31A;
  color: #FFFFFF;
  width: 246px;
  height: 46px;
}
.dropdown-icon {
  position: absolute;
  right: 15px;
  transform: rotate(-90deg);
  transition: transform 300ms cubic-bezier(0.07, 0.76, 0.93, 0.59);
}
.dropdown-icon.active{
  transform: rotate(0deg);
}
.options-wrapper {
  margin-top: 12px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #2F73A5;
  border: none;
  z-index: 1000;
  border-radius: 8px;
  width: 246px;
  color: #FFFFFF;
}
.option {
  padding: 10px;
  cursor: pointer;
}
.option:first-of-type{
  border-radius: 8px 8px 0 0;
}
.option:last-of-type{
  border-radius: 0 0 8px 8px;
}
.option:hover {
  background-color: #E9E9F333;
}
</style>
