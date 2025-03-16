<script setup lang="ts">
import type {IconProps} from "@/types/IconProps.ts";

const props = withDefaults(defineProps<IconProps>(), {
  size: '60px',
})
</script>

<template>
  <svg :width="props.size" :height="props.size" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="44.0002" cy="25" r="16" fill="#FFCB4C" fill-opacity="0.8"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0364 36.0923C12.0121 35.7317 11.9998 35.3678 11.9998 35.001C11.9998 26.1644 19.1632 19.001 27.9998 19.001C34.4487 19.001 40.0065 22.8163 42.5391 28.3128C44.1771 27.4743 46.0332 27.0012 47.9998 27.0012C54.6272 27.0012 59.9998 32.3738 59.9998 39.0012C59.9998 45.6286 54.6272 51.0012 47.9998 51.0012H47.9993H7.99927V51.0007C3.58121 51.0005 -0.000244141 47.4188 -0.000244141 43.0007C-0.000244141 38.5825 3.58148 35.0007 7.99976 35.0007C9.47205 35.0007 10.8515 35.3985 12.0364 36.0923Z" fill="url(#paint0_linear_2_2850)"/>
    <defs>
      <linearGradient id="paint0_linear_2_2850" x1="-3.75024" y1="19.001" x2="73.2499" y2="51.0008" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#E0E0E0"/>
      </linearGradient>
    </defs>
  </svg>
</template>

