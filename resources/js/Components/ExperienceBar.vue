<script setup lang="ts">
import ms from "ms"
const props = defineProps<{
  startDate: Date;
}>();

console.log(props.startDate.getTime())
const duration = Date.now() - props.startDate.getTime();
</script>

<template>
  <div>
    {{ duration }}
    {{ ms(duration, { long: true }) }}
  </div>
</template>
