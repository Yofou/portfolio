<script setup lang="ts">
  import Cursor from "./Cursor.vue"
</script>

<template>
  <Cursor />
  <main
    class="
      w-full
      justify-center
      min-h-screen
      grid-flow-row
      auto-rows-max
      grid grid-cols-container
      py-20
      px-4
      text-white
      selection:bg-purple-500
    "
  >
    <slot />
  </main>
</template>
