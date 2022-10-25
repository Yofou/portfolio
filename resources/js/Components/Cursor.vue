<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTween, easeInOutQuint } from "vue-femtotween";

const coords = ref([0, 0]);

const tweenedCoords = useTween(coords, {
  easeFunc: easeInOutQuint,
  time: 0,
  precision: 1,
});

onMounted(() => {
  window.addEventListener("mousemove", (event: MouseEvent) => {
    coords.value[0] = event.x;
    coords.value[1] = event.y;
  });
});
</script>

<template>
  <div class="fixed z-10 top-0 left-0 w-screen h-screen pointer-events-none">
    <div
      class="cursor rounded-full border border-yellow-300"
      :style="{
        '--x': `${tweenedCoords[0]}px`,
        '--y': `${tweenedCoords[1]}px`,
      }"
    />
  </div>
</template>

<style scoped>
.cursor {
  --dim: 40px;
  width: var(--dim);
  height: var(--dim);
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(calc(var(--x, 0px) - (var(--dim) / 2)))
    translateY(calc(var(--y, 0px) - (var(--dim) / 2)));
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  will-change: all;
}
</style>
