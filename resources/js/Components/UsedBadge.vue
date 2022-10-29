<script lang="ts" setup>
const props = defineProps<{
  src: string,
  alt?: string,
}>()
</script>

<template>
  <p class="bg-purple-300 rounded-[5px] group grid text-white/80 grid-cols-[20px,max-content] items-center font-bold gap-2 tracking-wider uppercase cursor-pointer px-4 py-2">
    <img class="pointer-events-none select-none" :src="src" :alt="props.alt ?? ''">
    <slot />
  </p>
</template>
