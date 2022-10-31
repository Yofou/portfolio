<script lang="ts" setup>
const props = defineProps<{
  src: string,
  alt?: string,
}>()
</script>

<template>
  <li class="bg-purple-300 used-item rounded-[5px] group grid text-white/80 grid-cols-[20px,max-content] items-center font-bold gap-2 tracking-wider uppercase cursor-pointer px-4 py-2">
    <img width="150" height="150" class="pointer-events-none select-none" :src="src" :alt="props.alt ?? ''">
    <slot />
  </li>
</template>

<style>
 .used-item:nth-of-type(n+15) {
   @apply hidden md:grid;
 }

 .cancel > .used-item {
   @apply grid;
 }
</style>
