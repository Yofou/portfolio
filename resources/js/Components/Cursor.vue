<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useTween, easeInOutQuint } from "vue-femtotween";

const coords = ref([0, 0]);
const scale = ref(1)
const opacity = ref(0)
const tweenedOpacity = useTween(opacity, {
})
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
  color: string
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
  opacity.value = 1

  if (event.target instanceof HTMLElement) {
    if (event.target instanceof HTMLParagraphElement || event.target instanceof HTMLHeadingElement) {
      opacity.value = 0.2
    }

    const styles = getComputedStyle(event.target)
    if (styles.cursor === "pointer") {
      isActive.type = "clickable"
      isActive.element = event.target
    }
  }
}

const watcherCallback = (currentActive: IsActive) => {
  if (currentActive.element) {
    const styles = getComputedStyle(currentActive.element)
    const rect = currentActive.element?.getBoundingClientRect()
    morphAttr.value = {
      width: parseInt(styles.width),
      height: parseInt(styles.height),
      x: rect.x,
      y: rect.y,
      borderRadius: parseInt(styles.borderRadius),
      color: currentActive.element?.getAttribute('data-color')
    }
  }
};

const onScroll = () => {
  if (isActive.type !== "none") watcherCallback(isActive)
}

const onFocus = (event: FocusEvent) => {
  if (document.activeElement instanceof HTMLElement) {
    isActive.type = "clickable"
    isActive.element = document.activeElement

    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseover', onMouseOver)
  }
}

const onMouseIn = () => {
  scale.value = 0.8
}

const onMouseOut = () => {
  scale.value = 1
}

const onFocusOut = () => {
  isActive.type = "none"
  isActive.element = undefined
  morphAttr.value = {}
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', onMouseOver)
}

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseover", onMouseOver)
  window.addEventListener("mousedown", onMouseIn);
  window.addEventListener("mouseup", onMouseOut);
  window.addEventListener('focusin', onFocus);
  window.addEventListener('focusout', onFocusOut);
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onScroll)
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mouseover", onMouseOver)
  window.removeEventListener('focusin', onFocus);
  window.removeEventListener('focusout', onFocusOut);
  window.removeEventListener("mousedown", onMouseIn);
  window.removeEventListener("mouseup", onMouseOut);
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})

watch(isActive, watcherCallback)
</script>

<template>
  <div class="fixed z-10 top-0 left-0 w-screen h-screen pointer-events-none noise-bg">
    <div
      class="cursor rounded-full border border-yellow-300"
      :class="[isActive.element ? 'shouldMorph' : '']"
      :style="{
        '--opacitiy': tweenedOpacity,
        '--x': isActive.element ? `${morphAttr?.x}px` : `${tweenedCoords[0]}px`,
        '--y': isActive.element ? `${morphAttr?.y}px` : `${tweenedCoords[1]}px`,
        '--width': isActive.element ? `${morphAttr?.width}px` : undefined,
        '--height': isActive.element ? `${morphAttr?.height}px` : undefined,
        '--borderRadius': isActive.element ? `${morphAttr?.borderRadius}px` : undefined,
        '--color': isActive.element ? morphAttr.color : undefined,
        '--scale': scale,
      }"
    />
  </div>
</template>

<style scoped>
.cursor {
  opacity: var(--opacitiy, 0);
  --dim: calc(40px * var(--scale));
  width: var(--dim);
  height: var(--dim);
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(calc(var(--x, 0px) - (var(--dim) / 2)))
    translateY(calc(var(--y, 0px) - (var(--dim) / 2)));
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1), width 150ms ease-in-out, height 150ms ease-in-out, border-radius 150ms ease-in-out, color 150ms ease-in-out;
  will-change: transform, width, height, border-radius;
}

.cursor.shouldMorph {
  transform: translate(var(--x, 0px), var(--y, 0px));
  width: var(--width, var(--dim));
  height: var(--height, var(--dim));
  border-radius: var(--borderRadius);
  border-color: var(--color, theme("colors.yellow.300"))
}
</style>
