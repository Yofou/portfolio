<script setup lang="ts">
  import ExperienceBar from './ExperienceBar.vue';
</script>


<template>
  <section class="flex flex-col gap-4">
    <h2 class="sr-only">Experience</h2>

    <ExperienceBar :start-date="new Date(Date.now() - 300000)" />
  </section>
</template>
