<script setup lang="ts">
import type {IconProps} from "@/types/IconProps.ts";

const props = withDefaults(defineProps<IconProps>(), {
  size: '60px',
})
</script>

<template>
  <svg :width="props.size" :height="props.size" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41.6096 50.5H40.6404L42.3904 43.5H43.3596L41.6096 50.5Z" stroke="#56CCF2" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M27.6096 50.5H26.6404L28.3904 43.5H29.3596L27.6096 50.5Z" stroke="#56CCF2" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M35.6096 47.5H34.6404L36.3904 40.5H37.3596L35.6096 47.5Z" stroke="#56CCF2" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M21.6096 47.5H20.6404L22.3904 40.5H23.3596L21.6096 47.5Z" stroke="#56CCF2" stroke-linecap="square" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.5392 18.8939C44.1773 18.0029 46.0334 17.5002 48 17.5002C54.6274 17.5002 60 23.2088 60 30.2506C60 37.2924 54.6274 43.001 48 43.001H28H8C3.58172 43.001 0 39.1953 0 34.5007C0 29.8062 3.58172 26.0005 8 26.0005C9.4723 26.0005 10.8517 26.4231 12.0367 27.1603C12.0123 26.7771 12 26.3903 12 26.0005C12 16.6114 19.1634 9 28 9C34.4488 9 40.0066 13.0538 42.5392 18.8939Z" fill="url(#paint0_linear_2_2945)"/>
    <defs>
      <linearGradient id="paint0_linear_2_2945" x1="30" y1="47.2498" x2="29.9998" y2="8.99896" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C6C2C2"/>
        <stop offset="1" stop-color="white"/>
      </linearGradient>
    </defs>
  </svg>
</template>
