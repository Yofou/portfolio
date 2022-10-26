<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useTween, easeInOutQuint } from "vue-femtotween";

const coords = ref([0, 0]);
type IsActive = {
  type: 'none' | 'clickable',
  element?: HTMLElement,
}

type MorphAttr = {
  width: number,
  height: number,
  x: number,
  y: number,
  borderRadius: number,
}

const isActive = reactive<IsActive>({ type: 'none' })
const morphAttr = ref<Partial<MorphAttr>>({})

const tweenedCoords = useTween(coords, {
  easeFunc: easeInOutQuint,
  time: 0,
  precision: 1,
});

const onMouseMove = (event: MouseEvent) => {
  coords.value[0] = event.x;
  coords.value[1] = event.y;
}

const onMouseOver = (event: MouseEvent) => {
    isActive.type = "none"
    isActive.element = undefined
    morphAttr.value = {}

    if (event.target instanceof HTMLElement) {
      const styles = getComputedStyle(event.target)
      if (styles.cursor === "pointer") {
        isActive.type = "clickable"
        isActive.element = event.target
      }
    }
  }

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseover", onMouseOver)
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mouseover", onMouseOver)
})

watch(isActive, (currentActive) => {
  if (currentActive.element) {
    const styles = getComputedStyle(currentActive.element)
    const rect = currentActive.element?.getBoundingClientRect()
    morphAttr.value = {
      width: parseInt(styles.width),
      height: parseInt(styles.height),
      x: rect.x,
      y: rect.y,
      borderRadius: parseInt(styles.borderRadius)
    }
  }
})
</script>

<template>
  <div class="fixed z-10 top-0 left-0 w-screen h-screen pointer-events-none noise-bg">
    <div
      class="cursor rounded-full border border-yellow-300"
      :class="[isActive.element ? 'shouldMorph' : '']"
      :style="{
        '--opacitiy': tweenedCoords[0] ? 1 : 0,
        '--x': isActive.element ? `${morphAttr?.x}px` : `${tweenedCoords[0]}px`,
        '--y': isActive.element ? `${morphAttr?.y}px` : `${tweenedCoords[1]}px`,
        '--width': isActive.element ? `${morphAttr?.width}px` : undefined,
        '--height': isActive.element ? `${morphAttr?.height}px` : undefined,
        '--borderRadius': isActive.element ? `${morphAttr?.borderRadius}px` : undefined,
      }"
    />
  </div>
</template>

<style scoped>
.cursor {
  opacity: var(--opacitiy, 0);
  --dim: 40px;
  width: var(--dim);
  height: var(--dim);
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(calc(var(--x, 0px) - (var(--dim) / 2)))
    translateY(calc(var(--y, 0px) - (var(--dim) / 2)));
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1), width 150ms ease-in-out, height 150ms ease-in-out, border-radius 150ms ease-in-out, opacity 1000ms ease-in-out 500ms;
  will-change: transform, width, height, border-radius;
}

.cursor.shouldMorph {
  transform: translate(var(--x, 0px), var(--y, 0px));
  width: var(--width, var(--dim));
  height: var(--height, var(--dim));
  border-radius: var(--borderRadius);
}
</style>
